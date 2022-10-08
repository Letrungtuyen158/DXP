import React, { memo } from "react";

function Values() {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <section className="mt-[67px] items-center flex flex-col animate-pulse">
      <div>
        <p className="text-[48px] leading-[57.28px] mb-[51px]">GIÁ TRỊ TỐT ĐẸP</p>
      </div>
      <div className="grid grid-cols-3 gap-[15px] xl:gap-[50px] 2xl:gap-[70px]">
        {array.map((item: number) => {
          return (
            <div key={item}>
              <div className="aspect-w-3 w-[300px] h-[250px] aspect-h-2 relative flex items-center justify-center overflow-hidden rounded-t-xl bg-gray200"></div>
            </div>
          );
        })}
      </div>
      <div className="mt-[25px] flex ml-auto bg-gray200 flex-1"></div>
    </section>
  );
}
export default memo(Values);
