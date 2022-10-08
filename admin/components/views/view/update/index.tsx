import { checkApiStatus } from "utils/common";
import { useRouter } from "next/router";
import Api from "services/api";
import EnhanceForm from "./form";
import React, { memo, useEffect, useState } from "react";

function UpdateNewspaper() {
  const [data, setData] = useState<any>({});
  const router = useRouter();
  const id = Number(router.query.viewId);
  useEffect(() => {
    if (id) getNewsById(id);
  }, []);
  const getNewsById = async (id: number) => {
    try {
      const res = await Api.getNewspaperById(id);
      if (checkApiStatus(res)) {
        setData(res?.data);
      }
    } catch (error) {}
  };
  return <EnhanceForm defaultData={data} id={id} />;
}

export default memo(UpdateNewspaper);
