import { COURSE_LIST_FILTER } from "constants/course.constant";
import { FILTER_CAROUSEL_POST } from "constants/carousel.post";
import { GetStaticPaths } from "next";
import { LIST_POST_HIGHLIGHT_1_SHARING } from "constants/sharings.constants";
import { LIST_VIEW_FILTER } from "constants/view.constant";
import { checkApiStatus } from "utils/common";
import Api from "services/api";
import PostDetail from "components/views/sharing/Post-Detail";
import React from "react";
import SEO from "components/seo";
function SharingPostDetail(props: any) {
  return (
    <>
      <SEO
        title={props?.data?.title}
        image={props?.data?.mediaContent?.url}
        keywords={props?.data?.tag}
      />
      <div>
        <PostDetail {...props} />
      </div>
    </>
  );
}

export default SharingPostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res: any = await Api.getSharings({
    filter: {
      fields: ["id"],
    },
  });
  const listSharings: any = res?.data?.data || [];

  const paths = listSharings?.map((sharing: any) => ({
    params: { id: sharing.id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (props: any) => {
  const slug: any = props?.params?.id || 0;
  const newId = slug.split("-") || [];
  try {
    const [detailSharing, postList, resultNewsPapers, featured_1, resultCoursesList]: any =
      await Promise.all([
        Api.getDetailById(+newId[0]),
        Api.getSharings(FILTER_CAROUSEL_POST),
        Api.getNews(LIST_VIEW_FILTER),
        Api.getSharings(LIST_POST_HIGHLIGHT_1_SHARING),
        Api.getCourseProgram(COURSE_LIST_FILTER),
      ]);
    if (checkApiStatus(detailSharing && postList && resultNewsPapers)) {
      return {
        props: {
          data: detailSharing.data || [],
          postList: postList.data?.data || [],
          newsPapers: resultNewsPapers?.data?.data || [],
          featured_1: featured_1?.data?.data || [],
          resultCoursesList: resultCoursesList?.data?.data || [],
        },
        revalidate: 10,
      };
    } else {
      return {
        props: {
          data: null,
          postList: null,
          newsPapers: null,
          featured_1: null,
        },
      };
    }
  } catch (e) {
    return {
      props: {
        data: null,
        postList: null,
        newsPapers: null,
        featured_1: null,
      },
    };
  }
};
