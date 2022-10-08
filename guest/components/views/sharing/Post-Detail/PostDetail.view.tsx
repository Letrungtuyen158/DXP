import "react-quill/dist/quill.snow.css";
import { formatDate, handleHashtag } from "utils/common";
import Icons from "styles/images/icon";
import Image from "next/image";
import LoadingDetail from "../loanding/loadingDetail";
import React, { memo } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

interface Idetail {
  id: number;
  title: string;
  content: string;
  createdAt: any;
  mediaContent: any;
  tag: string;
}
function PostViewDetail({ data }: { data: Idetail }) {
  if (!data) return <LoadingDetail />;
  return (
    <div className="not-italic md:mt-[10px] mt-[60px]">
      <div className="border-b mb-[38px] border-gray250 py-[8px] flex items-center md:hidden">
        <p className="ml-[17px] text-sm font-medium w-[45px]">Bài viết</p>
        <div className="px-[8px]">
          <Image src={Icons.doubleRight} alt="icon" width={10} height={10} />
        </div>
        <p className="text-sm font-medium line-clamp-1 flex-1">{data?.title}</p>
      </div>
      <div className="px-4">
        <div className="w-full aspect-w-9 aspect-h-5 relative flex justify-center ">
          <Image
            src={data?.mediaContent?.url}
            layout="fill"
            blurDataURL={data?.mediaContent?.urlBlur}
            objectFit="cover"
            alt="DXP"
            objectPosition="center"
          />
        </div>
        <article className=" md:bg-grayf0 md:px-5  py-[25px]">
          <h1 className="text-[24px] leading-[32px] font-bold py-[19px]">{data?.title}</h1>
          <p className="opacity-50 text-[18px] leading-[21px]">{formatDate(data?.createdAt)}</p>
          <div className="text-[20px] leading-[30px] font-normal mt-[10px]">
            <ReactQuill theme="snow" value={data?.content} readOnly className="hide-toolbar" />
          </div>
        </article>
        <div className="flex gap-x-2 mt-4">
          {data?.tag &&
            handleHashtag(data?.tag).map((items, index) => (
              <div
                key={index}
                className="bg-grayf0 border rounded-md  p-2 text-grayA_500 text-[14px] leading-[28px]"
              >
                #{items}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default memo(PostViewDetail);
