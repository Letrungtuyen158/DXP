import { DynamicPostsHost } from "./post.hot";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/sharing";
import React, { memo } from "react";
import ReactPlayer from "react-player/lazy";

function FeaturedPosts({ onSearch, filter }: any) {
  return (
    <div className="flex-1 not-italic">
      <div className="w-[326px] hidden md:block">
        <div>
          <Image src={Images.DXP01} layout="responsive" placeholder="blur" alt="avtDPX" priority />
        </div>
        <p className="font-semibold leading-[28px] text-[20px] text-center mt-[17px] ">
          Một kẻ Dại Khờ luôn theo đuổi ước mơ tới cùng và mong muốn truyền cảm hứng sống cho tất cả
          mọi người!
        </p>
        <div className="h-11 bg-gray200 rounded-lg flex justify-between px-4 mt-[22px] my-6">
          <input
            type="text"
            placeholder="Tìm Kiếm Bài Viết"
            className=" bg-gray200 w-[327px] h-full text-graysearch focus:outline-none"
            onChange={(e: any) => onSearch(e?.target?.value)}
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
      </div>
      <div className="h-11 bg-gray200 rounded-lg flex justify-between px-4 mt-[22px] my-6 md:hidden">
        <input
          type="text"
          placeholder="Tìm Kiếm Bài Viết"
          className=" bg-gray200 w-[327px] h-full text-graysearch focus:outline-none"
          onChange={(e: any) => onSearch(e?.target?.value)}
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
      <DynamicPostsHost filter={filter} />
      <div className="md:w-[326px] md:mt-[91px] pt-12">
        <div className="flex relative">
          <h1 className="text-[24px] laeding-[29px] font-semibold">Video</h1>
          <div className="border-b absolute left-[80px] bottom-[10px] border-graysearch md:w-[245px] flex-1"></div>
        </div>
        <div className="mt-[32px]">
          <div className="px-4">
            <ReactPlayer
              width="325px"
              height="181px"
              light={true}
              previewTabIndex={100}
              controls
              url="https://www.youtube.com/embed/pFNegTTT3Wc&list=PLkOi9g_a2p2ZryypGZiYdfq_Ilfhbp1V6"
            />
            <h1 className="text-[18px] leading-[23px] font-semibold md:px-3 mt-[10px]">
              Một ngày lênh đênh trên biển cách đất liền hơn 1000km
            </h1>
            <section className="flex flex-wrap gap-2 justify-center mt-[31px] md:mr-[80px] md:w-[305px]">
              <button className="border w-[95px] text-center text-[18px] leading-[21px] font-normal border-gray300 rounded-md h-[34px] ">
                Kinh tế
              </button>
              <button className="border border-gray300 w-[95px] text-center text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
                Xã hội
              </button>
              <button className="border w-[95px] border-gray300 text-center text-[18px] leading-[21px] font-normal h-[34px] rounded-md ">
                Giáo dục
              </button>
              <button className="border w-[95px] border-gray300 text-center  text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
                Tâm lý
              </button>
              <button className="border w-[95px] border-gray300 text-center  text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
                Cuộc sống
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FeaturedPosts);
