import { REVIEW_ABOUT_ME_FILTER } from "constants/review.const";
import { ROUTER } from "constants/swr.api.constant";
import { VIEW_RESPONSIVE } from "constants/course.constant";
import { formatDate, getDataSWR } from "utils/common";
import { uniqBy } from "ramda";
import Carousel from "react-multi-carousel";
import ComponentTitle from "components/layout/component_title";
import ContentWithSeeMore from "./seeMoreContent";
import Icons from "styles/images/icon";
import Image from "next/image";
import React, { memo, useRef, useState } from "react";
import dynamic from "next/dynamic";

interface IviewAbout {
  mediaContents: any;
  reviewerName: string;
  reviewAt: string;
  content: string;
  ownerAvatar: any;
  id: number;
}
function ViewAboutMe() {
  const [filter, setFilter] = useState<any>(REVIEW_ABOUT_ME_FILTER);
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
    <div className="w-5 h-full top-0 cursor-pointer justify-center rounded-l-xl absolute left-[7px] bg-black opacity-[0.25] flex items-center ">
      <Image src={Icons.left} width={15} height={35} alt="arrow feft" />
    </div>
  );
  const buttonRight = () => (
    <div className="w-5 h-full cursor-pointer top-0 justify-center rounded-r-xl absolute right-[7px] bg-black opacity-[0.25] flex items-center">
      <Image src={Icons.right} width={15} height={35} alt="arrow right" />
    </div>
  );

  const renderView = () => {
    if (data2)
      return (
        <div className="flex flex-col md:gap-6">
          {data2.map((item: IviewAbout) => {
            return (
              <div key={item.id} className="mt-[-10px] md:mt-0 border-t-2 first:border-t-0">
                <div className="mt-[18px]">
                  <div className="rounded-[7px]  text-black md:p-5">
                    <div className="flex justify-start items-center md:gap-4 gap-2">
                      <div className="sm:w-12 w-6 sm:h-12 h-6 relative">
                        {item.ownerAvatar && (
                          <Image
                            src={item.ownerAvatar.url || ""}
                            alt="DXP"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                            objectPosition="center"
                          />
                        )}
                      </div>
                      <div className="flex justify-start items-center gap-1">
                        <p className="font-semibold sm:text-2xl text-lg">{item.reviewerName}</p>
                        <p>-</p>
                        <p className="opacity-40 font-normal">{formatDate(item.reviewAt)}</p>
                      </div>
                    </div>
                    <ContentWithSeeMore content={item.content} />
                  </div>

                  <div className="mt-5">
                    <Carousel
                      responsive={VIEW_RESPONSIVE}
                      customRightArrow={buttonRight()}
                      customLeftArrow={buttonLeft()}
                    >
                      {!item.mediaContents && null}
                      {item.mediaContents &&
                        item?.mediaContents?.map(
                          (img: { url: string; urlBlur: string; id: number }) => {
                            return (
                              <div className="aspect-w-3  aspect-h-2 relative mx-2" key={img.id}>
                                {img.url && (
                                  <Image
                                    className="rounded-md"
                                    src={img.url || ""}
                                    blurDataURL={img.urlBlur}
                                    alt="dxp"
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    objectPosition="center"
                                  />
                                )}
                              </div>
                            );
                          }
                        )}
                    </Carousel>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className="ml-auto md:mr-4 font-normal cursor-pointer text-[20px] text-bluebtn leading-[30px] float-right py:mb-0 py-3 "
            onClick={onSeeMore}
          >
            Xem thêm
          </div>
        </div>
      );
  };
  return (
    <div className="md:mt-16 mt-3">
      <div className="md:block hidden">
        <ComponentTitle title={"góc nhìn về tôi"} className={"mb-12"} />
      </div>
      <h1 className="md:hidden block uppercase text-[24px] leading-[29px] text-center mb-6">
        góc nhìn về tôi
      </h1>
      <div>{renderView()}</div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="md:mt-16 mt-9 animate-pulse">
      <div className="md:block hidden">
        <ComponentTitle title={"góc nhìn về tôi"} className={"mb-12"} />
      </div>
      <h1 className="md:hidden block uppercase text-[24px] leading-[29px] text-center mb-6"></h1>
      <div>
        <div className="mt-[-10px] md:mt-0 border-b-2  ">
          <div className="my-[18px]">
            <div className="rounded-[7px]  text-black md:p-5">
              <div className="flex justify-start items-center md:gap-4 gap-2">
                <div className="sm:w-12 w-6 sm:h-12 h-6 relative"></div>
                <div className="flex justify-start items-center gap-1">
                  <p className="font-semibold sm:text-2xl text-lg"></p>
                  <p className="opacity-40 font-normal"></p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="aspect-w-3  aspect-h-2 relative mx-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const DynamicViewAboutMe = dynamic(() => import("../view-about-me"), {
  ssr: false,
  loading: () => {
    return <Skeleton />;
  },
});

export default memo(ViewAboutMe);
