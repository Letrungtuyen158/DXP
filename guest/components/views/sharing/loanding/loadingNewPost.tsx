import React, { memo } from "react";

const LoadingNewPost = () => {
  return (
    <>
      <div className="mb-[25px] animate-pulse bg-gray200  "></div>
      <div className="grid grid-cols-2 mt-[40px] gap-x-[50px] gap-y-[52px] not-italic animate-pulse  ">
        {[1, 2, 3, 4, 5, 6].map((_) => (
          <div key={_} className="grid grid-rows-2 cursor-pointer">
            <div className="w-full h-[150px] bg-gray200  relative flex justify-center "></div>

            <div className="px-[20px] bg-gray200  ">
              <p className="opacity-50 mt-[5px] bg-gray200 "></p>
              <h1 className="font-bold text-[20px] bg-gray200  leading-[24px] text-justify mt-[5px] line-clamp-4"></h1>
              <p className="text-[18px] bg-gray200 leading-[21px] font-normal mt-[5px] line-clamp-4 "></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(LoadingNewPost);
