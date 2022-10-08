import { formatContentView } from "utils/common";
import Icons from "styles/images/icon";
import Image from "next/image";
import React from "react";
interface Ititle {
  title: string;
  content: string;
  limit?: number;
}
const TitleDetail = ({ title = "", content = "", limit = 135 }: Ititle) => {
  return (
    <div className="flex md:justify-start items-center gap-3 md:mb-10 mb-6 md:pb-none border-b-2 pb-2">
      <p className="2xl:text-[24px] xl:text-[20px] lg:text-[14px] min-w-[70px] md:max-w-none 2xl:min-w-[80px]">
        {title}
      </p>
      <Image src={Icons.doubleRight} alt="icon" />
      <p className="2xl:text-[24px] xl:text-[20px] lg:text-[14px] leading-[29px]  line-clamp-1">
        {formatContentView(content, limit)}
      </p>
    </div>
  );
};

export default TitleDetail;
