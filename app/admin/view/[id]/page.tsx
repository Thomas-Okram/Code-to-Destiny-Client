"use client"
import SpecificUser from "@/app/components/Admin/Users/SpecificUser";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar"
import React from "react";

type Props = {
  params: {
    id: string;
  };
};
const meta = {
  title: "Code to Destiny - Admin",
  description:
    "Code to Destiny is a platform for students to learn and get help from teachers",
  keywords: "Programming,MERN,Redux,Machine Learning",
  image: `${process.env.WEB_URL}/meta-image.webp`,
};
const page = ({ params }: Props) => {
  const id = params?.id;

  return (
    <div className="max-h-100vh overflow-y-auto mx-auto">
      <title>{meta?.title}</title>
      <Heading meta={meta} />
    
      <AdminProtected>
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
          <DashboardHero />
          <SpecificUser id={id} />
          </div>
        </div>
      </AdminProtected>
    
    </div>
  );
};

export default page;
