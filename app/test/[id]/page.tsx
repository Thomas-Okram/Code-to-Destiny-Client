"use client";
import { useGetCourseVideosQuery } from "@/redux/features/courses/coursesApi";
import React,{useEffect,useState} from "react";

const page = ({ params }: any) => {
const { id } = params;
  const { data, isSuccess, error } = useGetCourseVideosQuery<any>(id, {});
  console.log(data, error);

  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
        const updatedVideos = data.videos.map((video: any) => ({
            ...video,
            videoPath: `${process.env.API_PUBLIC_PATH}${video.filename}`,
          }));
          setVideos(updatedVideos);
      console.log(videos,"videos");
    }
    
  }, [data]);

  console.log(error);

  return (
    <div>
      {videos &&
        videos.map((video) => (
          <>
            <video src={video?.videoUrl}></video>
            <h4 className="text-xl text-white">{video.title}</h4>
          </>
        ))}
    </div>
  );
};

export default page;
