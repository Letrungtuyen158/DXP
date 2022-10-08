import { Banner } from "components/views/courses/_components";
import { ComponentTitle, CoursesListCarousel, Gallery, ReviewList } from "components";
import { CourseInfo } from "../_components";
import { EditorDynamic } from "components/form/editor";
import { fetcher } from "utils/common";
import { useRouter } from "next/router";
import React, { memo } from "react";
import useSWR from "swr";

function CourseDetailMobile() {
  const router = useRouter();
  const id = router.query.id;
  const { data, error } = useSWR(`/api/course-detail/${id}`, fetcher);
  if (!data) return <div className="mt-96">Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const renderIntro = () => {
    if (data) {
      return (
        <p className="text-lg leading-[18px] text-justify pb-3">
          <EditorDynamic content={data.introduction} />
        </p>
      );
    }
  };
  const renderParticipant = () => {
    if (data)
      return (
        <p className="text-lg leading-[18px] text-justify pb-3">
          <EditorDynamic content={data.description} />
        </p>
      );
  };
  const renderContent = () => {
    if (data)
      return (
        <p className="text-lg leading-[18px] text-justify pb-3">
          <EditorDynamic content={data.content} />
        </p>
      );
  };
  return (
    <div>
      <Banner />
      <h1 className="text-orangetitle text-center md:text-4xl text-2xl font-semibold mb-6">
        {data.name}
      </h1>
      <div className="bg-white py-5 px-6 rounded-[7px]">
        <h1 className="text-2xl text-center font-bold text-bluetext mb-4">GIỚI THIỆU KHÓA HỌC</h1>
        {renderIntro()}
      </div>
      <CourseInfo data={data?.courses} />
      <div className="bg-white py-7 md:px-14 px-6 rounded-[7px] md:my-7 my-4">
        <h1 className="text-2xl md:text-left text-center font-bold text-bluetext mb-7">
          ĐỐI TƯỢNG THAM GIA
        </h1>
        {renderParticipant()}
      </div>
      <div className="bg-bluebg py-7 mb-10 md:px-14 px-6 rounded-[7px]">
        <h1 className="text-2xl md:text-left text-center font-bold text-bluetext mb-7">
          NỘI DUNG KHOÁ HỌC
        </h1>
        {renderContent()}
      </div>
      <ReviewList />
      <Gallery className={""} />
      <div className="mx-5 pb-11">
        <ComponentTitle title={"các khoá đào tạo"} className={"mt-7 mb-8"} />
        <CoursesListCarousel />
      </div>
    </div>
  );
}

export default memo(CourseDetailMobile);
