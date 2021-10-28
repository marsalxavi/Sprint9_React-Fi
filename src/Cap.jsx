import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";

import { Cos } from "./Cos.jsx";
import * as Lib from "./Lib.jsx";
import { VideoDetail } from "./VideoDetail.jsx";

import "./Cap.css";
import { height } from "@mui/system";

const cYouTubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png";

export const Cap = () => {
  const urlInitVideo = "https://www.youtube.com/embed/7kwdJhQemTo";
  const [oSelectedVideo, fSetSelectedVideo] = useState({
    url: urlInitVideo,
    titol: "Titol Inici",
    autor: "Descripcio Inici",
  });

  const cQuery0 = "Cibernarium";
  const [cQuery, fSetQuery] = useState([cQuery0]);
  const [oLlistaVideos, fSetLlistaVideos] = useState([]);

  useEffect(async () => {
    const Llista = Lib.YtSearch(cQuery, { fSetLlistaVideos });
  }, [cQuery]);

  const fSetterVideo = (oVideoInfo) => {
    console.log(oVideoInfo.dni);
    const urlYtEmbedBase = new URL("https://www.youtube.com/embed/");
    const urlYtEmbedVideo = new URL(`${urlYtEmbedBase}${oVideoInfo.dni}`);
    fSetSelectedVideo({
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
            <img className="capLogo" src={cYouTubeLogo} />
          </Link>
          <h2>· x1tub</h2>
        </div>
        <div className="capInput">
          {/* <input type="text" /> */}
          <Lib.OnChange cQuery={cQuery} fSetQuery={fSetQuery} />
          <SearchIcon
            style={{ width: "1.5em", height: "1.5em" }}
            className="lupa"
          />
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
        oSelectedVideo={oSelectedVideo}
        oLlistaVideos={oLlistaVideos}
        fSetterVideo={fSetterVideo}
      />
    </div>
  );
};
