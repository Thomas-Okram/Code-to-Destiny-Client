"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ/FAQ";

type Props = {};

const meta = {
  title:"FAQ - Code to Destiny",
  description:"Code to Destiny is a learning management system for helping programmers.",
  keywords:"programming,mern",
  image :`${process.env.WEB_URL}/meta-image.webp`
}

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
           <title>{meta?.title}</title>
      <Heading
   meta={meta}
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
