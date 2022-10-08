import { REVIEW_COURSE_FILTER } from "constants/review.const";
import { REVIEW_RESPONSIVE } from "constants/course.constant";
import { ROUTER } from "constants/swr.api.constant";
import { formatDate, getDataSWR } from "utils/common";
import { uniqBy } from "ramda";
import Carousel from "react-multi-carousel";
import Icons from "styles/images/icon";
import Image from "next/image";
import React, { memo, useRef, useState } from "react";
import SeemoreQuill from "components/feature/seemore-quill";
import Skeleton from "components/skeleton";
import dynamic from "next/dynamic";
function ReviewList() {
  const [filter, setFilter] = useState<any>(REVIEW_COURSE_FILTER);
  const getReview = getDataSWR(filter, ROUTER.REVIEW);
  const res = getReview?.data?.data || [];
  const data: any = useRef(res)?.current;
  const currentFilter = filter?.filter;

  const onSeeMore = () => {
    setFilter({
      filter: {
        ...currentFilter,
        offset: currentFilter?.offset + 3,
        limit: currentFilter?.limit,
      },
    });
  };
  data.push(...res);
  const data2: any = uniqBy((x: any) => x?.id, data);

  const buttonLeft = () => (
    <div className="hidden w-7 h-full top-0 cursor-pointer justify-center rounded-l-xl absolute left-[7px] bg-black opacity-50 sm:flex items-center ">
      <Image src={Icons.left} width={15} height={35} alt="arrow feft" />
    </div>
  );
  const buttonRight = () => (
    <div className="w-7 h-full cursor-pointer top-0 justify-center rounded-r-xl absolute right-[7px] bg-black opacity-50 hidden sm:flex items-center">
      <Image src={Icons.right} width={15} height={35} alt="arrow right" />
    </div>
  );

  const renderReview = () => {
    if (data2)
      return data2.map(
        (review: {
          id: number;
          reviewAt: string;
          reviewerName: string;
          content: string;
          mediaContents: any;
          ownerAvatar: any;
        }) => (
          <div key={review.id} className="border-b last:border-none last:mb-0 pb-8 mb-8">
            <div className="flex justify-start items-center md:gap-4 gap-2">
              <div className="sm:w-12 w-[25px] sm:h-12 h-[25px] relative">
                {review.ownerAvatar && (
                  <Image
                    src={review.ownerAvatar.url || {}}
                    alt="DXP"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-full"
                  />
                )}
              </div>
              <div className="sm:ml-0 ml-[5px]">
                <p className="font-semibold sm:text-2xl text-sm">
                  {review.reviewerName}
                  <span className="opacity-40 font-normal pl-1">
                    - {formatDate(review.reviewAt)}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-gray800 md:text-[20px] text-[15px] sm:leading-8 leading-5 mt-2 sm:mt-5 sm:mb-8">
              <SeemoreQuill content={review.content} />
            </p>
            <div className="mt-2 sm:mt-0">
              <Carousel
                responsive={REVIEW_RESPONSIVE}
                customRightArrow={buttonRight()}
                customLeftArrow={buttonLeft()}
                containerClass="review_container"
              >
                {!review.mediaContents && null}
                {review.mediaContents &&
                  review.mediaContents.map((img: any) => {
                    return (
                      <div
                        key={img.id}
                        className="aspect-[3/2] rounded-[4px] sm:rounded-[7px] overflow-hidden relative mx-1 sm:mx-2"
                      >
                        <Image
                          src={img.url || {}}
                          alt="dxp"
                          blurDataURL={img.urlBlur}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          objectPosition="center"
                        />
                      </div>
                    );
                  })}
              </Carousel>
            </div>
          </div>
        )
      );
  };
  return (
    <div className="w-full md:py-9 py-8 md:flex-col flex-auto lg:px-12  ">
      <h1 className="font-semibold md:text-4xl text-2xl  md:mb-12 mb-5 md:uppercase text-left sm:text-center text-gray800">
        Cảm nhận của học viên
      </h1>
      <div>{renderReview()}</div>
      <div className="flex justify-end">
        <div
          onClick={onSeeMore}
          className="sm:text-xl text-[16px] text-sky font-normal cursor-pointer active:opacity-60"
        >
          Xem thêm
        </div>
      </div>
    </div>
  );
}

export const DynamicReviewList = dynamic(
  () => {
    return import("./index");
  },
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export default memo(ReviewList);
