import { ToastError } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "services/api";
import MyEnhancedForm from "./update.handle";

export default function UpdatePage() {
  const [data, setData] = useState({});
  const router = useRouter();
  const { postId } = router.query;
  const id = Number(postId);

  useEffect(() => {
    if (id) {
      getSharing();
    }
  }, [router]);

  const getSharing = async () => {
    try {
      const res: any = await Api.getPostSharingById(id);

      if (checkApiStatus(res)) {
        setData(res?.data);
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  return <MyEnhancedForm defaultData={data} />;
}
