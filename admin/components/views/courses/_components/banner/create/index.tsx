import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { useRouter } from "next/router";
import Api from "services/api";
import BannerView from "./banner.view";
import React, { memo, useEffect, useState } from "react";

function UploadVideo() {
  const router = useRouter();
  const [state, setState]: any = useState({ path: null, file: [] });
  const [imgPrev, setImgPrev] = useState<any>([]);
  const [files, setFiles] = useState<any>([]);
  const [error, setError] = useState(false);

  const onChangeFile = (e: any) => {
    setState({ path: e.target.value, file: e.target.files[0] });
    const fileList = e.target.files;
    const file = Object.values(fileList).map((item) => item);
    setFiles(files.concat(file));
    setError(false);
  };

  useEffect(() => {
    showFiles(files);
  }, [files]);

  const showFiles = (files: any) => {
    const imgPrevResult: any = files.map((file: any) => {
      return URL.createObjectURL(file);
    });
    setImgPrev(imgPrevResult);
  };

  const handleRemove = (i: number) => {
    const newImage = [...imgPrev];
    newImage.splice(i, 1);
    setImgPrev(newImage);

    const newFile = [...files];
    newFile.splice(i, 1);
    setFiles(newFile);
  };

  const handleSubmit = () => {
    files.length > 0 ? handleSubmitImg(files) : setError(true);
  };

  const handleCancel = () => {
    router.back();
  };

  const handleSubmitImg = async (file: any) => {
    const formData = new FormData();
    file.map((item: any) => {
      formData.append("files", item);
    });
    try {
      const res = await Api.createBanner(formData);

      if (checkApiStatus(res)) {
        ToastSuccess("Thêm ảnh mới thành công!");
        router.back();
      }
    } catch (error: any) {
      ToastError(error.messages);
    }
  };
  return (
    <BannerView
      path={state.path}
      onChangeFile={onChangeFile}
      handleSubmit={handleSubmit}
      handleRemove={handleRemove}
      handleCancel={handleCancel}
      error={error}
      imgPrev={imgPrev}
    />
  );
}

export default memo(UploadVideo);
