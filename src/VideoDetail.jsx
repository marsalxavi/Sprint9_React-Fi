import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";

export const VideoDetail = ({ urlVideo }) => {
  //   const { urlVideo } = useParams();

  return (
    <div>
      <iframe
        width="947"
        height="539"
        src={urlVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
