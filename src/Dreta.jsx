import React from "react";
// import { aRelatedVideos } from "./aRelatedVideos";

import "./Dreta.css";

const fs = require("fs");
const ytdl = require("ytdl-core");

/* ============ DRETA ============ */
// >> DRETA: Menu lateral Videos trobats
// ==================================

/* ============ DRETA ============ */
// >> DRETA: Menu lateral Videos trobats
export const Dreta = ({ oLlistaVideos, fSetterVideo }) => {
  return (
    <div className="videoList">
      <ListYtsrVideos
        oVideosPerLlistar={oLlistaVideos} //Passem llista videos trobats
        fClickedVideoID={fSetterVideo} //Recollim el video clickat/escollit
      />
    </div>
  );
};

// Llistem els videos trobats i recollim el clickat/escollit
const ListYtsrVideos = ({ oVideosPerLlistar, fClickedVideoID }) => {
  // Comprovem q existeix el Thumb. Si no, saltem al següent
  const checkBestThumb = (item) => {
    if ("bestThumbnail" in item) {
      return true;
    } else {
      return false;
    }
  };

  // =========== Related videos ============
  async function fGetYtDown(cSelectedVideo) {
    const oYtdlInfo = await YtDown(cSelectedVideo);
    return oYtdlInfo;
  }
  const YtDown = async (cSelectedVideo) => {
    const oYtdlInfo = await ytdl.getInfo(cSelectedVideo);
    return oYtdlInfo.related_videos;
  };
  // ^^^^^^^^^^^ Related videos ^^^^^^^^^^^

  return (
    <ol>
      {oVideosPerLlistar.map((item, index) => {
        return (
          <li key={index} className="videoListLine">
            {checkBestThumb(item) && (
              <div
                className="videoListItem"
                onClick={async () => {
                  fClickedVideoID({
                    dni: item.id,
                    titol: item.author.name,
                    relVideos: await fGetYtDown(item.id),
                  });
                }}
              >
                <div className="videoListThumb">
                  <img src={item.bestThumbnail.url} alt="" />
                </div>
                <div className="videoListDesc">
                  <p>{item.title}</p>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
};
