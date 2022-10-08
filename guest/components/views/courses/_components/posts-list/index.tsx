import { NEWS_RESPONSIVE } from "constants/course.constant";
import { ROUTERS } from "constants/router.constant";
import { formatContent, formatDate } from "utils/common";
import Carousel from "react-multi-carousel";
import ComponentTitle from "components/layout/component_title";
import Icons from "styles/images/icon";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import Skeleton from "components/skeleton";
import dynamic from "next/dynamic";
interface IpostList {
  title: string;
  content: string;
  createdAt: string;
  id: number;
  mediaContent: any;
  url: any;
  slug: any;
  showDots?: boolean;
}
function PostList({ data = [], showDots = true }: any) {
  const renderNews = () => {
    return data.map((item: IpostList, index: number) => {
      return (
        <div key={index} className="relative md:mx-6 mx-3 group">
          <div className="relative aspect-w-3 aspect-h-2 cursor-pointer w-full border-2 group-hover:border-bluebtn">
            <Link href={`${ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${item.slug}`}>
              {item?.mediaContent?.url && (
                <Image
                  placeholder="blur"
                  blurDataURL={item?.mediaContent?.urlBlur}
                  src={item?.mediaContent?.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Utopia Eco Lodge - At Home In Wild"
                />
              )}
            </Link>
          </div>
          <p className="opacity-40 mt-3 ">{formatDate(item.createdAt)}</p>
          <Link href={`${ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${item.slug}`}>
            <a className="md:text-xl text-lg my-4 uppercase cursor-pointer group-hover:text-bluebtn   line-clamp-2 text-justify">
              {item.title}
            </a>
          </Link>
          <Link href={`${ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${item.slug}`}>
            <a className="  md:text-lg text-sm md:leading-[21.48px] cursor-pointer leading-[16.71px] line-clamp-4">
              {formatContent(item.content)}
            </a>
          </Link>
        </div>
      );
    });
  };
  const buttonLeft = () => (
    <div className="w-8 2xl:h-[320px] lg:h-[206px] top-0 cursor-pointer justify-center absolute left-6 bg-black opacity-50 flex items-center ">
      <Image src={Icons.left} width={21} height={35} alt="arrow feft" />
    </div>
  );
  const buttonRight = () => (
    <div className="w-8 2xl:h-[320px] lg:h-[206px] xl:h-[263px]  cursor-pointer top-0 justify-center  absolute right-6 bg-black opacity-50 flex items-center">
      <Image src={Icons.right} width={21} height={35} alt="arrow right" />
    </div>
  );

  return (
    <div className="md:mt-20 mt-[30px]">
      <ComponentTitle title={"Bài viết"} />
      <div className="mt-5 gap-5">
        <Carousel
          responsive={NEWS_RESPONSIVE}
          draggable={false}
          showDots={showDots}
          swipeable
          dotListClass="dot-list-news"
          sliderClass="slider-news"
          customLeftArrow={buttonLeft()}
          customRightArrow={buttonRight()}
          containerClass="container-news"
          partialVisible={true}
          removeArrowOnDeviceType={["mobile", "tablet"]}
        >
          {renderNews()}
        </Carousel>
      </div>
    </div>
  );
}

export const DynamicPostsList = dynamic(
  () => {
    return import("./index");
  },
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export default memo(PostList);
