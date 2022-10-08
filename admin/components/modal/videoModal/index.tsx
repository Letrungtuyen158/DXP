import React, { memo } from "react";
import ReactPlayer from "react-player";

function ModalVideo({ hide, videoUrl }: { hide: any; videoUrl: string; thumbnail: string }) {
  return (
    <div className="fixed top-48 bg-opacity-20 flex w-full justify-center items-center">
      <div className="z-30 relative lg:w-3/5 sm:w-4/5 w-full container m-auto object-cover lg:mx-40 md:mx-16">
        <ReactPlayer
          url={videoUrl}
          playing={false}
          pip={false}
          loop={false}
          width="100%"
          height={500}
          controls
        />
      </div>
      <div onClick={hide} className="fixed inset-0 bg-opacity-50 bg-black z-10 cursor-pointer" />
    </div>
  );
}

export default memo(ModalVideo);
