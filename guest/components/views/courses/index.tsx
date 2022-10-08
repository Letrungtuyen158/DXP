import { Banner, CoursesList, DynamicPostsList, FormRegistration } from "./_components";
import { ComponentTitle, DynamicNewsList, DynamicReviewList } from "components";
import React, { memo } from "react";

function Courses({ course, posts, newsPapers, banner }: any) {
  return (
    <div className="pb-[60px] md:bg-grayf6 md:px-none  mt-[-13px] md:mt-0">
      <Banner data={banner} />
      <div className="font-semibold container mx-auto rounded-b-[10px] overflow-hidden">
        <h1 className="sm:mb-24 mb-9 mt-7 md:text-5xl text-2xl text-center">CÁC KHOÁ ĐÀO TẠO</h1>
        <CoursesList data={course} hideTitle />
      </div>
      <div className="px-4 md:px-none">
        <FormRegistration />
      </div>
      <div className="font-semibold  container px-4 md:mx-auto md:bg-grayf6">
        <div className="col-span-2 ">
          <DynamicReviewList />
        </div>
        <DynamicPostsList data={posts} />
        <ComponentTitle title={"báo chí"} className={"mt-[50px]"} />
        <DynamicNewsList data={newsPapers} />
      </div>
    </div>
  );
}

export default memo(Courses);
