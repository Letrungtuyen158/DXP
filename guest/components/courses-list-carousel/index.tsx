import { COURSE_LIST_FILTER, NEWS_RESPONSIVE } from "constants/course.constant";
import { ROUTERS } from "constants/router.constant";
import { fetcher } from "utils/common";
import Carousel from "react-multi-carousel";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/courses";
import Link from "next/link";
import React, { memo } from "react";
import useSWR from "swr";

function CoursesListCarousel() {
  const { data, error } = useSWR(
    `/api/courses?filter=${JSON.stringify(COURSE_LIST_FILTER)}`,
    fetcher
  );
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const renderCoursesList = () => {
    if (data)
      return data.data.map((course: { name: string; id: number }) => (
        <div key={course.id} className="mx-4">
          <section className="relative w-full sm:h-[310px] h-[200px]">
            <Image
              src={Images.course1}
              alt="DuongXuanPhi"
              layout="fill"
              objectPosition={"center"}
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute hidden -bottom-1/3 left-1/2 -translate-x-1/2 bg-gray200 sm:flex items-center justify-center rounded-md shadow-md md:w-1/2 md:py-8 py-10 md:px-0 px-12 ">
              <h2 className="sm:text-2xl text-lg font-bold border-y-2 border-solid border-black text-left py-5 xl:mx-8  mx-5 ">
                GET THE GOODS
              </h2>
            </div>
          </section>
          <div className="sm:mt-12">
            <Link href={`${ROUTERS.COURSE_DETAIL}/${course.id}`}>
              <a>
                <p className="font-semibold text-darkblue sm:pt-20 pt-3 sm:text-xl sm:leading-[25px] text-[15px] leading-[18px]">
                  {course.name}
                </p>
              </a>
            </Link>
          </div>
        </div>
      ));
  };
  const buttonLeft = () => (
    <div className="w-8 h-[310px] top-0 cursor-pointer justify-center rounded-l-xl absolute left-5 bg-black opacity-[0.25] flex items-center ">
      <Image src={Icons.left} width={15} height={35} alt="arrow feft" />
    </div>
  );
  const buttonRight = () => (
    <div className="w-8 h-[310px] cursor-pointer top-0 justify-center rounded-r-xl absolute right-5 bg-black opacity-[0.25] flex items-center">
      <Image src={Icons.right} width={15} height={35} alt="arrow right" />
    </div>
  );
  return (
    <>
      <Carousel
        responsive={NEWS_RESPONSIVE}
        swipeable
        customLeftArrow={buttonLeft()}
        customRightArrow={buttonRight()}
        showDots
        removeArrowOnDeviceType={["mobile", "tablet"]}
        dotListClass="dot-list-news"
        containerClass="container-news"
      >
        {renderCoursesList()}
      </Carousel>
    </>
  );
}

export default memo(CoursesListCarousel);
