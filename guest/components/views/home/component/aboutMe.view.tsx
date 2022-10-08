import { RESPONSIVE } from "components/views/home/config";
import { ROUTERS } from "constants/router.constant";
import { formatContent } from "utils/common";
import { formatDate } from "utils/common";
import Image from "next/image";
import React, { memo } from "react";
import Seemore from "components/button/seeMore";
import Skeleton from "components/skeleton";
import Slider from "react-multi-carousel";
import dynamic from "next/dynamic";

interface Iaboutme {
  ownerAvatar: any;
  reviewerName: string;
  content: string;
  reviewAt: string;
}

const ButtonLeft = () => (
  <div className="cursor-pointer absolute left-6 md:left-0 center mt-[-290px] md:mt-[-369px]">
    <ion-icon name="chevron-back-outline" style={{ color: "#777777", fontSize: 30 }}></ion-icon>
  </div>
);
const ButtonRight = () => (
  <div className="cursor-pointer absolute right-6 md:right-0 center mt-[-290px] md:mt-[-369px]">
    <ion-icon name="chevron-forward-outline" style={{ color: "#777777", fontSize: 30 }}></ion-icon>
  </div>
);

function ViewAboutMe({ data = [] }: any) {
  return (
    <section className="relative container pb-[30px] md:pb-[70px] mx-auto md:px-[50px]">
      <div className="flex justify-center items-center mt-6 md:mt-[45px] lg:mb-0 absolute w-full">
        <p className="text-[24px] lg:text-[48px] font-normal leading-[28.64px] lg:leading-[57.28px]">
          GÓC NHÌN VỀ TÔI
        </p>
      </div>
      <div>
        <Slider
          responsive={RESPONSIVE}
          showDots={true}
          renderDotsOutside={true}
          infinite={true}
          customLeftArrow={ButtonLeft()}
          customRightArrow={ButtonRight()}
          containerClass={"containerCarosel"}
          dotListClass={"dotlistCarosel"}
        >
          {data.map((item: Iaboutme, i: number) => {
            return (
              <div key={i} className="flex flex-col mt-[40px] h-[248px] px-[17px]">
                <div className="flex">
                  <div className="rounded-full overflow-hidden w-[46px]">
                    {item.ownerAvatar && (
                      <Image
                        src={item?.ownerAvatar?.url || ""}
                        layout="responsive"
                        alt="avatar"
                        placeholder="blur"
                        blurDataURL={item?.ownerAvatar?.urlBlur || ""}
                        width={46}
                        height={46}
                      />
                    )}
                  </div>
                  <div className="ml-[18px]">
                    <p className="font-semibold text-gray800 text-[20px] leading-[23.87px]">
                      {item.reviewerName}
                    </p>
                    <p className="font-semibold text-gray800 text-[20px] opacity-50 leading-[23.87px]">
                      {formatDate(item.reviewAt)}
                    </p>
                  </div>
                </div>
                <div className="mt-[18px]">
                  <p className="text-gray800 text-[18px] font-normal leading-[20px] line-clamp-7">
                    {formatContent(item.content)}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="mr-[15px] float-right hidden md:block">
          <Seemore navigation={ROUTERS.VIEW} />
        </div>
      </div>
    </section>
  );
}

export const DynamicAboutMe = dynamic(
  () => {
    return import("./aboutMe.view");
  },
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export default memo(ViewAboutMe);
