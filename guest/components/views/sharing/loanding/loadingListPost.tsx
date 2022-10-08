import React, { memo } from "react";

const LoadingListPost = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((_) => (
        <section
          key={_}
          className=" grid grid-rows-2 text-lg bg-cover px-2 not-italic w-full h-full animate-pulse cursor-pointer "
        >
          <div className=" w-full relative h-[169px] bg-gray200 "></div>
          <h1 className="text-[20px] bg-gray200  h-[100px] w-full font-semibold leading-[25px] mt-[10px] line-clamp-4 overflow-hidden"></h1>
        </section>
      ))}
    </>
  );
};

export default memo(LoadingListPost);
