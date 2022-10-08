import { ROUTERS } from "constants/router.constant";
import { formatContent, formatDate } from "utils/common";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import Skeleton from "components/skeleton";
import dynamic from "next/dynamic";

function FeaturedNews({ onSeemore, data }: any) {
  if (data?.length === 0) {
    return (
      <div className="text-xl inline-block animate-pulse py-1 rounded-lg mt-3">
        Không có dữ liệu
      </div>
    );
  }
  const renderFeaturedNews = () => {
    if (data)
      return data.map(
        (news: {
          title: string;
          newsAt: string;
          description: string;
          id: number;
          mediaContent: any;
          content: any;
        }) => (
          <div
            key={news.id}
            className="grid md:grid-cols-2 md:mb-16 mb-6 gap-[53px] mt-6 md:mt-0 border-b-2 md:border-none "
          >
            <Link href={`${ROUTERS.VIEW_DETAIL}/${news.id}`}>
              <a className="text-[#011C53] font-semibold text-lg block md:hidden">{news.title}</a>
            </Link>
            {/* DeskTop */}
            <div className="relative w-full aspect-w-4 aspect-h-2 hidden md:block">
              <Image
                src={news?.mediaContent?.url || {}}
                blurDataURL={news?.mediaContent?.urlBlur}
                alt="DXP"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                objectPosition="center"
              />
            </div>
            <article className="hidden md:block">
              <Link href={`${ROUTERS.VIEW_DETAIL}/${news.id}`}>
                <a className="text-[#011C53] font-semibold text-lg hidden md:block">{news.title}</a>
              </Link>
              <p className="opacity-40 text-lg py-4">{formatDate(news.newsAt)}</p>
              <p className="text-justify text-gray800 text-lg line-clamp-4">
                {formatContent(news.content)}
              </p>
            </article>

            {/* Mobi */}
            <div className="grid grid-cols-2 md:hidden gap-4 mt-[-30px] mb-4">
              <div className="relative w-full aspect-w-4 aspect-h-2 ">
                <Image
                  src={news.mediaContent?.url || {}}
                  blurDataURL={news.mediaContent?.urlBlur}
                  alt="DXP"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  objectPosition="center"
                />
              </div>
              <article className="">
                <p className="opacity-40 text-lg ">{formatDate(news.newsAt)}</p>
                <p className="text-justify text-gray800 text-lg line-clamp-4">{news.description}</p>
              </article>
            </div>
          </div>
        )
      );
  };

  return (
    <>
      {renderFeaturedNews()}
      <div
        className={` py-4 md:py-none flex justify-end  text-[18px] leading-[21px] font-semibold text-bluebtn cursor-pointer `}
        onClick={onSeemore}
      >
        Xem thêm
      </div>
    </>
  );
}
export const DynamicFeaturedNews1 = dynamic(
  () => {
    return import("./index");
  },
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export default memo(FeaturedNews);
