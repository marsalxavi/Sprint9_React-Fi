import React, { useState } from "react";

import { Cap } from "./Cap.jsx";
import { Cos } from "./Cos.jsx";
import { Peu } from "./Peu.jsx";

import "./Main.css";
import ytsr from "ytsr";

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
  // Video inicial Home Page (Cibernarium)
  const urlInitVideo = "https://www.youtube.com/embed/7kwdJhQemTo";

  // ============ Definim STATES globals de la App ============
  // State Terme a cercar a YT amb ytsr
  const cQuery0 = "Cibernarium";
  const [cQuery, fSetQuery] = useState([cQuery0]);

  // State Videos Trobats: Objecte/Seter llista trobats amb ytsr
  const [oListYtsrVideos, fSetListYtsrVideos] = useState([]);

  // State Video Clickat: Objecte/Seter del clickat a la llista trobats amb ytsr
  const [oSelecVideoYtsrList, fSetSelecVideoYtsrList] = useState({
    url: urlInitVideo,
    titol:
      "Cibernàrium: formació tecnològica per a tothom des de fa 20 anys - Fes-te Ciber!",
    autor: "Barcelona Activa",
  });

  // State Related Videos: Array/Seter llista relcionats amb ytdl
  const [aRelatedVideos, fSetRelatedVideos] = useState([]);
  // ============ STATES FI =============

  // ============ SETTERS =============
  // Setter del video escollit a la llista de videos trobats amb ytsr
  const fSetterSelecVideoYtsrList = (oVideoInfo) => {
    const urlYtEmbedBase = new URL("https://www.youtube.com/embed/");
    const urlYtEmbedVideo = new URL(`${urlYtEmbedBase}${oVideoInfo.dni}`);
    fSetSelecVideoYtsrList({
      dni: oVideoInfo.dni,
      titol: oVideoInfo.titol,
      url: urlYtEmbedVideo,
      relVideos: oVideoInfo.relVideos,
    });
  };

  return (
    <div className="Main">
      {cQuery0} ||
      {cQuery} ||
      {JSON.stringify(oListYtsrVideos).substring(100, 115)}; ||
      {JSON.stringify(oSelecVideoYtsrList).substring(100, 115)}; ||
      {oSelecVideoYtsrList.dni} ||
      {/* {oSelecVideoYtsrList.relVideos} || */}
      {/* {JSON.stringify(oSelecVideoYtsrList.relVideos)}; || */}
      {console.log('relateds in main', oSelecVideoYtsrList.relVideos)} ||

      {/* >> CAP: Barra superior cerca i mes */}
      <div className="mainCap">
        <Cap
          cQuery={cQuery} // Passem terme cerca i ..
          fSetQuery={fSetQuery} //funció q asigna l' estat i ..
          fSetListYtsrVideos={fSetListYtsrVideos} //funcio q retorna video escollit
        />
      </div>
      {/* >> COS: Franja central amb: */}
      <div className="mainCos">
        <Cos
          oSelectedVideo={oSelecVideoYtsrList} //Passem video escollit
          oLlistaVideos={oListYtsrVideos} //Passem llistat videos trobats
          fSetterVideo={fSetterSelecVideoYtsrList} //Recollim video escollit
          // fSetRelatedVideos={fSetterRelatedVideos}
        />
      </div>
      {/* >> PEU: Menu lateral Videos trobats */}
      <div className="mainPeu">
        <Peu />
      </div>
    </div>
  );
};
