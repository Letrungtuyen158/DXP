import React, { memo } from "react";

const LoadingComment = () => {
  return (
    <div className="not-italic mt-[54px] animate-pulse">
      <section>
        <h2 className="font-semibold text-[24px] leading-[29px] bg-gray200 "></h2>
        {[1, 2].map((_) => (
          <div key={_}>
            <h1 className="font-semibold text-[24px] leading-[29px] bg-gray200  mt-[19px]"></h1>
            <p className="opacity-50 bg-gray200 "></p>
            <p className="mt-4 bg-gray200 "></p>
          </div>
        ))}
      </section>

      <section className="mt-[50px] ">
        <h1 className="text-[24px] leading-[29px] bg-gray200 font-semibold"></h1>
      </section>
    </div>
  );
};

export default memo(LoadingComment);
