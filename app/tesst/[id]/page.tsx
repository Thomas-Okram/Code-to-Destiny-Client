"use client"
import VideoJs from "@/app/components/VideoJs";
import React from "react";
import videojs from "video.js";

const VideoPlayer = ({file,title}:any) =>{
  const vid = URL.createObjectURL(file)
const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    alwaysShowControls:true,
    responsive: true,
    fluid: true,
    sources: [{
      src: vid,
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
      <div className="overflow-hidden text-center text-black dark:text-white text-xl font-normal" >{title}</div>
      <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
      {/* <div>Rest of app here</div> */}
    </>
  );
   }

   export default VideoPlayer