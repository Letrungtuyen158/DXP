import React, { memo } from "react";

const LoadingDetail = () => {
  return (
    <div className="not-italic animate-pulse">
      <div className="w-full h-[391px] relative flex justify-center bg-gray200 "></div>
      <article className="bg-grayf0 px-5 ">
        <h1 className="text-[24px] leading-[32px] font-bold py-[19px]"></h1>
        <p className="opacity-50 text-[18px] bg-gray200 leading-[21px]"></p>
        <div className="text-[20px] bg-gray200 leading-[30px] font-normal mt-[10px]">
          <p className="mt-[10px] bg-gray200"></p>
        </div>
        <p className="ml-auto table text-[16px] bg-gray200 leading-[19px] font-normal py-[25px]"></p>
      </article>
    </div>
  );
};

export default memo(LoadingDetail);
