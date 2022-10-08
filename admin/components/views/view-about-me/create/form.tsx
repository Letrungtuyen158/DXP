import { FileContent, FileInput, MultiFileInput, TextInput } from "components/form";
import { IProps } from ".";
import { Icons } from "styles/images/icons";
import { ToastSuccess } from "utils/toast";
import { useRouter } from "next/router";
import ContentHeader from "components/layouts/content-header";
import Image from "next/image";
import React, { memo } from "react";

function ViewaboutmeForm(props: IProps) {
  const { handleReset, handleSubmit, setFieldValue } = props;
  const router = useRouter();
  const handleChangeFile = (file: any) => {
    setFieldValue("ownerAvatar", file);
  };
  const handleChangeFileList = (fileList: any) => {
    setFieldValue("mediaContents", fileList);
  };
  const handleResetForm = () => {
    handleReset();
    ToastSuccess("Huỷ tạo mới review thành công");
    router.back();
  };
  return (
    <div className="w-full mx-auto container px-10">
      <ContentHeader title={"Góc nhìn"} searchHidden={false}>
        <div className="flex justify-start items-center gap-3">
          <p className="text-lg">Góc nhìn về tôi</p>
          <Image src={Icons.editIcon} alt="icon" />
        </div>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput label={"Họ tên"} name={"reviewerName"} />
        <TextInput label={"Ngày"} name={"reviewAt"} type="date" max />
        <TextInput label={"Ngày tạo"} name={"createdAt"} type="date" />
        <FileContent name={"content"} label={"Nội dung"} setFieldValue={setFieldValue} />
        <FileInput
          accept="image/*, image/HEIC"
          handleChangeFile={handleChangeFile}
          label={"Avatar"}
          buttonName={"Thêm ảnh"}
          idInput={"img"}
          name={"ownerAvatar"}
        />
        <MultiFileInput handleChangeFile={handleChangeFileList} accept={"image/*, image/HEIC"} />
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" type="button" onClick={handleResetForm}>
            Huỷ
          </button>
          <button type="submit" className="btn-upload">
            Tải lên
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(ViewaboutmeForm);
