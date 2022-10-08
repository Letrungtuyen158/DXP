import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/home";

function Index(props: { navigation: string }) {
  return (
    <Link href={props.navigation} passHref>
      <button className="flex">
        <p className="md:text-[18px] text-[14px] 2xl:ml-0 font-normal leading-[21.09px] flex-1 ml-[20px]">
          Xem thêm
        </p>
        <div className="top-[1px] ml-1 relative">
          <Image src={images.arrow_right} width={16} height={18} alt="arrow_right" />
        </div>
      </button>
    </Link>
  );
}

export default memo(Index);
