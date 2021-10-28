import { ClassNames } from "@emotion/react";
import { CodeSharp } from "@mui/icons-material";

import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./Lib.css";

const ytsr = require("ytsr");

export const YtSearch = async (qq, { fSetLlistaVideos }) => {
  const firstResultBatch = await ytsr(`${qq}`, { pages: 1 });

  fSetLlistaVideos(firstResultBatch.items);
  return firstResultBatch;
};

export const LinkList = ({ oVideosPerLlistar, fClickedVideoID }) => {
  const checkBestThumb = (item) => {
    if ("bestThumbnail" in item) {
      return true;
    } else {
      // console.log("no bestThumbnail", item.title);
      return false;
    }
  };

  return (
    <ol>
      {oVideosPerLlistar.map((item, index) => {
        return (
          <>
            <li className="videoListLine">
              {checkBestThumb(item) && (
                <div className="videoListItem">
                  <div className="videoListThumb">
                    <img
                      onClick={() => {
                        fClickedVideoID({
                          dni: item.id,
                          titol: item.title,
                        });
                      }}
                      src={item.bestThumbnail.url}
                    />
                  </div>
                  <div className="videoListDesc">
                    <Link to={`/video/${item.id}/${item.title}`}>
                      <p>{item.title}</p>
                    </Link>

                    {/* <Link to={`/video/${item.id}`}>{item.title}</Link> */}
                    {/* <a href={item.url}>{item.title}</a> */}
                  </div>
                </div>
              )}
            </li>
          </>
        );
      })}
    </ol>
  );
};

export const OnChange = ({ cQuery, fSetQuery }) => {
  return (
    <form className="searchForm">
      <input
        onChange={(e) => fSetQuery(e.target.value == "" ? " " : e.target.value)}
        name="nom"
        type="text"
        value={cQuery}
      />
      {/* <input name="searchOnChange" type="submit" value="onChange" /> */}
    </form>
  );
};

export const OnSubmit = ({ fSetQuery }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => fSetQuery(data.searchItem);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="nom"
        {...register("searchItem")}
        type="text"
        // defaultValue={cQuery0}
      />
      <input name="searchOnSubmit" type="submit" value="onSubmit" />
    </form>
  );
};
