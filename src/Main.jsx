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
  // ============ Definim STATES globals de la App ============
  // State Terme a cercar a YT amb ytsr
  const cQuery0 = "Cibernarium";
  const [cQuery, fSetQuery] = useState([cQuery0]);

  // State Videos Trobats: Objecte/Seter llista trobats amb ytsr
  const [oListYtsrVideos, fSetListYtsrVideos] = useState([]);

  // Video inicial Home Page (Cibernarium)
  const urlInitVideo = "https://www.youtube.com/embed/7kwdJhQemTo";
  const aIniRelvideos = [
    {
      id: "f7T48W0cwXM",
      title:
        "🔴 How to Build a Instagram Clone with REACT JS for Beginners (in 3 Hours!)",
      published: "Streamed 1 year ago",
      author: {
        id: "UCqrILQNl5Ed9Dz6CGMyvMTQ",
        name: "Clever Programmer",
        user: "CleverProgrammer",
        channel_url: "https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ",
        user_url: "https://www.youtube.com/user/CleverProgrammer",
        thumbnails: [
          {
            url: "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        verified: true,
      },
      short_view_count_text: "377K",
      view_count: "377865",
      length_seconds: 13346,
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/f7T48W0cwXM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0puuLvu2y5IxVdwYUaZ1Kv8vSPA",
          width: 168,
          height: 94,
        },
        {
          url: "https://i.ytimg.com/vi/f7T48W0cwXM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqIlWBlKHkTP0J_StunrbwvcfIKg",
          width: 336,
          height: 188,
        },
      ],
      richThumbnails: [
        {
          url: "https://i.ytimg.com/an_webp/f7T48W0cwXM/mqdefault_6s.webp?du=3000&sqp=CMrKkIwG&rs=AOn4CLDRSljlMcaP7WJF85BiIVBbWuy8QA",
          width: 320,
          height: 180,
        },
      ],
      isLive: false,
    },
  ];
  const [oSelecVideoYtsrList, fSetSelecVideoYtsrList] = useState({
    url: urlInitVideo,
    titol:
      "Cibernàrium: formació tecnològica per a tothom des de fa 20 anys - Fes-te Ciber!",
    autor: "Barcelona Activa",
    relVideos: aIniRelvideos,
  });

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
        />
      </div>
      {/* >> PEU: Menu lateral Videos trobats */}
      <div className="mainPeu">
        <Peu />
      </div>
    </div>
  );
};
