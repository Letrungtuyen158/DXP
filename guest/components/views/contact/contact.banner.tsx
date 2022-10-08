import Image from "next/image";
import React, { memo } from "react";
import images from "styles/images/contact";

function BannerContact() {
  return (
    <div className="lg:pt-[170px] pt-[110px]">
      <div className="lg:flex justify-between pb-[115px] hidden gap-11">
        <div>
          <Image
            src={images.DXP1}
            width={333}
            height={526}
            alt="Duong Xuan Phi"
            placeholder="blur"
            blurDataURL={images.DXP1}
          />
        </div>
        <div className="relative top-[45px]">
          <Image
            src={images.DXP2}
            width={333}
            height={526}
            alt="Duong Xuan Phi"
            placeholder="blur"
            blurDataURL={images.DXP2}
          />
        </div>
        <div>
          <Image
            src={images.DXP3}
            width={333}
            height={526}
            alt="Duong Xuan Phi"
            placeholder="blur"
            blurDataURL={images.DXP3}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="lg:w-[458px] lg:h-[48px] w-[191px] h-[20px] relative">
          <Image
            src={images.email_DXP}
            layout="responsive"
            alt="duongxuanphi99@gmail.com"
            placeholder="blur"
            blurDataURL={images.email_DXP}
          />
        </div>
      </div>
      <div>
        <p className="text-[18px] lg:text-[24px] font-normal lg:font-semibold text-center lg:mt-[37px] mt-[16px] lg:leading-[28.64px] leading-[21.48px]">
          Bạn có muốn thảo luận về một vấn đề gì đó với tôi không? Bạn có thể gửi qua form bên dưới,
          mình sẽ trả lời sớm nhất có thể.
        </p>
      </div>
    </div>
  );
}

export default memo(BannerContact);
