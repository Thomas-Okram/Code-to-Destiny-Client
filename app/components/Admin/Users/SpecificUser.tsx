"use client";
import { styles } from "@/app/styles/style";
import {
  useGetSpecificUserQuery,
  useDeleteCourseFromUserMutation,
  useUpdateSpecificUserMutation,
} from "@/redux/features/user/userApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../Loader/Loader";
import avatarIcon from "../../../../public/assests/avatar.png";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { AiOutlineCamera } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

type Props = {
  id: string;
};

type formData = {
  name: string;
  email: string;
  avatar: string | ArrayBuffer | null;
  courseId: string;
};

const SpecificUser = ({ id }: Props) => {
  const { data, isSuccess, error, isLoading, refetch } =
    useGetSpecificUserQuery(id, {});
  const {
    isLoading: isCourseLoading,
    error: coursesError,
    data: fetchedCoursesData,
    refetch: refetchCourses,
  } = useGetAllCoursesQuery({}, { refetchOnMountOrArgChange: true });
  const [coursesData, setCoursesData] = useState<any>([]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    avatar: {
      url: "",
    },
    courses: [],
  });
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    avatar: "",
    courseId: "",
  });
  const [name, setName] = useState(userData && userData?.name);
  // const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [
    updateUser,
    {
      data: updateUserData,
      isSuccess: updateSuccess,
      error: updateError,
      isLoading: updating,
    },
  ] = useUpdateSpecificUserMutation();
  const [
    deleteCourseFromUser,
    {
      isSuccess: deleteSuccess,
      error: deleteError,
      isLoading: deleting,
    },
  ] = useDeleteCourseFromUserMutation();
  // const [loadUser, setLoadUser] = useState(false);
  // const {} = useLoadUserQuery(undefined, { skip: loadUser ? false : true });

  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;
        setFormData({ ...formData, avatar: avatar });
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     setLoadUser(true);
  //   }
  //   if (error || updateError) {
  //     console.log(error);
  //   }
  //   if(success){
  //     toast.success("Profile updated successfully!");
  //     setLoadUser(true);
  //   }
  // }, [isSuccess, error,success, updateError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.email !== "" ||
      formData.name !== "" ||
      formData.avatar !== "" ||
      formData.courseId !== ""
    ) {
      await updateUser({ formData, id });
    } else {
      toast.error("No new data to update");
    }
  };

  useEffect(() => {
    if (data) {
      setUserData(data?.user);
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
        console.log(errorData);
      }
    }

    if (fetchedCoursesData) {
      setCoursesData(fetchedCoursesData?.courses);
    }
    if (coursesError) {
      if ("data" in coursesError) {
        const errorData = coursesError as any;
        toast.error(errorData?.data?.message);
        console.log(errorData);
      }
    }
    if (updateSuccess) {
      refetch();
      toast.success("Profile updated successfully!");
    }
    if (updateError) {
      if ("data" in updateError) {
        const errorMessage = updateError as any;
        toast.error(errorMessage.data.message);
        console.log(errorMessage);
      }
    }
    if (deleteSuccess) {
      refetch();
      toast.success("Course removed from user");
    }
    if (deleteError) {
      if ("data" in deleteError) {
        const errorMessage = deleteError as any;
        toast.error(errorMessage.data.message);
        console.log(errorMessage);
      }
    }
  }, [
    data,
    error,
    isSuccess,
    fetchedCoursesData,
    coursesError,
    updateSuccess,
    updateError,
    deleteError,
    deleteSuccess
  ]);

  console.log(userData);
  console.log(coursesData);

  return (
    <div className="w-full">
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full grid pr-4 grid-cols-2  sm:grid-col-1 items-start mt-[20%]">
          <div className="">
            <div className="w-full  flex justify-center dark:text-white">
              <div className="relative">
                <Image
                  src={userData?.avatar ? userData?.avatar?.url : avatarIcon}
                  alt=""
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
                />
                <input
                  type="file"
                  name=""
                  id="avatar"
                  className="hidden"
                  onChange={imageHandler}
                  accept="image/png,image/jpg,image/jpeg,image/webp"
                />
                <label htmlFor="avatar">
                  <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
                    <AiOutlineCamera
                      size={20}
                      className="z-1 dark:text-white"
                    />
                  </div>
                </label>
              </div>
            </div>
            <br />
            <br />
            <div className="w-full pl-6 800px:pl-10">
              <form onSubmit={handleSubmit}>
                <div className="800px:w-[50%] m-auto block pb-4">
                  <div className="w-[100%]">
                    <label className="block pb-2 dark:text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      value={userData?.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-[100%] pt-2 dark:text-white">
                    <label className="block pb-2">Email Address</label>
                    <input
                      type="text"
                      className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      value={userData?.email}
                    />
                  </div>
                  <div className="w-[100%] pt-2 dark:text-white">
                    <label className="block pb-2">User courses</label>
                    {deleting ?<Loader/> :userData?.courses.length > 0 ? (
                      userData?.courses?.map((course: any, index: number) => {
                        const courseId = course?.courseId
                        return (<span key={index} className="flex gap-2">
                          <p>{index +1}{". " + course?.courseId}</p>
                          <MdDeleteOutline
                            className="cursor-pointer text-red-500"
                            onClick={() =>
                              deleteCourseFromUser({
                                courseId,id
                              })
                            }
                          />
                        </span>
                      )})
                    ) : (
                      <p className="text-sm font-extralight">
                        User has no courses
                      </p>
                    )}
                    <div className="w-[100%] pt-4 dark:text-white">
                      <label className="block pb-2">Add course to user</label>
                      <input
                        type="text"
                        className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                        placeholder={"Enter course id"}
                        onChange={(e) =>
                          setFormData({ ...formData, courseId: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <input
                    className={`w-full 800px:w-[250px] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 ${
                      updating ? "cursor-disabled" : "cursor-pointer"
                    }`}
                    required
                    disabled={updating}
                    value={updating ? "Updating..." : "Update"}
                    type="submit"
                  />
                </div>
              </form>
              <br />
            </div>
          </div>

          {isCourseLoading ? (
            <Loader />
          ) : (
            <div className="">
              {" "}
              <h1 className="text-[20px] text-black dark:text-white font-[500]">
                All Courses
              </h1>
              <br />
              <div className="h-[240px] overflow-y-auto w-full grid grid-cols-2 sm:grid-col-1 gap-2 justify-center dark:text-white">
                {coursesData ? (
                  coursesData.map((course: any) => (
                    <section
                      className="px-4 py-2 rounded-md bg-black text-white dark:text-black dark:bg-white"
                      key={course?._id}
                    >
                      <section>
                        <p>Name : {course?.name}</p>
                        <p>ID : {course?._id}</p>
                      </section>
                    </section>
                  ))
                ) : (
                  <div>No courses loaded</div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpecificUser;
