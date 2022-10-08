import { ToastError } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "services/api";
import MyEnhancedForm from "./update.form";

export default function UpdatePage() {
  const [data, setData] = useState({});
  const router = useRouter();
  const { courseId } = router.query;
  const id = Number(courseId);
  useEffect(() => {
    if (id) {
      getCourseById();
    }
  }, [router]);

  const getCourseById = async () => {
    try {
      const res: any = await Api.getCourseById(id);
      if (checkApiStatus(res)) {
        setData(res.data);
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
