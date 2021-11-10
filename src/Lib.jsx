import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import "./Lib.css";

const ytsr = require("ytsr");

export const YtSearch = async (qq, { fSetListYtsrVideos }) => {
  const firstResultBatch = await ytsr(`${qq}`, { pages: 1 });
  fSetListYtsrVideos(firstResultBatch.items);
  // return firstResultBatch;
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
