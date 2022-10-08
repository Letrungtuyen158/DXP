import { ComponentTitle } from "components";
import { ROUTERS } from "constants/router.constant";
import { formatContent, formatDate } from "utils/common";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import Skeleton from "components/skeleton";
import dynamic from "next/dynamic";

interface InewPost {
  title: string;
  content: string;
  sharingAt: string;
  mediaContent: any;
  url: any;
  id: number;
  slug: string;
}

function PostsNew({ onSeeMore, data, firstId }: { onSeeMore: any; data: any; firstId: number }) {
  const newData = data?.filter((item: any) => {
    return item.id !== firstId;
  });
  return (
    <>
      <div className="mb-[25px]">
        <ComponentTitle title={"Bài mới"} className={"mt-[50px]"} />
      </div>
      {newData?.length === 0 ? (
        <div className="text-xl inline-block animate-pulse py-1 rounded-lg mt-3">
          Không có dữ liệu
        </div>
      ) : (
        <div className="md:grid md:grid-cols-2 md:mt-[40px] md:gap-x-[50px] md:gap-y-[52px] not-italic  ">
          {newData?.map((items: InewPost, index: number) => {
            return (
              <div key={index}>
                <Link passHref href={`${ROUTERS.GOTO_DETAIL_SHARING}/${items.id}-${items.slug}`}>
                  <a className="block md:hidden font-bold text-[20px]  leading-[29px] text-justify mt-[5px] line-clamp-4">
                    {items.title}
                  </a>
                </Link>
                <section className="grid grid-cols-2 md:grid-cols-none border-b-2 md:border-hidden py-4">
                  <div className="w-full aspect-w-3 aspect-h-2 relative flex justify-center md:rounded-t-[10px]  overflow-hidden">
                    <Link
                      passHref
                      href={`${ROUTERS.GOTO_DETAIL_SHARING}/${items.id}-${items.slug}`}
                    >
                      <a>
                        <Image
                          src={items?.mediaContent?.url}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={items?.mediaContent?.urlBlur}
                          objectFit="cover"
                          alt="DXP"
                          objectPosition="center"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Desktop */}
                  <div className="px-[20px] hidden md:block">
                    <p className="opacity-50 mt-[5px]">{formatDate(items.sharingAt)}</p>
                    <Link
                      passHref
                      href={`${ROUTERS.GOTO_DETAIL_SHARING}/${items.id}-${items.slug}`}
                    >
                      <a className="font-bold text-[20px] leading-[29px] text-justify mt-[5px] line-clamp-4">
                        {items.title}
                      </a>
                    </Link>
                    <Link
                      passHref
                      href={`${ROUTERS.GOTO_DETAIL_SHARING}/${items.id}-${items.slug}`}
                    >
                      <p className="text-[18px] leading-[21px] font-normal mt-[5px] line-clamp-4 cursor-pointer">
                        {formatContent(items.content)}
                      </p>
                    </Link>
                  </div>
                  {/* Mobi */}
                  <div className="px-[20px] block md:hidden ">
                    <p className="opacity-50 mt-[5px]">{formatDate(items.sharingAt)}</p>
                    <p className="text-[18px] leading-[21px] font-normal mt-[5px] line-clamp-4 ">
                      {formatContent(items.content)}
                    </p>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      )}
      <div
        className={` py-4 md:py-none flex justify-end  text-[18px] leading-[21px] font-semibold text-bluebtn cursor-pointer `}
        onClick={onSeeMore}
      >
        Xem thêm
      </div>
    </>
  );
}

export const DynamicPostsNew = dynamic(
  () => {
    return import("./index");
  },
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export default memo(PostsNew);
