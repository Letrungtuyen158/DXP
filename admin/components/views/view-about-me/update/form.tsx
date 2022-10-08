import { FileContent, FileInput, TextInput } from "components/form";
import { IProps } from "./handler";
import { Icons } from "styles/images/icons";
import { useRouter } from "next/router";
import ContentHeader from "components/layouts/content-header";
import Image from "next/image";
import MultiFileInput from "components/form/filesInputUpdate";
import React, { memo, useRef } from "react";

function ViewaboutmeUpdateForm(props: IProps) {
  const { handleSubmit, setFieldValue, values } = props;
  const router = useRouter();
  const handleChangeFile = (file: any) => {
    setFieldValue("listFiles", file);
  };
  const handleChangeAvatar = (file: any) => {
    setFieldValue("avatar", file);
  };
  const handleCancel = () => {
    router.back();
  };

  const listImgsDelete: any = useRef([]);
  const getIdAvatarDelete = (id: number) => {
    listImgsDelete.current.push(id);
    setFieldValue("idDeleteImg", listImgsDelete.current);
  };
  return (
    <div className="w-full mx-auto container px-10">
      <ContentHeader title={"Góc nhìn"} searchHidden={true}>
        <div className="flex justify-start items-center gap-3">
          <p className="text-lg">Góc nhìn về tôi</p>
          <Image src={Icons.editIcon} alt="icon" />
        </div>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput label={"Họ tên"} name={"reviewerName"} />
        <TextInput label={"Ngày"} name={"reviewAt"} type="date" max />
        <TextInput label={"Ngày tạo"} name={"createdAt"} type="date" />
        <FileContent name="content" label={"Nội dung"} setFieldValue={setFieldValue} />
        <FileInput
          imgDefault={values.ownerAvatar}
          accept="image/*, image/HEIC"
          handleChangeFile={handleChangeAvatar}
          label={"Avatar"}
          buttonName={"Thêm ảnh"}
          idInput={"img"}
          name={"ownerAvatar"}
          getIdImgsDelete={getIdAvatarDelete}
        />

        <MultiFileInput
          handleChangeFile={handleChangeFile}
          imagesDefault={values.mediaContents}
          accept={"image/*, image/HEIC"}
          getValueDelete={getIdAvatarDelete}
        />

        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" type="reset" onClick={handleCancel}>
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

export default memo(ViewaboutmeUpdateForm);
