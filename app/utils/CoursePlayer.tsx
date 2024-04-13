"use client"
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useGetVideoOtpMutation } from "@/redux/features/courses/coursesApi";
import { toast } from "react-hot-toast";
import Loader from "../components/Loader/Loader";
import { IoReloadCircleOutline } from "react-icons/io5";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });
const [getUrl,{data,error,isSuccess,isLoading}]=useGetVideoOtpMutation();

    // axios
    //   .post(
    //     `${process.env.NEXT_PUBLIC_SERVER_URI}getVdoCipherOTP`,
    //     {
    //       videoId: videoUrl,
    //     }
    //   )
    //   .then((res) => {
    //     setVideoData(res.data);
    //   }).catch((err)=>{
    //     console.log(err)
    //   });
   
// Effect for handling successful fetch
useEffect(() => {
  if (isSuccess && data) {
    //setVideoData(data);
  }
}, [isSuccess, data]);

// Effect for handling errors
useEffect(() => {
  if (error && "data" in error) {
    const errorData = error as any;
    toast.error(errorData?.data?.message);
    console.log(errorData);
  }
}, [error]);

// Trigger the fetch on videoUrl change
useEffect(() => {
  async function fetchUrl() {
    await getUrl(videoUrl);
  }

  fetchUrl();
}, [getUrl, videoUrl]);

  console.log("videoUrl",videoUrl)

  if(isLoading){
    return(
      <div
      style={{ position: "relative", overflow: "hidden" }}
    >
        <span
          >
          <Loader/>
        </span>
    </div>
    )
  }

  return (
    <div
      style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}
    >
      {videoData.otp && videoData.playbackInfo !== "" ? (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=6YtKuAnCaaOWOop3`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      ):(   <div
        style={{ position: "relative",  overflow: "hidden" }}
      >
      
            <IoReloadCircleOutline className="w-[3rem] h-[3rem] text-white"/>
      
      </div>)}
    </div>
  );
};

export default CoursePlayer;
