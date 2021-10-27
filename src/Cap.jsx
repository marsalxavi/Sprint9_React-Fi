import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";

import * as Lib from "./Lib.jsx";
import { VideoDetail } from "./VideoDetail.jsx";

import "./Cap.css";
import { height } from "@mui/system";

const YouTubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png";

export const Cap = () => {
  const urlInitVideo = "https://www.youtube.com/embed/7kwdJhQemTo";
  const [selectedVideo, setSelectedVideo] = useState({
    url: urlInitVideo,
    titol: "Titol Inici",
    autor: "Descripcio Inici",
  });

  const query0 = "Cibernarium";
  const [query, setQuery] = useState([query0]);
  const [LlistaVideos, setLlistaVideos] = useState([]);

  useEffect(async () => {
    const Llista = Lib.YtSearch(query, { setLlistaVideos });
  }, [query]);

  const setterVideo = (videoInfo) => {
    console.log(videoInfo.dni);
    const urlYtEmbedBase = new URL("https://www.youtube.com/embed/");
    const urlYtEmbedVideo = new URL(`${urlYtEmbedBase}${videoInfo.dni}`);
    setSelectedVideo({
      url: urlYtEmbedVideo,
      titol: videoInfo.titol,
      autor: videoInfo.autor,
    });
  };
  console.log("cap: ", selectedVideo);

  return (
    <div className="page">
      {/* ============ CAPÇALERA/HEADER ============ */}
      <div className="cap">
        <div className="capEsquerra">
          <MenuIcon />
          <Link to={{ pathname: "https://www.youtube.com" }} target="_blank">
            <img className="capLogo" src={YouTubeLogo} />
          </Link>
          <h2>· x1tub</h2>
        </div>
        <div className="capInput">
          {/* <input type="text" /> */}
          <Lib.OnChange query={query} setQuery={setQuery} />
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
      <div className="videoFrame">
        {/* ============ DETALL VIDEO ============ */}
        <div className="videoDetail">
          <VideoDetail
            urlVideo={selectedVideo.url}
            titolVideo={selectedVideo.titol}
            autorVideo={selectedVideo.autor}
          />
        </div>
        {/* ============ LLISTA VIDEOS: LATERAL ============ */}
        <div className="videoList">
          <Lib.LinkList
            VideosPerLlistar={LlistaVideos}
            clickedVideoID={setterVideo}
          />
        </div>
      </div>
    </div>
  );
};
