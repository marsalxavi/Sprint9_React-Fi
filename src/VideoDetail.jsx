import React from "react";

import "./VideoDetail.css";

export const VideoDetail = ({ urlVideo, cTitolVideo, cAutorVideo }) => {
  return (
    <div className="iframeVideo">
      <iframe
        // width="947"
        // height="539"
        src={urlVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2>Titol: {cTitolVideo}</h2>
      <p>Autor: {cAutorVideo}</p>
    </div>
  );
};