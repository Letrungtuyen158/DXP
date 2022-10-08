import "react-quill/dist/quill.snow.css";
import { ROUTERS } from "constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import Skeleton from "components/skeleton";
import dynamic from "next/dynamic";

function CoursesList({ data = [], hideTitle }: { data: any; hideTitle?: boolean }) {
  return (
    <div className="container mx-auto md:pb-[108px] bg-grayf6 block">
      {!hideTitle && (
        <p className="text-center md:text-left py-7 md:py-[20px] md:my-[63px] text-[24px] md:text-[48px]">
          CÁC KHOÁ ĐÀO TẠO
        </p>
      )}
      <div className="grid grid-cols-1 md:gap-12 gap-8">
        {data?.map((course: any) => {
          return (
            <div
              key={course.id}
              className="flex flex-col md:flex-row overflow-hidden rounded-[7px] bg-white md:px-6 md:py-9"
            >
              <section className="relative aspect-[7/4] w-full md:w-[55%]">
                {course?.banner && (
                  <Image
                    src={course?.banner?.url}
                    alt="DuongXuanPhi"
                    layout="fill"
                    placeholder="blur"
                    objectFit="cover"
                    objectPosition="center"
                    blurDataURL={course?.banner?.urlBlur}
                  />
                )}
              </section>
              <div className="block md:hidden">
                <div className="flex-1 relative px-[15px]">
                  <div>
                    <p className="mt-4 mb-2 font-normal leading-[28px] text-[24px]">Khoá học</p>
                    <p className="font-semibold text-darkblue leading-[29px] text-[24px] pt-1">
                      {course.name}
                    </p>
                    <div className="pt-3 ">
                      <p>{course.description}</p>
                    </div>
                    <div className="mt-[20px] flex w-full justify-center mb-[29px]">
                      <Link href={`${ROUTERS.COURSE_DETAIL}/${course.id}-${course.slug}`} passHref>
                        <button className="w-[144px] bg-sky rounded-md h-[40px] text-[18px] text-white ">
                          Xem chi tiết
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:block hidden bg-white flex-1 relative">
                <div className="h-full flex flex-col mx-[25px]">
                  <p className="font-normal md:hidden sm:text-[26px] 2xl:text-[36px] leading-[35px] sm:mt-[10px] 2xl:mt-[30px] 2xl:mb-[18px]">
                    Khoá học
                  </p>
                  <p className="font-semibold sm:mb-[3px] 2xl:mb-[18px] text-darkblue sm:leading-[30px] sm:text-[23px] 2xl:text-[36px] 2xl:leading-[43px] line-clamp-2 pt-1">
                    {course.name}
                  </p>
                  <div className="flex-1 text-xl font-normal">{course.description}</div>
                  <div>
                    <Link href={`${ROUTERS.COURSE_DETAIL}/${course.id}-${course.slug}`} passHref>
                      <button className=" 2xl:w-[144px] sm:w-[130px] sm:h-[35px] 2xl:h-[40px] rounded-[5px] bg-sky text-[18px] sm:bottom-[20px] 2xl:bottom-[30px] text-white active:opacity-50 hover:animate-pulse">
                        Xem chi tiết
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const DynamicCourses = dynamic(
  () => {
    return import("../courses-list");
  },
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export default memo(CoursesList);
