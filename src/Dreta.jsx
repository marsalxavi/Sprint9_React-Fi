import React from "react";
import { aRelatedVideos } from "./aRelatedVideos";

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
  // Comprovem q existeix el Thumb. Sino, saltem al següent
  const checkBestThumb = (item) => {
    if ("bestThumbnail" in item) {
      return true;
    } else {
      return false;
    }
  };

  // =========== Related videos ============

  async function fGetYtDown(cSelectedVideo) {
    console.log(cSelectedVideo);
    const oYtdlInfo = await YtDown(cSelectedVideo);
    console.log(oYtdlInfo);
    return oYtdlInfo;
  }

  const YtDown = async (cSelectedVideo) => {
    console.log(cSelectedVideo);
    const oYtdlInfo = await ytdl.getInfo(cSelectedVideo);
    // fSetRelatedVideos(oYtdlInfo.related_videos);
    console.log(oYtdlInfo);
    console.log(oYtdlInfo.related_videos);
    return oYtdlInfo.related_videos;
  };

  // ^^^^^^^^^^^ Related videos ^^^^^^^^^^^
  const suma = () => 3 + 3;
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
                    // relVideos: aRelatedVideos,
                    // relVideos: suma(),
                    relVideos: await fGetYtDown(item.id),
                  });
                  console.log(item.id);
                  // fGetYtDown(item.id);
                  console.log(aRelatedVideos);
                }}
              >
                <div className="videoListThumb">
                  <img src={item.bestThumbnail.url} alt="" />
                </div>
                <div key={index} className="videoListDesc">
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
