import { fetcher } from "utils";
import { uniqBy } from "ramda";
import Image from "next/image";
import Loading from "../loading";
import React, { memo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import useModal from "hook/useModal";
import useSWR from "swr";

import { FILTER_MULTIPLE_VIDEOS } from "constants/home.constants";
import images from "styles/images";
const DynamicModal = dynamic(() => import("components/modal"), { ssr: false });
const DynamicGalleryModal = dynamic(() => import("components/modal/video-modal"), { ssr: false });

function VideoView() {
  const { isShowing, toggle } = useModal();
  const [filter, setFilter] = useState(FILTER_MULTIPLE_VIDEOS);
  const [indexVideo, setIndexVideo] = useState<number>(-1);
  const { data, error } = useSWR(`/api/videos?filter=${JSON.stringify(filter)}`, fetcher);
  const res = data?.data || [];
  const newData: any = useRef(res).current;
  if (!data) return <Loading />;
  if (error) return <div>Failed to load...</div>;
  const currentFilter = filter?.filter;
  const handlerClick = (index: number) => {
    toggle();
    setIndexVideo(index);
  };
  const onSeeMore = () => {
    setFilter({
      filter: {
        ...currentFilter,
        offset: currentFilter?.offset + 30,
        limit: currentFilter?.limit,
      },
    });
  };
  newData?.push(...res);
  const data2: any = uniqBy((x: any) => x?.id, newData);
  const disabled = data2?.length >= data?.total;
  const renderThumnail = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:mb-20">
        {data2?.map((video: any, i: number) => {
          return (
            <div
              key={video.id}
              onClick={() => handlerClick(i)}
              className="cursor-pointer relative group md:bg-grayf6 bg-white"
            >
              <div className="md:rounded-[7px] overflow-hidden text-left relative aspect-[5/3]">
                <Image
                  src={video?.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Videos"
                />
                <div className="absolute top-[50%] -translate-y-1/2 right-[50%] translate-x-1/2 w-[20%] aspect-1">
                  <Image src={images.play_icon} layout="fill" alt="iconPlay" />
                </div>
              </div>
              <div className="md:py-[18px] py-2 px-5 md:px-0 text-lg font-semibold">
                {video?.displayName}
              </div>
            </div>
          );
        })}
        <DynamicModal isShowing={isShowing}>
          <DynamicGalleryModal toggle={toggle} indexVideo={indexVideo} listVideo={data2} />
        </DynamicModal>
      </div>
    );
  };
  return (
    <>
      {renderThumnail()}
      <div className="flex justify-end">
        <button
          className={`text-[18px] md:text-2xl flex justify-end font-semibold py-[60px] cursor-pointer ${
            disabled ? "text-gray500" : "text-blue200"
          }`}
          onClick={onSeeMore}
          disabled={disabled}
        >
          Xem thêm
        </button>
      </div>
    </>
  );
}

export default memo(VideoView);
export const DynamicVideosList = dynamic(() => import("./video.view"), {
  ssr: false,
  loading: () => {
    return <Loading />;
  },
});
