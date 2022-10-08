import { EditorDynamic } from "components/form/editor";
import { formatDate } from "utils/common";
import Image from "next/image";
import React, { memo } from "react";
import dynamic from "next/dynamic";

function DetailContent({ data }: any) {
  if (!data?.title) return null;
  const { url, urlBlur, width, height } = data.mediaContent || {};
  const listUrl = data.url.split(",");
  const newListUrl = listUrl.filter((url: string) => {
    return url.trim().length !== 0;
  });
  return (
    <>
      <div className="flex justify-center pb-4">
        <Image
          src={url}
          blurDataURL={urlBlur}
          alt="DXP"
          width={width}
          height={height}
          placeholder="blur"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <article>
        {/* desktop */}
        <p className=" flex md:hidden gap-2 md:gap-0 mt-4 md:mt-0 ">
          <p className="md:text-[18px] md:leading-[21px] text-[14px] leading-[17px]  font-bold">
            {data.newspaper}
          </p>
          <p className="font-normal opacity-40 md:ml-2 text-[14px] leading-[17px]">
            {formatDate(data.newsAt)}
          </p>
        </p>
        {/* desktop */}

        <h1 className=" md:font-bold font-semibold  md:leading-[30px] text-justify md:text-[20px] text-[18px] leading-[24px] mt-2 md:mt-0  md:my-5">
          {data?.title}
        </h1>
        <p className="md:text-xl md:leading-[30px]  md:border-none md:mb-0 md:pb-none text-[18px] leading-[24px] ">
          <EditorDynamic content={data?.content} />
        </p>

        <p className="md:text-[20px] md:leading-[24px] font-bold text-right md:my-3 text-[18px] leading-[21px]  ">
          {data.author}
        </p>

        {/* Mobi */}
        <p className=" hidden md:flex gap-2 md:gap-0 mt-4 md:mt-0  ">
          <p className="md:text-[18px] md:leading-[21px] text-[14px] leading-[17px]  font-bold">
            {data.newspaper}
          </p>

          <p className="font-normal opacity-40 md:ml-2 text-[14px] md:text-[20px] md:leading-[23px] leading-[17px]">
            {formatDate(data.newsAt)}
          </p>
        </p>
        {/* Mobi */}
        <div className=" flex-none md:flex md:justify-between md:items-start md:gap-3 md:mt-5">
          <p className="pt-3 text-[20xp] leading-[24px] font-semibold pb-4 md:pb-none">Link báo:</p>
          <div className="px-5 py-4 bg-gray200 rounded-lg md:flex-1 md:text-xl   overflow-hidden relative top-2">
            {newListUrl?.map((url: string, i: number) => {
              return (
                <div key={i} className="overflow-hidden">
                  <a target={"_blank"} href={url} rel="noreferrer">
                    {url}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}

function Skeleton() {
  return (
    <>
      <div className="flex justify-center animate-pulse"></div>
      <article className="animate-pulse">
        <h1 className="font-bold md:text-2xl leading-[30px] text-justify  md:my-5"></h1>
        <p className="md:text-xl leading-[30px]  md:border-none md:mb-0 md:pb-none border-b-2 mb-8 pb-4"></p>
        <p className="text-xl font-bold text-right md:my-3 hidden md:block"></p>
        <p className="md:text-xl font-bold hidden md:block">
          <span className="font-normal opacity-40 ml-2"></span>
        </p>
        <div className=" hidden  md:flex md:justify-between md:items-start md:gap-3 md:mt-5">
          <p className="pt-3 text-xl font-semibold">Link báo:</p>
          <p className="px-5 py-4 bg-gray200 rounded-lg md:flex-1 md:text-xl overflow-hidden "></p>
        </div>
      </article>
    </>
  );
}

export const DynamicDetailContent = dynamic(() => import("../content"), {
  ssr: false,
  loading: () => {
    return <Skeleton />;
  },
});

export default memo(DetailContent);
