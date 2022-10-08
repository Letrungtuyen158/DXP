import { ROUTERS } from "constants/router.constant";
import { formatContent, formatDate } from "utils/common";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import SeeMore from "components/button/seeMore";

function NewsPapers({
  hidden,
  isRounded,
  data = [],
}: {
  hidden: boolean;
  isRounded?: boolean;
  data?: any;
}) {
  const router = useRouter();
  const isShowMore = !(router.pathname === ROUTERS.VIEW);
  const latestNews = data?.[0] || {};
  const nextNews = data?.[1] || {};
  const renderLatestNews = () => {
    if (data)
      return (
        <>
          <div className="md:flex md:justify-between md:gap-[30px] mt-[-30px] md:mt-0 container ">
            {/* Destop */}
            <div
              className={`md:w-[45%]  md:bg-gray800  ${isRounded && "rounded-md"} hidden md:flex`}
            >
              <div className="my-auto md:w-full md:h-full md:mt-0 md:block mt-4 w-[435px] flex justify-center h-[173px] relative">
                {latestNews?.mediaContent?.url && (
                  <Link href={`${ROUTERS.VIEW_DETAIL}/${latestNews.id}-${latestNews.slug}`}>
                    <a>
                      <Image
                        src={latestNews.mediaContent.url || {}}
                        layout="fill"
                        objectFit="contain"
                        objectPosition={"center"}
                        alt="Duong Xuan Phi"
                        placeholder="blur"
                        blurDataURL={latestNews.mediaContent.urlBlur}
                        priority
                      />
                    </a>
                  </Link>
                )}
              </div>
            </div>
            {/* Mobi */}
            <Link href={`${ROUTERS.VIEW_DETAIL}/${latestNews.id}-${latestNews.slug}`} passHref>
              <div className={`w-full block lg:hidden`}>
                <div className="my-auto  mt-10 aspect-w-4 aspect-h-2 relative">
                  {latestNews.mediaContent?.url && (
                    <Image
                      src={latestNews?.mediaContent.url || {}}
                      layout="fill"
                      objectFit="fill"
                      objectPosition={"center"}
                      alt="Duong Xuan Phi"
                      placeholder="blur"
                      blurDataURL={latestNews.mediaContent.urlBlur}
                    />
                  )}
                </div>
              </div>
            </Link>

            <section className="flex-1 flex flex-col justify-between md:py-0 py-6">
              <div className="flex mb-[30px] gap-1">
                <p className="md:text-[20px] text-sm font-bold md:mr-[14px] mt-[-15px] 2xl:mt-0">
                  {latestNews.newspaper}
                </p>
                <p className="md:text-[20px] text-sm font-normal opacity-40 mt-[-15px] 2xl:mt-0">
                  {formatDate(latestNews.newsAt)}
                </p>
              </div>
              <Link href={`${ROUTERS.VIEW_DETAIL}/${latestNews.id}-${latestNews.slug}`}>
                <a className="md:text-[24px] text-xl leading-[22px] font-semibold md:leading-[30px] mt-[-15px] 2xl:mt-0 line-clamp-3">
                  {latestNews.title}
                </a>
              </Link>

              <div className="md:flex md:flex-col  items-start">
                <p className="mt-[17px] font-normal md:text-[20px] text-sm leading-[16.71px] md:leading-[28.64px] opacity-50 line-clamp-4">
                  {formatContent(latestNews.content)}
                </p>
                <Link href={`${ROUTERS.VIEW_DETAIL}/${latestNews.id}-${latestNews.slug}`}>
                  <a className="md:block hidden mt-[17px] font-normal text-[20px] leading-[23.87px] opacity-50 mb-[34px] hover:font-semibold">
                    Xem thêm
                  </a>
                </Link>
              </div>

              <Link href={`${ROUTERS.VIEW_DETAIL}/${nextNews.id}-${latestNews.slug}`}>
                <a className="border rounded-md md:border-gray300  border-graysearch   grid grid-cols-2 gap-2 md:mt-0 mt-[30px] ">
                  <div className="ml-[18px] my-[18px] relative aspect-w-2 aspect-h-1">
                    {nextNews?.mediaContent && (
                      <Image
                        src={nextNews?.mediaContent?.url || {}}
                        layout="fill"
                        alt="Duong Xuan Phi"
                        placeholder="blur"
                        objectFit="cover"
                        objectPosition={"center"}
                        blurDataURL={nextNews?.mediaContent?.urlBlur}
                      />
                    )}
                  </div>
                  <div className="my-[18px] flex-1 p-4 ">
                    <p className="md:text-[20px] text-[14px] font-bold leading-[23.87px]">
                      {nextNews.newspaper}
                    </p>
                    <p className="md:text-[20px] text-[14px] font-normal opacity-40 mt-[8px] leading-[23.87px]">
                      {formatDate(nextNews.newsAt)}
                    </p>
                    <p className="md:text-md text-[14px] font-bold md:mt-[24px] mt-4 md:leading-[24px] leading-[18px] line-clamp-2">
                      {nextNews.title}
                    </p>
                  </div>
                </a>
              </Link>
            </section>
          </div>
          {isShowMore && (
            <div className="mt-[24px] md:flex hidden justify-end ">
              <SeeMore navigation={`${ROUTERS.VIEW_DETAIL}`} />
            </div>
          )}
        </>
      );
  };
  return (
    <section className="flex flex-col">
      <p
        className={`md:text-[48px] md:mb-[22px] text-[24px] leading-[28px] text-center md:text-left ${
          hidden ? "hidden" : ""
        }`}
      >
        BÁO CHÍ
      </p>
      {renderLatestNews()}
    </section>
  );
}

export default memo(NewsPapers);
