import React, { useEffect } from "react";

import { aRelatedVideos } from "./aRelatedVideos.jsx";

import "./RelatedVideos.css";

const fs = require("fs");
const ytdl = require("ytdl-core");

const YtDown = async ({ cSelectedVideo, fSetRelatedVideos }) => {
  const oYtdlInfo = await ytdl.getInfo(cSelectedVideo);
  console.log(oYtdlInfo);
  fSetRelatedVideos(oYtdlInfo.related_videos);
  return oYtdlInfo;
};

export const RelatedVideos = ({ cSelectedVideo, fSetRelatedVideos }) => {
  async function fetchData(cSelectedVideo) {
    const oYtdlInfo = await YtDown({ cSelectedVideo, fSetRelatedVideos });
    console.log(oYtdlInfo.related_videos);
    console.log(aRelatedVideos);
  }

  useEffect(() => {
    fetchData(cSelectedVideo);
  }, [cSelectedVideo]);

  return (
    <div className="relatedVideosRow">
      {aRelatedVideos.map((item, index) => {
        return (
          <div className="relatedVideosItem">
            <li key={index}>
              <div className="relatedVideosThumb">
                <img key={index} src={item.thumbnails[0].url} alt="" />
              </div>
              <p className="relatedVideosDesc">{item.title}</p>
            </li>
          </div>
        );
      })}
    </div>
  );
};
