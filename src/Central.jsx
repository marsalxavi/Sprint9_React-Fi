import React from "react";

import { VideoDetail } from "./VideoDetail.jsx";
import { RelatedVideos } from "./RelatedVideos.jsx";

import "./Central.css";

// ======== FRAME CENTRAL ========
// >> Detall del Video seleccionat
// >> Llista Videos relacionats amb el seleccionat
// =====================================

// ======== FRAME CENTRAL ========
export const Central = ({ oSelectedVideo }) => {
  return (
    <div className="Central">
      {/* >> Detall del Video seleccionat */}
      <div className="centralVideoDetail">
        {/* <h2>Video Detail</h2> */}
        <VideoDetail
          urlVideo={oSelectedVideo.url}
          cTitolVideo={oSelectedVideo.titol}
          cAutorVideo={oSelectedVideo.autor}
        />
      </div>

      {/* >> Llista Videos relacionats amb el seleccionat */}
      <div className="centralRelatedVideos">
        <h3>Videos Relacionats</h3>
        <RelatedVideos />
      </div>
    </div>
  );
};
