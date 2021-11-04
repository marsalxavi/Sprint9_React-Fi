import React, { useState } from "react";

import { Cap } from "./Cap.jsx";
import { Cos } from "./Cos.jsx";
import { Peu } from "./Peu.jsx";

import "./Main.css";

/* ============ MAIN ============ */
// >> CAP: Barra superior cerca i mes
// >> COS: Franja central amb:
//    >> ESQUERRA: Menu lateral
//    >> CENTRAL: Frame
//        >> Detall del Video seleccionat
//        >> Llista Videos relacionats amb el seleccionat
//    >> DRETA: Menu lateral Videos trobats
// >> PEU: Menu lateral Videos trobats
// =====================================

/* ============ MAIN ============ */
export const Main = () => {
  const urlInitVideo = "https://www.youtube.com/embed/7kwdJhQemTo";
  const [oYtsrSelecVideo, fSetYtsrSelecVideo] = useState({
    url: urlInitVideo,
    titol:
      "Cibernàrium: formació tecnològica per a tothom des de fa 20 anys - Fes-te Ciber!",
    autor: "Barcelona Activa",
  });

  const cQuery0 = "Cibernarium";
  const [cQuery, fSetQuery] = useState([cQuery0]);

  const [oYtsrVideos, fSetYtsrVideos] = useState([]);

  const fSetterYtsrSelecVideo = (oVideoInfo) => {
    const urlYtEmbedBase = new URL("https://www.youtube.com/embed/");
    const urlYtEmbedVideo = new URL(`${urlYtEmbedBase}${oVideoInfo.dni}`);
    fSetYtsrSelecVideo({
      url: urlYtEmbedVideo,
      titol: oVideoInfo.titol,
      autor: oVideoInfo.autor,
    });
  };

  return (
    <div className="Main">

      {/* >> CAP: Barra superior cerca i mes */}
      <div className="mainCap">
        <Cap
          cQuery={cQuery}
          fSetYtsrVideos={fSetYtsrVideos}
          fSetQuery={fSetQuery}
        />
      </div>

      {/* >> COS: Franja central amb: */}
      <div className="mainCos">
        <Cos
          oSelectedVideo={oYtsrSelecVideo}
          oLlistaVideos={oYtsrVideos}
          fSetterVideo={fSetterYtsrSelecVideo}
        />
      </div>

      {/* >> PEU: Menu lateral Videos trobats */}
      <div className="mainPeu">
        <Peu />
      </div>

    </div>
  );
};
