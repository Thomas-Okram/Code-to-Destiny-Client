"use client";
import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import CourseContentMedia from "./CourseContentMedia";
import Header from "../Header";
import CourseContentList from "./CourseContentList";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useLogOutQuery } from "@/redux/features/auth/authApi";

type Props = {
  id: string;
  user: any;
};

const CourseContent = ({ id, user }: Props) => {
  const {
    data: contentData,
    isLoading,
    error,
    refetch,
  } = useGetCourseContentQuery(id, { refetchOnMountOrArgChange: true });
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const [logout, setLogout] = useState(false);
  const data = contentData?.content;
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const [activeVideo, setActiveVideo] = useState(0);
  let meta = {
    title: "",
    description: "",
    keywords: "",
    image: `${process.env.WEB_URL}/meta-image.webp`,
  };
  if (data) {
    meta = {
      title: data[activeVideo]?.title,
      description: "Learn in depth about this course",
      keywords: data[activeVideo]?.tags,
      image: `${process.env.WEB_URL}/meta-image.webp`,
    };
  }

  const logOutHandler = async () => {
    await signOut({ redirect: false });
    setLogout(true);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };
  if (error) {
    if ("data" in error) {
      const errorMessage = error as any;
      toast.error(errorMessage.data.message);
      console.log(errorMessage);
      logOutHandler();
    }
  }

  // if (!isLoading && !data) {
  //   toast.error("Failed to load course. Please contact support");
  //   redirect("/");
  // }

  // console.log("courseData", data);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <title>{meta?.title}</title>
          <Header
            activeItem={1}
            open={open}
            setOpen={setOpen}
            route={route}
            setRoute={setRoute}
          />
          <div className="w-full grid 800px:grid-cols-10">
            <Heading meta={meta} />
            <div className="col-span-7">
              <CourseContentMedia
                data={data}
                id={id}
                activeVideo={activeVideo}
                setActiveVideo={setActiveVideo}
                user={user}
                refetch={refetch}
              />
            </div>
            <div className="hidden 800px:block 800px:col-span-3">
              <CourseContentList
                setActiveVideo={setActiveVideo}
                data={data}
                activeVideo={activeVideo}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseContent;
