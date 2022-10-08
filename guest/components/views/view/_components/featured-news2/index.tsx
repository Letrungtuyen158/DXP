import { ROUTERS } from "constants/router.constant";
import { formatDate } from "utils/common";
import Api from "services/api";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import Skeleton from "components/skeleton";
import dynamic from "next/dynamic";

function FeaturedNews2({ filter }: any) {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getNews(filter);
  }, [filter]);

  const getNews = async (filter: any) => {
    const result = await Api.getNews(filter);
    setData(result?.data);
  };
  if (!data?.data) return <div>Loading...</div>;
  if (data?.data?.length === 0) {
    return (
      <div className="text-xl inline-block animate-pulse py-1 rounded-lg mt-3">
        Không có dữ liệu
      </div>
    );
  }
  const renderSuggestion = () => {
    if (data)
      return data.data.map((news: { title: string; newsAt: string; id: number; slug: string }) => (
        <article key={news.id} className="md:mt-16 mt-7 md:mx-[30px]">
          <Link href={`${ROUTERS.VIEW_DETAIL}/${news.id}-${news.slug}`}>
            <a className="font-semibold text-xl text-gray800 line-clamp-2">{news.title}</a>
          </Link>
          <p className="opacity-40 text-lg">{formatDate(news.newsAt)}</p>
        </article>
      ));
  };
  return <>{renderSuggestion()}</>;
}

export const DynamicFeaturedNews2 = dynamic(
  () => {
    return import("./index");
  },
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export default memo(FeaturedNews2);
