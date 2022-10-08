import Icon from "styles/images/icon";
import Image from "next/image";
import React, { memo } from "react";

function TabHeader({ name }: { name: string }) {
  return (
    <div className="flex text-[14px] md:text-[24px] items-center justify-start md:gap-3 gap-2">
      <nav>Trang chủ</nav>
      <div className="md:w-3.5 md:h-3.5 w-2 h-2 relative">
        <Image src={Icon.doubleRightIcon} alt="icon" layout="fill" />
      </div>
      <nav>{name}</nav>
    </div>
  );
}

export default memo(TabHeader);
