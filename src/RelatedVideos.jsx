import React from "react";

export const RelatedVideos = ({ Related }) => {
  return (
    <>
      {Related.map((item, index) => {
        return (
          <div className="RelatedVideosRow">
            <div key={index} className="relatedVideosItem">
              <div className="relatedVideosThumb">
                <img src={item.thumbnails[0].url} alt="" />
              </div>
              <div className="relatedVideosDesc">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
