import { COURSE_LIST_FILTER } from "constants/course.constant";
import { GetStaticPaths } from "next";
import { LIST_VIEW_FILTER } from "constants/view.constant";
import { checkApiStatus } from "utils/common";
import Api from "services/api";
import NewDetail from "components/views/view/news-detail";
import React from "react";
import SEO from "components/seo";

function NewDetailPage(props: { detail: any }) {
  return (
    <div className="bg-grayf6">
      <SEO
        title={props?.detail?.title}
        description={props?.detail?.description}
        image={props?.detail?.mediaContent?.url}
      />
      <NewDetail {...props} />
    </div>
  );
}

export default NewDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res: any = await Api.getNews({
    filter: {
      fields: ["id"],
    },
  });
  const listCourses: any = res?.data?.data || [];
  const paths = listCourses?.map((post: any) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: true };
};

export async function getStaticProps({ params }: any) {
  const newId = params.id.split("-");

  try {
    const [res, res2, res3]: any = await Promise.all([
      Api.getNewsById(+newId[0]),
      Api.getNews(LIST_VIEW_FILTER),
      Api.getCourseProgram(COURSE_LIST_FILTER),
    ]);

    if (checkApiStatus(res)) {
      return {
        props: {
          detail: res?.data || {},
          news: res2.data?.data || [],
          course: res3?.data?.data || [],
        },
        revalidate: 10,
      };
    }
    return {
      props: {
        detail: {},
        news: [],
        course: [],
      },
    };
  } catch (error: any) {
    return {
      props: {
        detail: {},
        news: [],
        course: [],
      },
    };
  }
}
