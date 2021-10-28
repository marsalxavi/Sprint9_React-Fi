import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";

import "./VideoFull.css";

export const VideoFull = ({ urlVideo, cTitolVideo, cAutorVideo }) => {
  const dni = useParams();
  console.log(dni);
  const url = "https://www.youtube.com/embed/NT299zIk2JY";
  
  const urlYtEmbedBase = new URL("https://www.youtube.com/embed/");

  return (
    <div className="iframeVideo">
      <iframe
        // width="947"
        // height="539"
        src={`${urlYtEmbedBase}${dni.id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      {/* <h2>Titol: {cTitolVideo}</h2> */}
      <h2>{dni.title}</h2>
      <p>Autor: {cAutorVideo}</p>
    </div>
  );
};