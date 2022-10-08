import { formatDate } from "utils/common";
import React, { memo } from "react";

function CourseInfo({ data }: any) {
  if (!data)
    return (
      <div className="bg-white rounded-[7px] p-6 md:my-0 mt-4">
        <div className="text-2xl leading-[35px] text-center font-semibold text-black">
          CHƯA CÓ LỊCH KHAI GIẢNG
        </div>
      </div>
    );
  const { fee, location, numberOfLessons, openingDate, schedule, teacher, time } = data;
  return (
    <div className="bg-white md:m-[15px] sm:m-0 md:rounded-[7px] md:my-0 mt-4 sm:p-6 p-[15px]">
      <div>
        <h1 className="text-[24px] leading-[35px] font-semibold text-black mb-4 sm:mb-8">
          LỊCH KHAI GIẢNG
        </h1>
        <ul>
          <li className="mt-3">
            <p className="text-lg text-gray800">
              <span className="text-lg text-gray800">Ngày khai giảng: </span>
              <p className="text-lg font-bold ml-1 inline">{formatDate(openingDate)}</p>
            </p>
          </li>
          <li className="mt-3">
            <p className="text-lg text-gray800">
              <span className="text-lg text-gray800"> Lịch học:</span>
              <p className="text-lg font-bold inline ml-1">{schedule}</p>
            </p>
          </li>
          <li className="mt-3 flex justify-start items-start gap-1">
            <p className="text-lg text-gray800">
              <span className="text-lg text-gray800"> Giờ học:</span>
              <p className="text-lg font-bold inline ml-1">{time}</p>
            </p>
          </li>
          <li className="mt-3 flex justify-start items-start gap-1">
            <p className="text-lg text-gray800">
              <span className="text-lg text-gray800"> Giảng viên:</span>
              <p className="text-lg font-bold inline ml-1">{teacher}</p>
            </p>
          </li>
          <li className="mt-3 flex justify-start items-start gap-1">
            <p className="text-lg text-gray800">
              <span className="text-lg text-gray800"> Số buổi học:</span>
              <p className="text-lg font-bold inline ml-1">{numberOfLessons}</p>
            </p>
          </li>
          <li className="mt-3 flex justify-start items-start gap-1">
            <p className="text-lg text-gray800">
              <span className="text-lg text-gray800"> Học phí:</span>
              <p className="text-lg font-bold inline ml-1">{fee}</p>
            </p>
          </li>
          <li className="mt-3 justify-start items-start gap-1">
            <p className="text-lg text-gray800">
              <span className="text-lg text-gray800"> Địa điểm:</span>
              <p className="text-lg font-bold inline ml-1">{location}</p>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(CourseInfo);
