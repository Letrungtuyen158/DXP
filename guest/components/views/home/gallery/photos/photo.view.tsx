import { FILTER_MULTIPLE_PHOTOS } from "./photo.config";
import { breakpoints } from "./photo.config";
import { fetcher } from "utils";
import { uniqBy } from "ramda";
import Image from "next/image";
import Loading from "../loading";
import Masonry from "react-masonry-css";
import React, { memo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import useModal from "hook/useModal";
import useSWR from "swr";
const DynamicModal = dynamic(() => import("components/modal"), { ssr: false });
const DynamicGalleryModal = dynamic(() => import("components/modal/modalGallery"), { ssr: false });

function PhotoView() {
  const [filter, setFilter] = useState(FILTER_MULTIPLE_PHOTOS);
  const { isShowing, toggle } = useModal();
  const [indexImage, setIndexImage] = useState<number>(-1);
  const { data, error } = useSWR(`/api/photos?filter=${JSON.stringify(filter)}`, fetcher);
  const res = data?.data || [];
  const newData: any = useRef(res).current;
  if (error) return <div>Failed to load...</div>;
  const currentFilter = filter?.filter;
  const handlerClick = (index: number) => {
    toggle();
    setIndexImage(index);
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
  const renderImg = () => {
    if (data2) {
      return data2?.map((img: any, index: number) => {
        return (
          <div
            className="md:mb-5 cursor-pointer rounded-[7px] overflow-hidden"
            key={index}
            onClick={() => handlerClick(index)}
          >
            <Image
              placeholder="blur"
              src={img.url}
              blurDataURL={img.urlBlur}
              layout="responsive"
              alt="DuongXuanPhi"
              width={img.width}
              height={img.height}
            />
          </div>
        );
      });
    }
  };

  return (
    <div>
      <DynamicModal isShowing={isShowing}>
        <DynamicGalleryModal listImage={data2} indexImage={indexImage} toggle={toggle} />
      </DynamicModal>
      {isShowing && <div className="fixed inset-0 bg-black z-10 opacity-50"> </div>}
      <Masonry breakpointCols={breakpoints} className="flex mt-2 md:gap-5 gap-3">
        {renderImg()}
      </Masonry>
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
    </div>
  );
}

export default memo(PhotoView);
export const DynamicImagesList = dynamic(() => import("./photo.view"), {
  ssr: false,
  loading: () => {
    return <Loading />;
  },
});
