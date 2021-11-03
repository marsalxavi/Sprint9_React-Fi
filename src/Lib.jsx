import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import "./Lib.css";

const ytsr = require("ytsr");

export const YtSearch = async (qq, { fSetYtsrVideos }) => {
  const firstResultBatch = await ytsr(`${qq}`, { pages: 1 });
  fSetYtsrVideos(firstResultBatch.items);
  return firstResultBatch;
};

export const ListYtsrVideos = ({ oVideosPerLlistar, fClickedVideoID }) => {
  const checkBestThumb = (item) => {
    if ("bestThumbnail" in item) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ol>
      {oVideosPerLlistar.map((item, index) => {
        return (
          <li key={index} className="videoListLine">
            {checkBestThumb(item) && (
              <div
                className="videoListItem"
                onClick={() => {
                  fClickedVideoID({
                    dni: item.id,
                    titol: item.title,
                  });
                }}
              >
                <div className="videoListThumb">
                  <img src={item.bestThumbnail.url} alt="" />
                </div>
                <div key={index} className="videoListDesc">
                  <p>{item.title}</p>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export const OnChange = ({ cQuery, fSetQuery }) => {
  return (
    <form className="searchForm">
      <input
        onChange={(e) =>
          fSetQuery(e.target.value === "" ? " " : e.target.value)
        }
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
    <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="nom"
        {...register("searchItem")}
        type="text"
        // defaultValue={cQuery0}
      />
      {/* <input name="searchOnSubmit" type="submit" value="onSubmit" /> */}
    </form>
  );
};

export const OnSubmit2 = ({ fSetQuery }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => fSetQuery(data.searchItem);

  return (
    <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="nom"
        {...register("searchItem")}
        type="text"
        // defaultValue={cQuery0}
      />
      <Link onClick={handleSubmit(onSubmit)} to="/">
        <SearchIcon
          style={{ width: "1.5em", height: "1.5em" }}
          className="lupa"
        />
      </Link>
      {/* <input name="searchOnSubmit" type="submit" value="onSubmit" /> */}
    </form>
  );
};