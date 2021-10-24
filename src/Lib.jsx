import React from "react";
import { useForm } from "react-hook-form";

// import { YtSearch } from "./YtSearch.jsx";

const ytsr = require("ytsr");
export const YtSearch = async (qq, { setLlistaVideos }) => {
  // console.log("YtSearch: ", qq);
  const firstResultBatch = await ytsr(`${qq}`, { pages: 1 });

  setLlistaVideos(firstResultBatch.items);
  return firstResultBatch;
};

export const LinkList = ({ VideosPerLlistar }) => {
  return (
    <ol>
      {VideosPerLlistar.map((item, index) => {
        return (
          <>
            <li>
              <a href={item.url}>{item.title}></a>
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
