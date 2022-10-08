import "react-multi-carousel/lib/styles.css";
import { FILTER_PHOTOS } from "constants/home.constants";
import { RESPONSIVE } from "./config";
import { ROUTERS } from "constants/router.constant";
import { fetcher } from "utils/common";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import React, { memo } from "react";
import Seemore from "components/button/seeMore";
import images from "styles/images/home";
import useSWR from "swr";

function ViewAboutMe({ className, showDots = true }: { className: string; showDots?: boolean }) {
  const buttonLeft = () => (
    <div className="h-full cursor-pointer justify-center absolute left-0 lg:left-[8px] flex items-center ">
      <div className="lg:bg-black opacity-[0.25] w-[31px] h-full rounded-l-xl" />
      <div className="translate-y-[20%] absolute">
        <Image
          src={images.icon_arrowLeft}
          width={21}
          height={35}
          alt="arrow feft"
          placeholder="blur"
          blurDataURL={images.icon_arrowLeft}
        />
      </div>
    </div>
  );
  const ButtonRight = () => (
    <div className="h-full cursor-pointer justify-center  absolute right-0 lg:right-[8px] flex items-center ">
      <div className="lg:bg-black opacity-[0.25] w-[31px] h-full rounded-r-xl" />
      <div className="translate-y-[20%] absolute">
        <Image
          src={images.icon_arrowRight}
          width={21}
          height={35}
          alt="arrow right"
          placeholder="blur"
          blurDataURL={images.icon_arrowRight}
        />
      </div>
    </div>
  );
  const { data, error } = useSWR(`/api/photos?filter=${JSON.stringify(FILTER_PHOTOS)}`, fetcher);
  if (error) return <div>Fail to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section className="pb-[100px]">
      <div className="flex justify-center mt-[36px] mb-[27px] lg:mt-[45px] lg:mb-[56px] ">
        <div className="hidden md:block border-gray400 border-b flex-1" />
        <p className="text-[24px] text-black300 md:text-[48px] leading-[28.64px] lg:leading[57.28px] px-2 uppercase">
          Gallery
        </p>
        <div className="hidden md:block border-gray400 border-b flex-1" />
      </div>
      <div className="rounded-xl relative">
        <Carousel
          responsive={RESPONSIVE}
          showDots={showDots}
          renderDotsOutside={true}
          infinite={true}
          customLeftArrow={buttonLeft()}
          customRightArrow={ButtonRight()}
          // Không fix cứng className ảnh hưởng tới chỗ khác
          dotListClass={className}
        >
          {data?.data?.map((item: any) => {
            return (
              <div
                key={item.id}
                className="md:mx-2 md:aspect-1 aspect-[3/2] relative md:rounded-xl overflow-hidden"
              >
                <Image
                  src={item.url}
                  layout="fill"
                  objectFit="cover"
                  alt="photos"
                  objectPosition="center"
                  placeholder="blur"
                  blurDataURL={item.urlBlur}
                />
              </div>
            );
          })}
        </Carousel>
        <div className="absolute bottom-[-55px] lg:mr-0 mr-[15px] right-0">
          <Seemore navigation={ROUTERS.GALLERY_PHOTOS} />
        </div>
      </div>
    </section>
  );
}

export default memo(ViewAboutMe);
