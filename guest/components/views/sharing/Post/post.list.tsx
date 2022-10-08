import "react-multi-carousel/lib/styles.css";
import { NEWS_RESPONSIVE } from "constants/course.constant";
import { ROUTERS } from "constants/router.constant";
import Carousel from "react-multi-carousel";
import Icons from "styles/images/icon";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import Skeleton from "components/skeleton";
import dynamic from "next/dynamic";
interface IpostList {
  title: string;
  mediaContent: any;
  url: any;
  id: number;
  slug: string;
}
function PostsList({ feature = [] }: any) {
  const renderNews = () => {
    return feature?.map((item: IpostList, index: number) => {
      return (
        <section
          key={index}
          className="flex flex-col mx-2 text-lg bg-cover md:px-2 not-italic cursor-pointer"
        >
          <div className="w-full relative h-[169px] cursor-pointer">
            <Link href={`${ROUTERS.GOTO_DETAIL_SHARING}/${item.id}-${item.slug}`}>
              {item?.mediaContent?.url && (
                <Image
                  placeholder="blur"
                  blurDataURL={item?.mediaContent?.urlBlur}
                  src={item?.mediaContent?.url}
                  layout="fill"
                  objectFit="cover"
                  alt="DXP"
                  objectPosition="center"
                />
              )}
            </Link>
          </div>
          <h1 className="text-[20px] w-full font-semibold leading-[25px] mt-[10px] line-clamp-4 overflow-hidden">
            {item.title}
          </h1>
        </section>
      );
    });
  };
  const buttonLeft = () => (
    <div className="w-[26.45px] h-[169px] top-0 cursor-pointer justify-center absolute left-0 bg-gray500 flex items-center ">
      <Image
        src={Icons.left}
        blurDataURL={Icons.right}
        width={21}
        height={35}
        alt="arrow feft"
        placeholder="blur"
      />
    </div>
  );
  const buttonRight = () => (
    <div className="w-[26.45px] h-[169px] cursor-pointer top-0 justify-center absolute right-0 bg-gray500 flex items-center">
      <Image
        src={Icons.right}
        blurDataURL={Icons.right}
        width={21}
        height={35}
        alt="arrow right"
        placeholder="blur"
      />
    </div>
  );

  return (
    <div>
      <div className="mt-[34px]">
        <Carousel
          responsive={NEWS_RESPONSIVE}
          customLeftArrow={buttonLeft()}
          customRightArrow={buttonRight()}
          partialVisible
          removeArrowOnDeviceType={["mobile", "tablet"]}
        >
          {renderNews()}
        </Carousel>
      </div>
    </div>
  );
}

export const DynamicPostsList = dynamic(
  () => {
    return import("../Post/post.list");
  },
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export default memo(PostsList);
