import React from "react";

import "./VideoDetail.css";

import { aRelatedVideos } from "./aRelatedVideos";

// export const VideoDetail = ({ urlVideo, cTitolVideo, cAutorVideo }) => {
export const VideoDetail = ({ oSelectedVideo }) => {
  console.log(oSelectedVideo);
  const Related = oSelectedVideo.relVideos;
  console.log(Related);

  console.log("DaRel: ", aRelatedVideos);
  console.log("DaRid: ", aRelatedVideos[0].id);
  const Matriu = { ...aRelatedVideos };
  console.log("Dmatriu: ", Matriu);
  console.log("Dmatid: ", Matriu[0].id);

  // const newArray = Related.map((item, index) => {
  // console.log(Related[0].title);
  // });

  // console.log(newArray);

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
      <h2>{oSelectedVideo.titol}</h2>
      <p>{JSON.stringify(oSelectedVideo.relVideos)}</p>
    </div>
  );
};
