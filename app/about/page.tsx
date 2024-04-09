"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/Footer";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");
  const meta = {
    title:"About us - Code to Destiny",
    description:"Code to Destiny is a learning management system for helping programmers.",
    keywords:"programming,mern",
    image :`${process.env.WEB_URL}/meta-image.webp`}
  
  return (
    <div>
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
      <About />
      <Footer />
    </div>
  );
};

export default Page;
