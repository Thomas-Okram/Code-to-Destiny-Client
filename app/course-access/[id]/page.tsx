'use client'
import CourseContent from "@/app/components/Course/CourseContent";
import Loader from "@/app/components/Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
    params:any;
}


const Page = ({params}: Props) => {
    const id = params.id;
  const { isLoading, error, data,refetch } = useLoadUserQuery(undefined, {});

  useEffect(() => {
    refetch();
   if (data) {
      const isPurchased = data?.user?.courses.find(
        (item: any) => item.courseId === id
      );
      console.log("data for user to access course",data?.user?.courses)
     if (!isPurchased) {
        redirect("/");
      }
   }
    if (error) {
      redirect("/");
    }
  }, [data,error]);

  return (
   <>

   {
    isLoading ? (
        <Loader />
    ) : (
        <div>
          <CourseContent id={id} user={data?.user} />
        </div>
    )
   }
   </>
  )
}

export default Page