import React, { memo } from "react";

const LoadingFeatured_2 = () => {
  return (
    <div className="flex-1 not-italic animate-pulse">
      <div className="mt-[72px] grid grid-cols-1 gap-[26px] w-[326px] px-6   ">
        <h1 className="font-normal text-[36px] leading-[43px] bg-gray200"></h1>
        {[1, 2, 3, 4, 5, 6].map((_) => (
          <div key={_}>
            <article className="w-[272px] grid gap-[13px] cursor-pointer bg-gray200 ">
              <h2 className="text-[20px] font-semibold leading-[25px] text-gray800 bg-gray200"></h2>
              <p className="text-[18px] leading-[21px] font-normal opacity-40 bg-gray200"></p>
            </article>
          </div>
        ))}
      </div>
      <section className="flex flex-wrap gap-2 justify-center mt-[31px] mr-[80px] bg-gray200"></section>
    </div>
  );
};

export default memo(LoadingFeatured_2);
