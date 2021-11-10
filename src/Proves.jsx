import React from "react";
import { aRelatedVideos } from "./aRelatedVideos";

export const Proves = () => {
  console.log("aRel: ", aRelatedVideos);
  console.log("aRid: ", aRelatedVideos[0].id);
  const Matriu = { ...aRelatedVideos };
  console.log("matriu: ", Matriu);
  console.log("matid: ", Matriu[0].id);

  //   const NewArray = Matriu.map((item, index) => {
  //     console.log(item);
  //   });

  return (
    <div>
      <h2>Proves</h2>
    </div>
  );
};
