import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import NotificationIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";

import { Cos } from "./Cos.jsx";
import * as Lib from "./Lib.jsx";

import "./Cap.css";

const cYouTubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png";

export const Cap = () => {
  const urlInitVideo = "https://www.youtube.com/embed/7kwdJhQemTo";
  const [oYtsrSelecVideo, fSetYtsrSelecVideo] = useState({
    url: urlInitVideo,
    titol: "Cibernàrium: formació tecnològica per a tothom des de fa 20 anys - Fes-te Ciber!",
    autor: "Barcelona Activa",
  });

  const cQuery0 = "Cibernarium";
  const [cQuery, fSetQuery] = useState([cQuery0]);
  const [oYtsrVideos, fSetYtsrVideos] = useState([]);

  async function fetchData() {
    await Lib.YtSearch(cQuery, { fSetYtsrVideos });
  }

  // useEffect(async () => {
  useEffect(() => {
    // const Llista = Lib.YtSearch(cQuery, { fSetYtsrVideos });
    fetchData();
  }, [cQuery]);

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
    <div className="page">
      {/* ============ CAPÇALERA/HEADER ============ */}
      <div className="cap">
        <div className="capEsquerra">
          <MenuIcon />
          <Link to={{ pathname: "https://www.youtube.com" }} target="_blank">
            <img className="capLogo" src={cYouTubeLogo} alt=""/>
          </Link>
          <h2>· x1tub</h2>
        </div>
        <div className="capInput">
          {/* <Lib.OnChange cQuery={cQuery} fSetQuery={fSetQuery} /> */}
          <Lib.OnSubmit2 fSetQuery={fSetQuery} />
        </div>
        <div className="capDreta">
          <NotificationIcon />
          <Avatar />
          <Link to="/about">
            <InfoIcon />
          </Link>
        </div>
      </div>

      {/* ============ SECCIO VIDEOS ============ */}
      <Cos
        oSelectedVideo={oYtsrSelecVideo}
        oLlistaVideos={oYtsrVideos}
        fSetterVideo={fSetterYtsrSelecVideo}
      />
    </div>
  );
};