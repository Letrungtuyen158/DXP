import { COURSE_LIST_BANNER, COURSE_LIST_FILTER } from "constants/course.constant";
import { FILTER_CAROUSEL_POST } from "constants/carousel.post";
import { LIST_VIEW_FILTER } from "constants/view.constant";
import { ToastError } from "utils/toast";
import { checkApiStatus } from "utils/common";
import Api from "services/api";
import Courses from "components/views/courses";
import React from "react";
import SEO from "components/seo";
function CoursesPage(props: any) {
  return (
    <>
      <SEO />
      <Courses {...props} />
    </>
  );
}
export default CoursesPage;
export async function getStaticProps() {
  try {
    const [resultCoursesList, resultPosts, resultNewsPapers, res1]: any = await Promise.all([
      Api.getCourseProgram(COURSE_LIST_FILTER),
      Api.getSharings(FILTER_CAROUSEL_POST),
      Api.getNews(LIST_VIEW_FILTER),
      Api.getCourseBanner(COURSE_LIST_BANNER),
    ]);
    if (checkApiStatus(resultCoursesList && resultPosts && resultNewsPapers)) {
      return {
        props: {
          course: resultCoursesList?.data?.data || [],
          posts: resultPosts?.data?.data || [],
          newsPapers: resultNewsPapers?.data?.data || [],
          banner: res1?.data?.data || [],
        },
        revalidate: 10,
      };
    } else {
      return {
        props: {
          course: [],
          posts: [],
          newsPapers: [],
          banner: [],
        },
      }
    }
  } catch (error: any) {
    ToastError(error);
    return {
      props: {
        course: [],
        posts: [],
        newsPapers: [],
        banner: [],
      },
    }
  }
}
