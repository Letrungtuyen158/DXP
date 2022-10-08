import { ToastError } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { useRouter } from "next/router";
import Api from "services/api";
import EnhanceForm from "./handler";
import React, { memo, useEffect, useState } from "react";

function ViewaboutmeUpdate() {
  const [data, setData] = useState();
  const router = useRouter();
  const id = Number(router.query.reviewId);

  useEffect(() => {
    if (id) getReviewById(id);
  }, [router]);
  const getReviewById = async (id: number) => {
    try {
      const res: any = await Api.getReviewById(id);
      if (checkApiStatus(res)) {
        setData(res.data);
      } else {
        ToastError(res.data.error.message);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  return <EnhanceForm id={id} defaultData={data} />;
}

export default memo(ViewaboutmeUpdate);
