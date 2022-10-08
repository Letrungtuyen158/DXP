import React, { memo } from "react";

const loadingFeatured_1 = () => {
  return (
    <div className="w-2/3 not-italic ">
      <div className="animate-pulse">
        <div className="cursor-pointer">
          <div className="w-full h-[391px] bg-gray200 relative flex justify-center "></div>
          <div className="mt-[10px] w-full bg-gray200">
            <a className="font-bold text-[24px] leading-[29px] bg-gray200 "></a>
          </div>
        </div>
        <p className="font-normal h-[50px] text-[18px] bg-gray200 leading-[21px]  mt-[5px]"></p>
        <p className="text-[20px] h-[200px] leading-[30px] bg-gray200 font-normal   mt-[5px]"></p>
      </div>
    </div>
  );
};

export default memo(loadingFeatured_1);
