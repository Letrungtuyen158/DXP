import { ComponentTitle, NewsList } from "components";
import { CoursesList, PostsList } from "components/views/courses/_components";
import { LIST_POST_HIGHLIGHT_2_SHARING } from "constants/sharings.constants";
import { convertToSlug } from "utils";
import { querySearch3 } from "../utils";
import Comment from "./comment/post-comment";
import FeaturedPosts from "../Featured-Posts";
import PostDetailView from "./PostDetail.view";
import React, { memo, useState } from "react";
import TitleDetail from "components/layout/title_detail";

let timeout: any;
function PostDetail({ data, postList, newsPapers, featured_1, resultCoursesList }: any) {
  const [filter, setFilter] = useState<any>(LIST_POST_HIGHLIGHT_2_SHARING);
  const renderTitle = () => {
    if (data) return <TitleDetail title={"Bài viết"} content={data?.title} />;
  };

  const onSearch = (value: string) => {
    const slug = convertToSlug(value);

    if (value?.length >= 2) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setFilter(querySearch3(slug));
      }, 300);
    } else {
      setTimeout(() => {
        setFilter(LIST_POST_HIGHLIGHT_2_SHARING);
      }, 300);
    }
  };
  return (
    <>
      {/* Desktop */}
      <div className="container mx-auto mt-[140px] hidden md:block ">
        {renderTitle()}
        <section className="my-14 px-5  gap-12  flex flex-cols-2 justify-between items-start mx-auto">
          <FeaturedPosts onSearch={onSearch} filter={filter} />
          <div className="not-italic w-2/3  ">
            <PostDetailView data={data} />
            <Comment />
          </div>
        </section>

        <section className=" gap-30">
          <PostsList data={featured_1} />
          <ComponentTitle title={"BÁO CHÍ"} className={"mt-[50px]"} />
          <NewsList data={newsPapers} />
          <CoursesList data={resultCoursesList} />
        </section>
      </div>
      {/* Mobi */}
      <div className="container mx-auto md:hidden block">
        <PostDetailView data={data} />
        <div className="px-4">
          <Comment />
          <div className="mb-6">
            <PostsList data={postList} showDots={false} />
          </div>
          <FeaturedPosts onSearch={onSearch} filter={filter} />
        </div>
      </div>
      <section className="gap-30 md:hidden block">
        <div className="px-4">
          <ComponentTitle title={"báo chí"} className={"mt-[50px]"} />
          <NewsList data={newsPapers} />
        </div>

        <CoursesList data={resultCoursesList} />
      </section>
    </>
  );
}
export default memo(PostDetail);
