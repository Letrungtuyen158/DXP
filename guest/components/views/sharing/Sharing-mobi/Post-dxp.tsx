import Image from "next/image";
import Images from "styles/images/sharing";
import React from "react";
const PostDXPMobi = () => {
  return (
    <div>
      <div className=" pt-[50px] px-[60px]">
        <Image
          src={Images.DXP01}
          placeholder="blur"
          alt="avtDPX"
          layout="responsive"
          width={188}
          height={188}
        />
      </div>
      <p className="font-semibold leading-[18px] text-[18px] text-center mt-[17px] pb-[20px] ">
        Một kẻ Dại Khờ luôn theo đuổi ước mơ tới cùng và mong muốn truyền cảm hứng sống cho tất cả
        mọi người!
      </p>
    </div>
  );
};

export default PostDXPMobi;
