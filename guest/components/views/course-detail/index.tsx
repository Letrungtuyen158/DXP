import { CourseInfo } from "components/views/course-detail/_components";
import { EditorDynamic } from "components/form/editor";
import { ReviewList } from "components";
import Banner from "./_components/banner";
import Commit from "./_components/commit";
import FormRegistration from "components/form/form-registration";
import Gallery from "components/photos/photos-course";
import React, { memo } from "react";
import Values from "./_components/description";

function CourseDetail({ data }: any) {
  if (!data) {
    return null;
  }
  const renderDetail = () => {
    if (data)
      return (
        <div className="bg-white md:px-[70px] md:py-[30px] md:rounded-[7px] p-[15px] sm:mt-0 mt-4">
          <div className="font-bold text-[24px] leading-[30px] text-bluetext">
            THÔNG TIN CHI TIẾT
          </div>
          <div className="w-full border-b my-4 sm:my-7 border-b-gray400" />
          <div>
            <EditorDynamic content={data.detail} className="quill-text18px" />
          </div>
        </div>
      );
  };

  const renderParticipant = () => {
    if (data)
      return (
        <div className="bg-white md:px-[70px] md:py-[30px] md:rounded-[7px] p-[15px] mt-4">
          <div className="font-bold text-[24px] leading-[30px] text-bluetext">
            ĐỐI TƯỢNG THAM GIA
          </div>
          <div className="w-full border-b my-4 sm:my-7 border-b-gray400" />
          <div>
            <EditorDynamic content={data.participants} className="quill-text18px" />
          </div>
        </div>
      );
  };

  return (
    <>
      <Banner data={data} />
      <div className="container xl:px-[94px] md:px-[50px] sm:px-5 mx-auto sm:pb-14">
        <Values data={data} />
        <div className="flex flex-col-reverse md:grid md:grid-cols-10 md:mt-16 md:gap-10">
          <div className="col-span-7">
            <div>{renderDetail()}</div>
            <div className="mt-[20px] sm:mt-[60px]">{renderParticipant()}</div>
          </div>
          <div className="col-span-3">
            <CourseInfo data={data?.courses && data?.courses[0]} />
          </div>
        </div>
        {data.commit && (
          <div className="mt-4 sm:mt-12">
            <Commit data={data.commit} />
          </div>
        )}
      </div>
      <FormRegistration />
      <div className="container xl:px-[94px] lg:px-[50px] px-4 sm:mx-auto sm:pb-14">
        <ReviewList />
      </div>
      <Gallery data={data?.mediaContents} showDots={false} />
    </>
  );
}

export default memo(CourseDetail);
