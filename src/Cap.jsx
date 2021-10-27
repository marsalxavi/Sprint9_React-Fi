import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/Notifications";

import * as Lib from "./Lib.jsx";
import { VideoDetail } from "./VideoDetail.jsx";

import "./Cap.css";

const YouTubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png";

export const Cap = () => {
  const iniVideo = "https://www.youtube.com/embed/7kwdJhQemTo";
  const [selectedVideo, setSelectedVideo] = useState(iniVideo);

  const query0 = "Cibernarium";
  const [query, setQuery] = useState([query0]);
  const [LlistaVideos, setLlistaVideos] = useState([]);

  useEffect(async () => {
    const Llista = Lib.YtSearch(query, { setLlistaVideos });
  }, [query]);

  const setterVideo = (videoID) => {
    const urlYtEmbedBase = new URL("https://www.youtube.com/embed/");
    const urlYtEmbedVideo = new URL(`${urlYtEmbedBase}${videoID}`);
    setSelectedVideo(urlYtEmbedVideo);
  };

  return (
    <div className="page">
      {/* ============ CAPÇALERA/HEADER ============ */}
      <div className="cap">
        <div className="capEsquerra">
          <MenuIcon />
          <Link to={{ pathname: "https://www.youtube.com" }} target="_blank">
            <img className="capLogo" src={YouTubeLogo} />
          </Link>
          <h4>· x1tub</h4>
        </div>
        <div className="capInput">
          {/* <input type="text" /> */}
          <Lib.OnChange query={query} setQuery={setQuery} />
          <SearchIcon className="lupa" />
        </div>
        <div className="capDreta">
          <NotificationIcon />
          <Avatar />
        </div>
      </div>

      {/* ============ SECCIO VIDEOS ============ */}
      <div className="videoFrame">
        {/* ============ DETALL VIDEO ============ */}
        <div className="videoDetail">
          <p>Detallllllll Video</p>
          <VideoDetail urlVideo={selectedVideo} />
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
