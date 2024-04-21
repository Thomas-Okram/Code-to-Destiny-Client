'use client'
import Heading from "@/app/utils/Heading";
import React from "react";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

const meta = {
    title:"Code to Destiny",
    description:"Code to Destiny is a platform for students to learn and get help from teachers",
    keywords: "Prograaming,MERN,Redux,Machine Learning",
    image :`${process.env.WEB_URL}/meta-image.webp`
  } 

const Page = ({params}:any) => {
    return (
        <>
        
        <div>
            <CourseDetailsPage id={params.id} />
        </div>
        </>
    )
}

export default Page;
 