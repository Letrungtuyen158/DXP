import React, { memo } from "react";

function ComponentTitle({ title, className }: { title: string; className?: string }) {
  return (
    <div className={`flex justify-between items-end md:gap-5 gap-2 ${className}`}>
      <h1 className="md:text-[40px] text-2xl font-semibold md:font-normal text-black300 md:text-black leading-none uppercase ">
        {title}
      </h1>
      <div className="flex-auto md:mb-2 mb-[3px] h-[1px] bg-graysearch"></div>
    </div>
  );
}

export default memo(ComponentTitle);
