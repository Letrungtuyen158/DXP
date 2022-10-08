import Image from "next/image";
import React, { memo } from "react";

function Banner({ data }: any) {
  return (
    <div className="lg:mt-[100px] mt-[87px] w-full">
      <div className="py-[35px] bg-sky w-full">
        <p className="text-[24px] md:pb-8 leading-[28px] md:text-[36px] font-semibold text-white text-center md:leading-[42px]">
          KHOÁ HỌC {`'${data.name}'`}
        </p>
      </div>
      <div className="lg:mt-[-40px] flex justify-center md:container md:mx-auto xl:px-[94px] md:px-[50px] sm:px-5">
        <div className="sm:rounded-[10px] overflow-hidden aspect-[7/4] w-full relative">
          {data?.banner && (
            <Image
              src={data?.banner?.url}
              blurDataURL={data?.banner?.urlBlur}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="DXP"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
