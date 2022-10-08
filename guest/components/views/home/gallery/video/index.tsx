import { DynamicVideosList } from "./video.view";
import React, { memo } from "react";
import TabHeader from "../tabs/tab-header";
import TabMenu from "../tabs/tab-menu";

function VideoGallery() {
  return (
    <div className="bg-grayf6">
      <div className="md:mt-[100px] mt-[53px] mx-auto container pt-2 px-4 md:px-[50px]">
        <TabHeader name="Video" />
        <TabMenu />
        <DynamicVideosList />
      </div>
    </div>
  );
}

export default memo(VideoGallery);
