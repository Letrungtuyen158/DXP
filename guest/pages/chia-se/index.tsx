import { COURSE_LIST_FILTER } from "constants/course.constant";
import { LIST_NEWS_POST_SHARINGS } from "constants/sharings.constants";
import { LIST_VIEW_FILTER } from "constants/view.constant";
import { checkApiStatus } from "utils/common";
import Api from "services/api";
import Posts from "components/views/sharing";
import React from "react";
import SEO from "components/seo";

function Sharing(props: any) {
  return (
    <>
      <SEO />
      <Posts {...props} />
    </>
  );
}

export default Sharing;

export const getStaticProps = async () => {
  try {
    const [res, res1, res3]: any = await Promise.all([
      Api.getCourseProgram(COURSE_LIST_FILTER),
      Api.getSharings(LIST_NEWS_POST_SHARINGS),
      Api.getNews(LIST_VIEW_FILTER),
    ]);
    if (checkApiStatus(res)) {
      return {
        props: {
          course: res?.data?.data || [],
          newPostSharing: res1?.data?.data || [],
          newsPapers: res3?.data?.data || [],
        },
        revalidate: 10,
      };
    }
    return {
      props: {
        data: [],
        newPost: [],
        newsPapers: [],
      },
    };
  } catch (e: any) {
    return {
      props: {
        data: [],
        newPost: [],
        newsPapers: [],
      },
    };
  }
};
