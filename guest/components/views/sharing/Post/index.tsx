import { DynamicPostsList } from "./post.list";
import { DynamicPostsNew } from "../new-posts";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus, formatContent, formatDate } from "utils/common";
import Api from "services/api";
import Icons from "styles/images/icon";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

interface Ipost {
  title: string;
  mediaContent: any;
  url: any;
  id: number;
  sharingAt: string;
  content: string;
  slug: string;
  onSearch: any;
}
function Posts({ filter, newPostSharing, onSeeMore, dataPostsNew, firstId, onSearch }: any) {
  const detail: Ipost = newPostSharing?.[0] || {};
  const [listData, setListData] = useState<any>([]);
  useEffect(() => {
    getData(filter);
  }, [filter]);
  const getData = async (filter: any) => {
    const result: any = await Api.getSharings(filter);
    checkApiStatus(result) && setListData(result?.data?.data);
  };

  return (
    <div className="md:w-2/3 not-italic ">
      <div>
        <div>
          <div className=" px-4 md:p-none  aspect-w-9 aspect-h-5 relative md:flex md:justify-center cursor-pointer ">
            <Link passHref href={`${ROUTERS.GOTO_DETAIL_SHARING}/${detail?.id}-${detail?.slug}`}>
              {detail?.mediaContent?.url && (
                <Image
                  src={detail?.mediaContent?.url}
                  layout="fill"
                  blurDataURL={detail?.mediaContent?.urlBlur}
                  objectFit="cover"
                  alt="DXP"
                  objectPosition="center"
                  placeholder="blur"
                  priority
                />
              )}
            </Link>
          </div>
          <Link passHref href={`${ROUTERS.GOTO_DETAIL_SHARING}/${detail?.id}-${detail?.slug}`}>
            <div className="mt-[10px] w-full cursor-pointer">
              <a className="font-bold text-[24px] leading-[29px]">{detail?.title}</a>
            </div>
          </Link>
        </div>

        <p className="font-normal text-[18px] leading-[21px] opacity-40 mt-[5px]">
          {formatDate(detail?.sharingAt)}
        </p>
        <Link passHref href={`${ROUTERS.GOTO_DETAIL_SHARING}/${detail?.id}-${detail?.slug}`}>
          <p className="text-[20px] leading-[30px] cursor-pointer font-normal text-gray800 mt-[5px] line-clamp-4">
            {formatContent(detail?.content)}
          </p>
        </Link>
      </div>

      <DynamicPostsList feature={listData} />

      <div className="md:hidden h-11 bg-gray200 rounded-lg flex justify-between px-4 mt-[30px] md:mt-[22px] md:my-6 ">
        <input
          type="text"
          placeholder="Tìm Kiếm Bài Viết"
          className=" bg-gray200 md:w-[327px] md:h-full text-graysearch focus:outline-none"
          onChange={(e: any) => {
            onSearch(e?.target?.value);
          }}
        />
        <span className="mt-[12px] mr-[10px]">
          <Image
            src={Icons.search}
            blurDataURL={Icons.search}
            width={22}
            height={22}
            alt="icon"
            placeholder="blur"
          />
        </span>
      </div>
      <DynamicPostsNew data={dataPostsNew} onSeeMore={onSeeMore} firstId={firstId} />
    </div>
  );
}

export default memo(Posts);
