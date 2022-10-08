import Image from "next/image";
import Images from "styles/images/news";
import Link from "next/link";
import React, { memo } from "react";

function DetailButton({ route }: { route: string }) {
  return (
    <Link href={`${route}`}>
      <a className="rounded-sm flex items-center justify-center relative h-[30px] w-[30px]">
        <Image src={Images.detailIcon} alt="icon" layout="fill" />
      </a>
    </Link>
  );
}

export default memo(DetailButton);
