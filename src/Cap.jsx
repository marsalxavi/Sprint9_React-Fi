import React, { Fragment, useEffect, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/Notifications";

import * as Lib from "./Lib.jsx";

import "./Cap.css";

const YouTubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png";

export const Cap = () => {
  const query0 = "Cibernarium";

  const [query, setQuery] = useState([query0]);
  const [LlistaVideos, setLlistaVideos] = useState([]);

  useEffect(async () => {
    const Llista = Lib.YtSearch(query, { setLlistaVideos });
    console.log(Llista);
  }, [query]);

  return (
    <div className="page">
      <div className="cap">
        <div className="capEsquerra">
          <MenuIcon />
          <img className="capLogo" src={YouTubeLogo} />
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
      <div className="videoFrame">
        <div className="videoDetail">
          <p>Detall Video</p>
        </div>
        <div className="videoList">
          <Lib.LinkList VideosPerLlistar={LlistaVideos} />
        </div>
      </div>
    </div>
  );
};
