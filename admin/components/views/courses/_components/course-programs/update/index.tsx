import { FILTER_SET_COURSE_ID } from "constants/course.constant";
import { ToastError } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "services/api";
import MyEnhancedForm from "./update.view";

function UpdateCourseProgram() {
  const [data, setData] = useState({});
  const router = useRouter();
  const { courseId } = router.query;
  const id = Number(courseId);
  useEffect(() => {
    if (id) {
      getCourseProgramById();
    }
  }, [router]);

  const getCourseProgramById = async () => {
    try {
      const res: any = await Api.getCourseProgramById(id, FILTER_SET_COURSE_ID);
      if (checkApiStatus(res)) {
        setData(res.data);
      } else {
        alert(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const handleCancel = () => {
    router.back();
  };

  return <MyEnhancedForm defaultData={data} handleCancel={handleCancel} />;
}

export default memo(UpdateCourseProgram);
