import { ROUTERS } from "constants/router.constant";
import { VALUES_DEFAULT } from "components/views/home/home.constant";
import { formatContent, formatDate } from "utils/common";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import Seemore from "components/button/seeMore";
interface Ivalues {
  id: number;
  slug: string;
  mediaContent: any;
  title: string;
  createdAt: string;
  content: string;
}
function Values({ data }: any) {
  const newData = [...data];
  newData.splice(1, 0, VALUES_DEFAULT);

  return (
    <section className="md:mt-[67px] mt-[50px] items-center px-4 md:px-[50px] mx-auto container flex flex-col">
      <div>
        <p className="md:text-[48px] text-[24px] text-center mb-[20px] ">GIÁ TRỊ TỐT ĐẸP</p>
        <p className="font-normal md:text-[20px] text-center text-[20px] md:w-[778px] md:mb-[36px]">
          Những bài viết chia sẻ về góc nhìn cuộc sống, bàn luận về kinh tế, triết học,... được đúc
          kết từ thực tế cuộc sống và trải nghiệm của anh
        </p>
      </div>
      {/* Destop */}
      <section className="lg:grid grid-cols-3 gap-[15px] lg:gap-[70px] hidden">
        {newData &&
          newData?.map((item: Ivalues, i: number) => {
            return (
              <div key={i}>
                <div
                  className={`aspect-w-3 aspect-h-2 relative ${
                    item.id === -1 ? "" : "cursor-pointer"
                  } flex items-center justify-center overflow-hidden rounded-t-xl`}
                >
                  {item?.mediaContent?.url && (
                    <Link
                      passHref
                      href={`${item.id === -1 ? "#" : ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${
                        item.slug
                      }`}
                    >
                      <Image
                        src={item.mediaContent.url}
                        alt="image"
                        placeholder="blur"
                        blurDataURL={item.mediaContent.urlBlur}
                        layout="fill"
                        objectFit={item.id === -1 ? "contain" : "cover"}
                        objectPosition="center"
                      />
                    </Link>
                  )}
                </div>
                <div
                  className={` ${
                    item.id === -1 ? "" : "bg-gray200"
                  }  rounded-b-xl flex items-center`}
                >
                  <Link
                    passHref
                    href={`${item.id === -1 ? "#" : ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${
                      item.slug
                    }`}
                  >
                    <p
                      className={`xl:leading-[25px] lg:leading-[24px] ${
                        item.id === -1
                          ? "font-semibold text-center"
                          : "font-normal text-[#011C53]  text-left line-clamp-2 cursor-pointer"
                      }   m-[5px] xl:m-[16px] lg:text-[14px] xl:text-[20px]  text-left h-[50px] `}
                    >
                      {item.title}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
      </section>
      {/* Mobi */}
      <div className="md:hidden">
        <div className=" flex flex-col items-center mt-[52px]">
          <div className="relative w-[196px] h-[196px] ">
            {VALUES_DEFAULT?.mediaContent?.url && (
              <Image
                src={VALUES_DEFAULT.mediaContent.url}
                alt="image"
                placeholder="blur"
                blurDataURL={VALUES_DEFAULT.mediaContent.url}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </div>
          <div>
            <p className="font-semibold text-[20xp] leading-[22px] text-center text-black p-6">
              {VALUES_DEFAULT.title}
            </p>
          </div>
        </div>
        {data &&
          data?.map((item: Ivalues, index: number) => {
            return (
              <div key={index} className="border-b pb-3 last:border-none">
                <div className="container mx-auto px-4 md:px-[50px]">
                  <Link passHref href={`${ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${item.slug}`}>
                    <a>
                      <p className="font-semibold text-[20xp] leading-[22px] text-blue011 pt-4 pb-[10px]">
                        {item.title}
                      </p>
                    </a>
                  </Link>
                  <div className="flex w-full gap-3">
                    <div className="relative flex-1 aspect-[5/3]">
                      {item?.mediaContent?.url && (
                        <Link
                          passHref
                          href={`${ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${item.slug}`}
                        >
                          <Image
                            src={item.mediaContent.url}
                            alt="image"
                            placeholder="blur"
                            blurDataURL={item.mediaContent.urlBlur}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </Link>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="opacity-50 text-[14px]">{formatDate(item?.createdAt)}</p>
                      <p className="line-clamp-7 text-[14px] leading-[14px]">
                        {formatContent(item?.content)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="mt-[25px] flex ml-auto flex-1">
        <Seemore navigation={ROUTERS.SHARE} />
      </div>
    </section>
  );
}

export default memo(Values);
