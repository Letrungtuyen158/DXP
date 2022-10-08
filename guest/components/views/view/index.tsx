import { ComponentTitle, DynamicNewsList, NewsList, SearchInput } from "components";
import { CoursesList } from "components/views/courses/_components";
import { FeaturedNews1, FeaturedNews2, ViewAboutMe } from "./_components";
import { HIGHLIGHT1_VIEW_FILTER } from "constants/view.constant";
import { HIGHLIGHT2_VIEW_FILTER } from "constants/view.constant";
import { convertToSlug } from "utils";
import { queryUserSearch1 } from "./utils";
import { queryUserSearch2 } from "./utils";
import { uniqBy } from "ramda";
import Api from "services/api";
import Icons from "styles/images/icon";
import Image from "next/image";
import NewsPapers from "components/views/home/component/newsPapers";
import React, { memo, useEffect, useState } from "react";

let timeout: any;
let data: any = [];
function NewsDesktop({ newsPapers, news, course }: any) {
  const [filter, setFilter] = useState<any>(HIGHLIGHT1_VIEW_FILTER);
  const [filter2, setFilter2] = useState<any>(HIGHLIGHT2_VIEW_FILTER);
  const [listData, setListData] = useState<any>([]);

  useEffect(() => {
    getFeaturedNews1(filter);
  }, [filter]);
  const getFeaturedNews1 = async (filter: any) => {
    const result: any = await Api.getNews(filter);
    setListData(result?.data?.data);
  };

  const currentFilter = filter?.filter;
  const onSeeMore = () => {
    setFilter({
      filter: {
        ...currentFilter,
        offset: currentFilter?.offset + 2,
        limit: currentFilter?.limit,
      },
    });
  };
  data = [...data, ...listData];
  const onSearch = (value: any) => {
    setListData([]);
    data = [...listData];
    const slug = convertToSlug(value);
    if (value?.length >= 2) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setFilter(queryUserSearch1(value, slug));
        setFilter2(queryUserSearch2(value, slug));
      }, 300);
    } else {
      setTimeout(() => {
        setFilter(HIGHLIGHT1_VIEW_FILTER);
        setFilter2(HIGHLIGHT2_VIEW_FILTER);
      }, 300);
    }
  };
  const data2: any = uniqBy((x: any) => x?.id, data);
  const newData = [...data2];

  return (
    <div className="md:bg-grayf6 mt-[-80px] pt-10">
      {/* Desktop */}
      <div className="container mt-[130px] pt-10 mx-auto pb-14 hidden md:block">
        <ComponentTitle title={"báo chí"} className={"mb-[53px] hidden md:flex"} />
        <NewsPapers hidden={true} data={newsPapers} />
        <ComponentTitle title={"tin mới"} className={"mt-[70px]"} />
        <DynamicNewsList data={news} />
        <ComponentTitle title={"Tin nổi bật"} />
        <div className="grid grid-cols-3 mt-16 gap-11">
          <div className="col-span-2">
            <FeaturedNews1 onSeemore={onSeeMore} data={newData} />
          </div>
          <nav>
            <SearchInput placeholder="Tìm kiếm bài viết" onSearch={onSearch} />
            <FeaturedNews2 filter={filter2} />
          </nav>
        </div>
        <ViewAboutMe />
      </div>
      <div className="hidden md:block">
        <CoursesList data={course} />
      </div>
      {/* Mobi */}
      <div className="container mx-auto px-4 pt-[140px] block md:hidden bg-grayf6 pb-10">
        <NewsPapers hidden={true} data={newsPapers} />
        <ComponentTitle title={"Tin mới"} className={"mb-[20px]"} />
        <NewsList data={news} />
        <ComponentTitle title={"Tin nổi bật"} className={"mb-[20px]"} />
        <FeaturedNews1 onSeemore={onSeeMore} data={newData} />
        <div className="mt-5 md:hidden h-11 bg-gray200 rounded-lg flex justify-between px-4 md:mt-[22px] md:my-6">
          <input
            type="text"
            placeholder="Tìm Kiếm Bài Viết"
            className="bg-gray200 md:w-[327px] md:h-full text-graysearch focus:outline-none"
          />
          <span className="mt-[12px] mr-[10px]">
            <Image src={Icons.search} width={22} height={22} alt="icon" />
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-[30px] block md:hidden bg-grayf6">
        <ViewAboutMe />
      </div>
      <div className="md:hidden">
        <CoursesList data={course} />
      </div>
    </div>
  );
}

export default memo(NewsDesktop);
