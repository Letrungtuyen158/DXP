import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Images from "styles/images/courses";
import React, { memo } from "react";

function Banner({ data = [] }: { data?: any }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  if (data.length <= 0)
    return (
      <div className="mt-[100px] md:mt-0">
        <Image src={Images.banner} alt="DXP" layout="responsive" placeholder="blur" />
      </div>
    );
  return (
    <div className="relative  mt-[100px]">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable={false}
        focusOnSelect={false}
        infinite
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        {data.map((items: any, index: number) => (
          <div className="aspect-w-5 aspect-h-4 md:aspect-h-2 md:aspect-w-4" key={index}>
            <Image
              src={items?.url}
              alt="DuongXuanPhi"
              blurDataURL={items?.urlBlur}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              priority
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default memo(Banner);
