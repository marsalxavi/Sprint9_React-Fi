import React from "react";
import * as Lib from "./Lib.jsx";
import { VideoDetail } from "./VideoDetail.jsx";

export const Cos = ({oSelectedVideo,oLlistaVideos,fSetterVideo}) => {
  return (
    <>
      {/* ============ SECCIO VIDEOS ============ */}
      <div className="videoFrame">
        {/* ============ DETALL VIDEO ============ */}
        <div className="videoDetail">
          <VideoDetail
            urlVideo={oSelectedVideo.url}
            cTitolVideo={oSelectedVideo.titol}
            cAutorVideo={oSelectedVideo.autor}
          />
        </div>
        {/* ============ LLISTA VIDEOS: LATERAL ============ */}
        <div className="videoList">
          <Lib.ListYtsrVideos
            oVideosPerLlistar={oLlistaVideos}
            fClickedVideoID={fSetterVideo}
          />
        </div>
      </div>
    </>
  );
};