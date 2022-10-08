import { LoadingFeatured_2 } from "../loanding";
import { ROUTERS } from "constants/index";
import { checkApiStatus, formatDate } from "utils/common";
import Api from "services/api";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface Ifeatured_1 {
  title: string;
  createdAt: string;
  id: number;
  slug: string;
}

function PostsHot({ filter }: any) {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getPost(filter);
  }, [filter]);
  const getPost = async (filter: any) => {
    const result: any = await Api.getSharings(filter);
    if (checkApiStatus(result)) {
      setData(result?.data?.data);
    }
  };

  return (
    <div className="md:mt-[72px] grid grid-cols-1 gap-[26px] md:w-[326px] md:px-6  ">
      <h1 className="font-normal text-[36px] leading-[43px]">BÀI NỔI BẬT</h1>
      {!data ? (
        <LoadingFeatured_2 />
      ) : data?.length === 0 ? (
        <div className="text-xl py-1 rounded-lg mt-3 animate-pulse">Không có dữ liệu</div>
      ) : (
        data?.map((item: Ifeatured_1, index: number) => (
          <div key={index}>
            <Link passHref href={`${ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${item.slug}`}>
              <article className="w-full grid gap-[13px] cursor-pointer ">
                <h2 className="text-[20px] font-semibold leading-[25px] text-gray800">
                  {item.title}
                </h2>
                <p className="text-[18px] leading-[21px] font-normal opacity-40">
                  {formatDate(item.createdAt)}
                </p>
              </article>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export const DynamicPostsHost = dynamic(
  () => {
    return import("./post.hot");
  },
  {
    ssr: false,
    loading: () => <LoadingFeatured_2 />,
  }
);

export default memo(PostsHot);
