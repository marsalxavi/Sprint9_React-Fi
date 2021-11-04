import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import NotificationIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";

import * as Lib from "./Lib.jsx";
import './Cap.css'

const cYouTubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png";


  /* ============ CAPÇALERA/HEADER ============ */
export const Cap = ({ cQuery, fSetYtsrVideos, fSetQuery }) => {
  async function fetchData() {
    await Lib.YtSearch(cQuery, { fSetYtsrVideos });
  }

  // useEffect(async () => {
  useEffect(() => {
    // const Llista = Lib.YtSearch(cQuery, { fSetYtsrVideos });
    fetchData();
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
  );
};