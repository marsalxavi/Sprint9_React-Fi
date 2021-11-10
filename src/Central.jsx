import React from "react";

import { VideoDetail } from "./VideoDetail.jsx";
import { RelatedVideos } from "./RelatedVideos.jsx";

import "./Central.css";

// ======== FRAME CENTRAL ========
// >> Detall del Video seleccionat
// >> Llista Videos relacionats amb el seleccionat
// =====================================

const VideosRelacionats = ({ oSelectedVideo }) => {
  console.log(oSelectedVideo.relVideos);
};

// ======== FRAME CENTRAL ========
// Passem el video escollit
export const Central = ({ oSelectedVideo }) => {
  return (
    <div className="Central">
      {/* >> Detall del Video seleccionat */}
      <div className="centralVideoDetail">
        <VideoDetail
          oSelectedVideo={oSelectedVideo} /* Passem el video escollit */
        />
      </div>

      {/* >> Llista Videos relacionats amb el seleccionat */}
      <div className="centralRelatedVideos">

        {/* <VideosRelacionats oSelectedVideo={oSelectedVideo} /> */}

        {/* <RelatedVideos
          cSelectedVideo="NT299zIk2JY"
          fSetRelatedVideos={fSetRelatedVideos}
        /> */}
        {}
      </div>
    </div>
  );
};
