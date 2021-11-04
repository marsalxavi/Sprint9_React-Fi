

const fs = require("fs");
const ytdl = require("ytdl-core");

  // let oYtdlInfo = await ytdl.getInfo("NT299zIk2JY");
  // console.log(oYtdlInfo);
  // let aRelatedVideos = oYtdlInfo.related_videos;
  // console.log(aRelatedVideos);


  const filters1 = await ytsr.getFilters("github");
  console.log(filters1);
  const filter1 = filters1.get("Type").get("Video");
  console.log(filter1);

  const filters2 = await ytsr.getFilters(filter1.url);
  console.log(filters2);
  const filter2 = filters2.get("Features").get("Live");
  console.log(filter2);
  const options = { pages: 2 };
  const qq2 = filter2.url;
  console.log(qq2);