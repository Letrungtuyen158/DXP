import Icon from "styles/images/icon";
import Image from "next/image";
import React, { memo } from "react";

function PlayVideoBtn() {
  return (
    <button className="absolute w-14 h-14 p-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-solid border-white">
      <Image src={Icon.playIcon} alt="icon" />
    </button>
  );
}

export default memo(PlayVideoBtn);
