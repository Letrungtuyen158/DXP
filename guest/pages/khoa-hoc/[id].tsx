import { GetStaticPaths } from "next";
import { checkApiStatus } from "utils/common";
import Api from "services/api";
import CourseDetail from "components/views/course-detail";
import React from "react";
import SEO from "components/seo";
function CourseDetailPage(props: { data: any }) {
  return (
    <div className="bg-grayf6">
      <SEO description={props?.data?.description} title={props?.data?.name} />
      <CourseDetail data={props?.data} />
    </div>
  );
}

export default CourseDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res: any = await Api.getCourseProgram({
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
    const res: any = await Api.getCourseProgramById(+newId[0], {
      filter: {
        include: [
          { relation: "banner" },
          {
            relation: "mediaContents",
          },
          {
            relation: "courses",
            scope: {
              where: {
                status: "SHOW",
              },
            },
          },
        ],
      },
    });
    if (checkApiStatus(res)) {
      return { props: { data: res.data }, revalidate: 10 };
    }
    return {
      props: {
        data: {},
      },
    };
  } catch (error: any) {
    return {
      props: {
        data: {},
      },
    };
  }
}
