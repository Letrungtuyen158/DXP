import { ToastError } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { useEffect, useState } from "react";
import Api from "services/api";
import MyEnhancedForm from "./create.form";

export default function UpdatePage() {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    getCourseProgram();
  }, []);
  const renderProgram = () => {
    if (data)
      return data?.data?.map((program: { name: string; id: number }) => {
        return (
          <option value={program.id} key={program.id}>
            {program.name}
          </option>
        );
      });
  };
  const getCourseProgram = async () => {
    try {
      const res: any = await Api.getCourseProgram();
      if (checkApiStatus(res)) {
        setData(res.data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  return <MyEnhancedForm renderProgram={renderProgram} />;
}
