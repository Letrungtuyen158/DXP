import "react-multi-carousel/lib/styles.css";
import { responsive } from "../config";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import React, { memo, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import images from "styles/images/home";

function ModalVideo({
  toggle,
  listVideo,
  indexVideo,
}: {
  toggle: any;
  listVideo: any;
  indexVideo: number;
}) {
  const newListVideo = useMemo(
    () =>
      listVideo
        .map((video: any, index: number) => {
          const newVideo = { ...video, isPlay: false };
          if (index === indexVideo) newVideo.isPlay = true;
          return newVideo;
        })
        .slice(indexVideo)
        .concat(listVideo.slice(0, indexVideo)),
    []
  );
  const [state, setState] = useState(newListVideo);
  const handleChangeSlide = () => {
    const newState = state.map((video: any) => {
      return { ...video, isPlay: false };
    });
    setState([...newState]);
  };

  const leftArrow = () => (
    <div className="sm:w-[43px] cursor-pointer w-[36px] absolute hidden md:flex justify-center items-center sm:-left-8 sm:translate-x-1/2 -left-5">
      <div className="relative">
        <Image src={images.icon_arrowLeft} width={21} height={35} alt="icon" />
      </div>
    </div>
  );
  const rightArrow = () => (
    <div className="sm:w-[43px] cursor-pointer w-[36px] absolute hidden md:flex justify-center items-center sm:-right-8 sm:-translate-x-1/2 -right-5">
      <div className="relative">
        <Image src={images.icon_arrowRight} width={21} height={35} alt="icon" />
      </div>
    </div>
  );

  return (
    <>
      <div className="z-40 fixed w-full sm:w-[850px] left-1/2 top-1/2 -translate-x-1/2 inset-0 -translate-y-1/2">
        <div className="relative">
          <Carousel
            responsive={responsive}
            ssr
            infinite
            customLeftArrow={leftArrow()}
            customRightArrow={rightArrow()}
            autoPlay={false}
            beforeChange={handleChangeSlide}
          >
            {state?.map((video: any) => {
              return (
                <div
                  key={video.id}
                  className="h-[380px] md:h-[500px] relative flex items-center justify-center"
                >
                  <ReactPlayer
                    url={video.videoUrl}
                    playing={video.isPlay}
                    width={700}
                    height="auto"
                    controls
                  />
                </div>
              );
            })}
          </Carousel>
          <div
            className="absolute cursor-pointer top-[-100px] md:top-[-60px] h-10 w-10 right-[20px] md:right-[50px]"
            onClick={toggle}
          >
            <Image
              src={images.icon_delete}
              width={50}
              height={50}
              layout="fill"
              alt="icon delete"
            />
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-90 ease-in z-0" />
    </>
  );
}

export default memo(ModalVideo);
