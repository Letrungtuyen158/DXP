import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import FormUploadImage from "./create.view";
import React from "react";
import Swal from "sweetalert2";

function Index(props: any) {
  const onSubmit = async (data: any) => {
    const newData = omit(["file"], {
      ...data,
    });
    Swal.showLoading();
    const formData: any = new FormData();
    formData.append("file", data.file);
    try {
      const res: any = await Api.createImage(formData);

      if (checkApiStatus(res)) {
        const idImg: any = res?.data[0].id;
        const res1: any = await Api.patchImage(idImg, newData);
        if (checkApiStatus(res1)) {
          ToastSuccess("Tạo ảnh mới thành công");
          props.router.back();
        } else {
          ToastError("Tạo ảnh thất bại");
        }
      }
    } catch (e: any) {
      ToastError(e.message);
    }
  };
  return <FormUploadImage onSubmit={onSubmit} />;
}

export default withRouter(Index);
