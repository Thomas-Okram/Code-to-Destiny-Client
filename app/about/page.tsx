"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/Footer";
import Head from "next/head";

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
          <title>{meta?.title}</title>
    <Head>
      <title>{meta?.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={meta?.keywords} />
      <meta name="description" content={meta?.description} />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="code-to-destiny" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta httpEquiv="content-language" content="en_US" />
      <meta property="og:title" content={meta?.title} />
      <meta property="og:description" content={meta?.description} />
      <meta property="og:url" content={process.env.WEB_URL} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:siteName" content={meta?.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={meta?.image} />
      <meta name="twitter:title" content={meta?.title} />
      <meta name="twitter:description" content={meta?.description} />
      <meta name="twitter:image" content={meta?.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={process.env.WEB_URL} />
      <link
        rel="alternate"
        href={`${process.env.WEB_URL}/en-US`}
        hrefLang="en-US"
      />
      <link
        rel="alternate"
        href={`${process.env.WEB_URL}/de-DE`}
        hrefLang="de-DE"
      />
    </Head>
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
