import React from "react";

import "./VideoDetail.css";

export const VideoDetail = ({ oSelectedVideo }) => {
  return (
    <div className="iframeVideo">
      <iframe
        // width="947"
        // height="539"
        src={oSelectedVideo.url}
        title={oSelectedVideo.titol}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>
        {oSelectedVideo.titol} || {oSelectedVideo.autor}
      </h2>
    </div>
  );
};