"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../utils/Heading";
import DashboardHeader from "../../components/Admin/DashboardHeader";
import UserAnalytics from "../../../app/components/Admin/Analytics/UserAnalytics";

type Props = {};
const meta = {
  title:"Code to Destiny - Admin",
  description:"Code to Destiny is a platform for students to learn and get help from teachers",
  keywords:"Programming,MERN,Redux,Machine Learning",
  image :`${process.env.WEB_URL}/meta-image.webp`
}

const page = (props: Props) => {
  return (
    <div>
           <title>{meta?.title}</title>
      <Heading
meta={meta}
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <UserAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;