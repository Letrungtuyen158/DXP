import "react-multi-carousel/lib/styles.css";
import { NEWS_RESPONSIVE } from "constants/course.constant";
import { ROUTERS } from "constants/router.constant";
import { formatDate } from "utils/common";
import Carousel from "react-multi-carousel";
import Icons from "styles/images/icon";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import dynamic from "next/dynamic";
interface InewList {
  newsAt: string;
  title: string;
  newspaper: string;
  id: number;
  mediaContent: any;
  slug: string;
}
function NewsList({ data = [] }: { data: any }) {
  const renderNews = () => {
    return data?.map((news: InewList) => {
      return (
        <div key={news.id} className="md:mx-6 mx-2 relative group md:pb-0 pb-[50px]">
          <div className="relative aspect-w-3 aspect-h-2 border-2 group-hover:border-bluebtn ">
            <Link href={`${ROUTERS.VIEW_DETAIL}/${news.id}-${news.slug}`}>
              <a>
                <Image
                  src={news.mediaContent.url || {}}
                  blurDataURL={news.mediaContent.urlBlur}
                  alt="dxp"
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </a>
            </Link>
          </div>
          <p className="opacity-40 mt-3 md:mb-0 mb-3 cursor-pointer text-sm md:text-lg">
            {formatDate(news.newsAt)}
          </p>
          <div>
            <Link href={`${ROUTERS.VIEW_DETAIL}/${news.id}-${news.slug}`}>
              <a className="text-xl text-black group-hover:text-bluebtn font-semibold sm:line-clamp-4 min-h-[100px] md:my-4 my-2 text-justify">
                {news.title}
              </a>
            </Link>
            <p className="text-right text-lg font-bold mt-2 md:mb-0 mb-8 line-clamp-1">
              Theo {news.newspaper}
            </p>
          </div>
        </div>
      );
    });
  };
  const buttonLeft = () => (
    <div className="w-8 2xl:h-[320px] lg:h-[206px] xl:h-[263px] top-0 cursor-pointer justify-center absolute left-6 bg-black opacity-50 flex items-center">
      <Image
        src={Icons.left}
        blurDataURL={Icons.left}
        width={21}
        height={35}
        alt="arrow feft"
        placeholder="blur"
      />
    </div>
  );
  const buttonRight = () => (
    <div className="w-8 2xl:h-[320px] lg:h-[206px] xl:h-[263px] cursor-pointer top-0 justify-center absolute right-6 bg-black opacity-50 flex items-center">
      <Image
        src={Icons.right}
        blurDataURL={Icons.right}
        width={21}
        height={35}
        alt="arrow right"
        placeholder="blur"
      />
    </div>
  );

  return (
    <div className="mt-[23px]">
      <div className="mt-5 gap-5">
        <Carousel
          responsive={NEWS_RESPONSIVE}
          draggable={false}
          showDots
          swipeable
          dotListClass="dot-list-news"
          sliderClass="slider-news"
          customLeftArrow={buttonLeft()}
          customRightArrow={buttonRight()}
          containerClass="container-news"
          partialVisible={data?.length > 1}
          removeArrowOnDeviceType={["mobile", "tablet"]}
        >
          {renderNews()}
        </Carousel>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="mt-[23px]">
      <div className="mt-5 gap-5 animate-pulse">
        <div className="md:mx-6 mx-2  relative">
          <div className="relative aspect-w-3 aspect-h-2"></div>
          <p className="opacity-40 mt-3 cursor-pointer "></p>
          <p className="md:text-xl text-lg font-semibold sm:line-clamp-4  leading-[21.48px] min-h-[100px] md:my-4 my-2 text-justify"></p>
          <p className="text-right sm:text-lg text-sm font-bold mt-2 md:mb-0 mb-8"></p>
        </div>
      </div>
    </div>
  );
}

export const DynamicNewsList = dynamic(() => import("../news-list"), {
  ssr: false,
  loading: () => {
    return <Skeleton />;
  },
});

export default memo(NewsList);
