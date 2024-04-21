"use client"
import VideoJs from "@/app/components/VideoJs";
import React from "react";
import videojs from "video.js";

const page = () =>{
const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    alwaysShowControls:true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://localhost:8000/public/videos/course_video_61e72c7f-f5b8-487f-b16f-6546329ceca5.mp4',
      type: 'video/mp4'
    }],
    controlBar: {
      volumePanel: { inline: false },
      children:[
        'playToggle', 
            'volumePanel',
        'progressControl',
        'currentTimeDisplay',
        'timeDivider',
        'durationDisplay',
        'pictureInPictureToggle',
        'fullscreenToggle',
        'qualitySelector',
      ],
      durationDisplay:{
        timeToShow:['duration'],
        countDown:false
      }
    }
  };

  const handlePlayerReady = (player:any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      <div className="overflow-hidden" >Rest of app here</div>
      <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </>
  );
   }

   export default page