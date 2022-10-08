import { ComponentTitle, DynamicNewsList } from "components";
import { CoursesList } from "../courses/_components";
import {
  LIST_NEWS_POST_SHARINGS,
  LIST_POST_HIGHLIGHT_1_SHARING,
  LIST_POST_HIGHLIGHT_2_SHARING,
} from "constants/sharings.constants";
import { convertToSlug } from "utils";
import { querySearch, querySearch2, querySearch3 } from "./utils";
import { uniqBy } from "ramda";
import Api from "services/api";
import FeaturedPosts from "./Featured-Posts";
import PostDXPMobi from "./Sharing-mobi/Post-dxp";
import Posts from "./Post";
import React, { memo, useEffect, useState } from "react";
let timeout: any;
let data: any = [];
function Sharing({ course, newPostSharing, newsPapers }: any) {
  const [filter, setFilter] = useState<any>(LIST_POST_HIGHLIGHT_1_SHARING);
  const [filter2, setFilter2] = useState<any>(LIST_NEWS_POST_SHARINGS);
  const [filter3, setFilter3] = useState<any>(LIST_POST_HIGHLIGHT_2_SHARING);
  const [listData, setListData] = useState<any>([]);

  useEffect(() => {
    getFeaturedNews2(filter2);
  }, [filter2]);
  const getFeaturedNews2 = async (filter2: any) => {
    const result: any = await Api.getSharings(filter2);
    setListData(result?.data?.data);
  };

  const currentFilter = filter2?.filter;
  const onSeeMore = () => {
    setFilter2({
      filter: {
        ...currentFilter,
        offset: currentFilter?.offset + 4,
        limit: currentFilter?.limit,
      },
    });
  };
  data = [...data, ...listData];
  const onSearch = (value: string) => {
    setListData([]);
    data = [...listData];
    const slug = convertToSlug(value);

    if (value?.length >= 2) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setFilter(querySearch(value, slug));
        setFilter2(querySearch2(value, slug));
        setFilter3(querySearch3(slug));
      }, 300);
    } else {
      setTimeout(() => {
        setFilter(LIST_POST_HIGHLIGHT_1_SHARING);
        setFilter2(LIST_NEWS_POST_SHARINGS);
        setFilter3(LIST_POST_HIGHLIGHT_2_SHARING);
      }, 300);
    }
  };
  const data2: any = uniqBy((x: any) => x?.id, data);
  const newData = [...data2];

  return (
    <>
      {/* Desktop */}
      <div className=" hidden md:block container mx-auto mt-[140px]  ">
        <section>
          <ComponentTitle title={"BÀI VIẾT"} className={"mt-[50px]"} />
        </section>

        <section className="my-14 px-5 gap-12  flex flex-cols-2 justify-between items-start mx-auto">
          <FeaturedPosts onSearch={onSearch} filter={filter3} />
          <Posts
            dataPostsNew={newData}
            onSeeMore={onSeeMore}
            filter={filter}
            newPostSharing={newPostSharing}
            firstId={newPostSharing[0]?.id}
          />
        </section>

        <section className="gap-30">
          <ComponentTitle title={"báo chí"} className={"mt-[50px]"} />
          <DynamicNewsList data={newsPapers} />
          <ComponentTitle title={"CÁC KHOÁ ĐÀO TẠO"} className={"mt-9 mb-12"} />
          <CoursesList data={course} hideTitle />
        </section>
      </div>
      {/* Mobi */}
      <div className="block md:hidden container mx-auto px-4">
        <section>
          <ComponentTitle title={"BÀI VIẾT"} className={"mt-[50px]"} />
        </section>
        <section>
          <PostDXPMobi />
          <Posts
            dataPostsNew={newData}
            onSeeMore={onSeeMore}
            filter={filter}
            newPostSharing={newPostSharing}
            firstId={newPostSharing[0]?.id}
            onSearch={onSearch}
          />
          <FeaturedPosts onSearch={onSearch} filter={filter3} />
        </section>
        {newsPapers?.length && (
          <section className="gap-30">
            <ComponentTitle title={"báo chí"} className={"mt-[50px]"} />
            <DynamicNewsList data={newsPapers} />
          </section>
        )}
      </div>
      <div className="md:hidden">
        <CoursesList data={course} />
      </div>
    </>
  );
}

export default memo(Sharing);
