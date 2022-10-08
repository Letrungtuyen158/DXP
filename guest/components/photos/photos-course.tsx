import "react-multi-carousel/lib/styles.css";
import { RESPONSIVE } from "./config";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import React, { memo } from "react";
import images from "styles/images/home";

function Photos({ data, showDots = true }: any) {
  if (!data) return null;
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

  return (
    <section className="pb-[100px]">
      <div className="flex justify-center mt-[36px] mb-[27px] lg:mt-[45px] lg:mb-[56px] ">
        <div className="lg:block hidden border-gray400 border-b flex-1" />
        <p className="lg:ml-0 ml-3 text-[24px] text-black300 lg:text-[48px] font-semibold leading-[28.64px] lg:leading[57.28px]">
          Hình ảnh khóa học
        </p>
        <div className="lg:block hidden border-gray400 border-b flex-1 mr-4 relative lg:top-0 top-[-5px]" />
      </div>
      <div className="rounded-xl relative">
        <Carousel
          responsive={RESPONSIVE}
          showDots={showDots}
          renderDotsOutside={true}
          infinite={true}
          customLeftArrow={buttonLeft()}
          customRightArrow={ButtonRight()}
        >
          {data?.map((item: any) => {
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
      </div>
    </section>
  );
}

export default memo(Photos);
