import { ToastError } from "utils/toast";
import { useRouter } from "next/router";
import Api from "services/api";
import React, { useEffect, useState } from "react";
import UpdateUser from "./update.handle";

export default function Index() {
  const [data, setData] = useState();
  const router = useRouter();
  const id = Number(router.query.userId);
  useEffect(() => {
    getReviewById();
  }, [router]);
  const getReviewById = async () => {
    try {
      if (id) {
        const res: any = await Api.getUserById(id);
        setData(res?.data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  return <UpdateUser defaultData={data} />;
}
