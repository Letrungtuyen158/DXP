import { COURSE_LIST_FILTER } from "constants/course.constant";
import { FILTER_ABOUTME } from "constants/home.constants";
import { InferGetStaticPropsType } from "next";
import { LATEST_VIEW_FILTER } from "constants/view.constant";
import { NEWS_POST_SHARINGS } from "constants/home.constants";
import { ToastError } from "utils";
import { checkApiStatus } from "utils/common";
import Api from "services/api";
import Home from "components/views/home";
import SEO from "components/seo";
import Script from "next/script";

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      <SEO />
      <Home {...props} />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  try {
    const [resultCoursesList, res, res1, res2, res3]: any = await Promise.all([
      Api.getCourseProgram(COURSE_LIST_FILTER),
      Api.getSharings(NEWS_POST_SHARINGS),
      Api.getAboutMe(FILTER_ABOUTME),
      Api.getFounders({
        filter: {
          order: "createdAt DESC",
          where: {
            status: "SHOW",
          },
        },
      }),
      Api.getNews(LATEST_VIEW_FILTER),
    ]);

    if (checkApiStatus(res && res1)) {
      return {
        props: {
          course: resultCoursesList?.data?.data || [],
          values: res?.data?.data || [],
          aboutMe: res1?.data?.data || [],
          founder: res2?.data?.data || [],
          news: res3?.data?.data || [],
        },
        revalidate: 10,
      };
    } else {
      return {
        props: {
          course: [],
          values: [],
          aboutMe: [],
          founder: [],
          news: [],
        },
      };
    }
  } catch (e: any) {
    ToastError(e);
    return {
      props: {
        course: [],
        values: [],
        aboutMe: [],
        founder: [],
        news: [],
      },
    };
  }
};
