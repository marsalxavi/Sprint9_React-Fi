import { ClassNames } from "@emotion/react";
import { CodeSharp } from "@mui/icons-material";

import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ytsr = require("ytsr");
export const YtSearch = async (qq, { setLlistaVideos }) => {
  const firstResultBatch = await ytsr(`${qq}`, { pages: 1 });

  setLlistaVideos(firstResultBatch.items);
  return firstResultBatch;
};

export const LinkList = ({ VideosPerLlistar, clickedVideoID }) => {
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
      {VideosPerLlistar.map((item, index) => {
        return (
          <>
            <li className="videoListLine">
              {checkBestThumb(item) && (
                <div className="videoListItem">
                  <div className="videoListThumb">
                    <img src={item.bestThumbnail.url} />
                  </div>
                  <div className="videoListDesc">
                    <p
                      onClick={() => {
                        clickedVideoID(item.id);
                      }}
                    >
                      {item.url}
                    </p>

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

export const OnChange = ({ query, setQuery }) => {
  return (
    <form>
      <input
        onChange={(e) => setQuery(e.target.value == "" ? " " : e.target.value)}
        name="nom"
        type="text"
        value={query}
      />
      <input name="searchOnChange" type="submit" value="onChange" />
    </form>
  );
};

export const OnSubmit = ({ setQuery }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => setQuery(data.searchItem);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="nom"
        {...register("searchItem")}
        type="text"
        // defaultValue={query0}
      />
      <input name="searchOnSubmit" type="submit" value="onSubmit" />
    </form>
  );
};
