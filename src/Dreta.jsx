import React from "react";

import './Dreta.css'

/* ============ DRETA ============ */
// >> DRETA: Menu lateral Videos trobats
// ==================================


/* ============ DRETA ============ */
// >> DRETA: Menu lateral Videos trobats
export const Dreta = ({ oLlistaVideos, fSetterVideo }) => {
  return (
    <div className="videoList">
      <ListYtsrVideos
        oVideosPerLlistar={oLlistaVideos}
        fClickedVideoID={fSetterVideo}
      />
    </div>
  );
};


const ListYtsrVideos = ({ oVideosPerLlistar, fClickedVideoID }) => {
    const checkBestThumb = (item) => {
      if ("bestThumbnail" in item) {
        return true;
      } else {
        return false;
      }
    };
  
    return (
      <ol>
        {oVideosPerLlistar.map((item, index) => {
          return (
            <li key={index} className="videoListLine">
              {checkBestThumb(item) && (
                <div
                  className="videoListItem"
                  onClick={() => {
                    fClickedVideoID({
                      dni: item.id,
                      titol: item.title,
                    });
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