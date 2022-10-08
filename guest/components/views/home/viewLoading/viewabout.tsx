import React, { memo } from "react";

const LoadingViewabout = () => {
  return (
    <>
      <div className="flex justify-center mt-[36px] mb-[27px] lg:mt-[45px] lg:mb-[56px] animate-pulse">
        <p className="text-[24px] lg:text-[48px] font-normal leading-[28.64px] lg:leading-[57.28px]">
          GÓC NHÌN VỀ TÔI
        </p>
      </div>
      <div className="flex w-[300px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => {
          return (
            <div
              key={_}
              className="  bg-gray200 animate-pulse flex flex-col mt-[40px] mx-[40px] h-[248px]"
            >
              <div className="flex">
                <div className="w-[46px] bg-gray200 h-[46px] relative rounded-[50%] overflow-hidden"></div>
                <div className="ml-[18px]">
                  <p className="font-semibold text-white text-[20px] leading-[23.87px]"></p>
                  <p className="font-semibold text-white text-[20px] leading-[23.87px]"></p>
                </div>
              </div>
              <div className="h-[156px] mt-[18px]">
                <p className="text-white text-[18px] bg-gray200 font-normal leading-[20px] line-clamp-7"></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(LoadingViewabout);
