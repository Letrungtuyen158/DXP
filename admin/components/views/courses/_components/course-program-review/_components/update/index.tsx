import { ToastError } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "services/api";
import MyEnhancedForm from "./update.form";

export default function UpdatePage() {
  const [data, setData] = useState<any>({});
  const [programList, setProgramList] = useState<any>({});
  const router = useRouter();
  const { reviewId } = router.query;
  const id = Number(reviewId);
  useEffect(() => {
    getCourseProgram();
    if (id) {
      getReviewById();
    }
  }, [router]);
  const getReviewById = async () => {
    try {
      const res: any = await Api.getReviewById(id);
      if (checkApiStatus(res)) {
        setData(res.data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const getCourseProgram = async () => {
    try {
      const res: any = await Api.getCourseProgram();
      if (checkApiStatus(res)) {
        setProgramList(res.data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const renderProgram = () => {
    if (programList)
      return programList?.data?.map((program: { name: string; id: number }) => {
        return (
          <option selected={program.id === id} value={program.id} key={program.id}>
            {program.name}
          </option>
        );
      });
  };

  return <MyEnhancedForm defaultData={data} renderProgram={renderProgram} />;
}
