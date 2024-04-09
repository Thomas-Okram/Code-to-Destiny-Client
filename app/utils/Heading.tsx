import React, { FC } from "react";
import Head from "next/head";

interface HeadProps {
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
    image: string;
  };
}

const WEBSITE_HOST_URL = "https://www.codetodestiny.com";

const Heading: FC<HeadProps> = ({ meta }) => {
  return (
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
      <meta property="og:url" content={WEBSITE_HOST_URL} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:siteName" content={meta?.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={meta?.image} />
      <meta name="twitter:title" content={meta?.title} />
      <meta name="twitter:description" content={meta?.description} />
      <meta name="twitter:image" content={meta?.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={WEBSITE_HOST_URL} />
      <link
        rel="alternate"
        href={`${WEBSITE_HOST_URL}/en-US`}
        hrefLang="en-US"
      />
      <link
        rel="alternate"
        href={`${WEBSITE_HOST_URL}/de-DE`}
        hrefLang="de-DE"
      />
    </Head>
  );
};

export default Heading;
