import { COURSE_LIST_FILTER } from "constants/course.constant";
import { LATEST_VIEW_FILTER, LIST_VIEW_FILTER } from "constants/view.constant";
import { ToastError } from "utils/toast";
import { checkApiStatus } from "utils/common";
import Api from "services/api";
import React from "react";
import SEO from "components/seo";
import ViewDesktop from "components/views/view";

function ViewPage(props: any) {
  return (
    <>
      <SEO />
      <ViewDesktop {...props} />
    </>
  );
}

export default ViewPage;

export async function getStaticProps() {
  try {
    const [res1, res2, res3]: any = await Promise.all([
      Api.getNews(LIST_VIEW_FILTER),
      Api.getCourseProgram(COURSE_LIST_FILTER),
      Api.getNews(LATEST_VIEW_FILTER),
    ]);

    if (checkApiStatus(res1)) {
      return {
        props: {
          news: res1?.data?.data || [],
          course: res2?.data?.data || [],
          newsPapers: res3?.data?.data || [],
        },
        revalidate: 10,
      };
    } else {
      return {
        props: {
          news: [],
          course: [],
          newsPapers: [],
        },
      };
    }
  } catch (error: any) {
    ToastError(error);
    return {
      props: {
        news: [],
        course: [],
        newsPapers: [],
      },
    };
  }
}
