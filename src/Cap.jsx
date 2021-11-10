import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import NotificationIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";

import * as Lib from "./Lib.jsx";
import "./Cap.css";

const cYouTubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png";

/* ============ CAPÇALERA/HEADER ============ */

// Passem terme cerca, funció q asigna l estat i funcio q retorna video escollit
export const Cap = ({ cQuery, fSetQuery, fSetListYtsrVideos }) => {
  
  async function getYtSearch() {
    await Lib.YtSearch(cQuery, { fSetListYtsrVideos });
  }

  // S executa cada cop q canvia el terme de cerca
  useEffect(() => {
    // const Llista = Lib.YtSearch(cQuery, { fSetListYtsrVideos });
    getYtSearch();
  }, [cQuery]);

  return (
    <div className="Cap">
      <div className="capEsquerra">
        <MenuIcon />
        <Link to={{ pathname: "https://www.youtube.com" }} target="_blank">
          <img className="capLogo" src={cYouTubeLogo} alt="" />
        </Link>
        <h2>· x1tub</h2>
      </div>

      <div className="capInput">
        {/* <Lib.OnChange cQuery={cQuery} fSetQuery={fSetQuery} /> */}
        <Lib.OnSubmit fSetQuery={fSetQuery} /> {/* Camp de cerca */}
      </div>

      <div className="capDreta">
        <NotificationIcon />
        <Avatar />
        <Link to="/about">
          <InfoIcon />
        </Link>
      </div>
    </div>
  );
};
