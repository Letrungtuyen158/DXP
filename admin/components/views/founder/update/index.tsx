import { ToastError } from "utils/toast";
import { useRouter } from "next/router";
import Api from "services/api";
import React, { memo, useEffect, useState } from "react";
import UpdatePage from "./update.handle";

function UpdateFounder() {
  const [data, setData] = useState()
  const id: any = useRouter().query?.founderId;

  useEffect(() => {
    id && getFounderById();
  }, [id]);
  const getFounderById = async () => {
    try {
      const res: any = await Api.getFounderById(id);
      setData(res?.data)
    } catch (error: any) {
      ToastError(error?.message);
    }
  };

  return (
    <div>
      <UpdatePage defaultData={data}/>
    </div>
  );
}

export default memo(UpdateFounder);
