import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { withRouter } from "next/router";
import Api from "services/api";
import FormUploadVideo from "./create.view";
import React from "react";
import Swal from "sweetalert2";

function Index(props: any) {
  const onSubmit = async (data: any) => {
    Swal.showLoading();
    const formData: any = new FormData();
    formData.append("file", data.file);
    const status: any = {
      status: data.status,
    };
    const stringplayName = data?.displayName;
    try {
      const res: any = await Api.createVideo(stringplayName, formData);

      if (checkApiStatus(res)) {
        const idVideo: any = res?.data[0].id;
        const res1: any = await Api.patchVideo(idVideo, status);
        if (checkApiStatus(res1)) {
          ToastSuccess("Tạo video mới thành công");
          props.router.back();
        } else {
          ToastError("Tạo video  thất bại");
        }
      } else {
        ToastError("Tạo video thất bại");
      }
    } catch (e: any) {
      ToastError(e.message);
    }
  };
  return <FormUploadVideo onSubmit={onSubmit} />;
}

export default withRouter(Index);
