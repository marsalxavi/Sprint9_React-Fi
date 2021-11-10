import React from "react";

export const RelatedVideos = ({ Related }) => {
  return (
    <>
      {Related.map((item, index) => {
        return (
          <div key={index}>
            <div className="videoListThumb">
              <img src={item.thumbnails[0].url} alt="" />
            </div>
            <div className="videoListDesc">
              <p>{item.title}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
