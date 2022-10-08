import { ComponentTitle, SearchInput } from "components";
import { DynamicCourses } from "components/views/courses/_components/courses-list";
import { DynamicDetailContent } from "./content";
import { DynamicNewsList } from "components/news-list";
import { HIGHLIGHT2_VIEW_FILTER } from "constants/view.constant";
import { convertToSlug } from "utils";
import { queryUserSearch2 } from "../utils";
import FeaturedNews2 from "../_components/featured-news2";
import React, { memo, useState } from "react";
import TitleDetail from "components/layout/title_detail";
let timeout: any;
function NewsDetail({ news = [], course, detail }: any) {
  const [filter2, setFilter2] = useState<any>(HIGHLIGHT2_VIEW_FILTER);
  const onSearch = (value: any) => {
    const slug = convertToSlug(value);
    if (value?.length >= 2) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setFilter2(queryUserSearch2(value, slug));
      }, 500);
    } else {
      setFilter2(HIGHLIGHT2_VIEW_FILTER);
    }
  };
  return (
    <div className="md:bg-grayf6 mt-[-80px] pt-10">
      <div className="container md:mt-40 md:pt-5 md:mx-auto md:pb-14 pb-none pt-12 mx-auto px-4 mt-[70px]">
        <TitleDetail title={"Báo chí"} content={detail?.title} />
        <div className="md:grid md:grid-cols-3 md:gap-12 md:mb-11">
          <div className="col-span-2">
            <DynamicDetailContent data={detail} />
          </div>
          <div className="block md:hidden pt-8">
            <ComponentTitle title={"tin mới"} />
          </div>
          <div className="block md:hidden">
            <DynamicNewsList data={news} />
          </div>

          <nav className="mt-[-35px] md:mt-0">
            <SearchInput placeholder="Tìm kiếm bài viết" onSearch={onSearch} />
            <FeaturedNews2 filter={filter2} />
          </nav>
        </div>
        <div className="hidden md:block">
          <ComponentTitle title={"tin mới"} />
        </div>
        <div className="hidden md:block">
          <DynamicNewsList data={news} />
        </div>
        <ComponentTitle title={"các khoá đào tạo"} className={"mt-9 mb-12"} />
        <DynamicCourses data={course} hideTitle />
      </div>
    </div>
  );
}

export default memo(NewsDetail);
