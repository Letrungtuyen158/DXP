import "react-multi-carousel/lib/styles.css";
import { responsive } from "./config";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import React, { memo, useMemo } from "react";
import images from "styles/images/home";
const Modal = ({
  listImage,
  indexImage,
  toggle,
}: {
  listImage: any;
  indexImage: number;
  toggle: any;
}) => {
  const leftArrow = () => (
    <div className="hidden sm:w-[43px] cursor-pointer w-[36px] absolute md:flex justify-center items-center sm:-left-8 sm:translate-x-1/2 -left-5">
      <div className="relative">
        <Image src={images.icon_arrowLeft} width={21} height={35} alt="icon" />
      </div>
    </div>
  );
  const rightArrow = () => (
    <div className="hidden sm:w-[43px] cursor-pointer w-[36px] absolute md:flex justify-center items-center sm:-right-8 sm:-translate-x-1/2 -right-5">
      <div className="relative">
        <Image src={images.icon_arrowRight} width={21} height={35} alt="icon" />
      </div>
    </div>
  );

  const newListImage = useMemo(
    () => listImage.slice(indexImage).concat(listImage.slice(0, indexImage)),
    []
  );

  return (
    <div className="z-40 fixed w-full sm:w-[820px] left-1/2 top-1/2 -translate-x-1/2 inset-0 -translate-y-1/2">
      <div className="relative">
        {newListImage && (
          <Carousel
            responsive={responsive}
            ssr
            infinite
            customLeftArrow={leftArrow()}
            customRightArrow={rightArrow()}
          >
            {newListImage?.map((item: any, i: number) => {
              return (
                <div key={i} className={`flex w-full justify-center items-center`}>
                  <div className={`h-[300px] md:h-[500px] w-[750px] relative`}>
                    <Image
                      alt="image"
                      src={item?.url}
                      placeholder="blur"
                      blurDataURL={item?.urlBlur}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        )}
        <div
          className="absolute cursor-pointer top-[-100px] md:top-[-60px] h-10 w-10 right-[20px] md:right-[50px]"
          onClick={toggle}
        >
          <Image src={images.icon_delete} width={50} height={50} layout="fill" alt="icon delete" />
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
