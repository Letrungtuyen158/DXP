import { FileContent, TextInput } from "components/form";
import { useRouter } from "next/router";
import FileInput from "components/form/file-input";
import React, { memo } from "react";

function Form(props: any) {
  const { handleSubmit, setFieldValue } = props;
  const handleChangeLogo = (file: any) => {
    setFieldValue("logoImg", file);
  };
  const handleChangeAvatar = (file: any) => {
    setFieldValue("fileAvatar", file);
  };
  const router = useRouter();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput name="branding" label="Thương hiệu" />
        <TextInput name="url" label="Link web" />
        <FileContent
          name="content"
          label={"Nội dung"}
          className="mt-[50px]"
          setFieldValue={setFieldValue}
        />
        <div className="flex gap-x-16 mt-[40px]">
          <FileInput
            handleChangeFile={handleChangeLogo}
            label="Logo"
            buttonName="Thêm ảnh"
            idInput="input-logo"
            name={"logoImg"}
            accept={"image/*, image/HEIC"}
            requireField
          />
          <FileInput
            handleChangeFile={handleChangeAvatar}
            label="Ảnh đại diện"
            buttonName="Chọn ảnh"
            idInput="input-avatar"
            name={"fileAvatar"}
            accept={"image/*, image/HEIC"}
            requireField
          />
        </div>
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button type="button" className="btn-cancel" onClick={router.back}>
            Huỷ
          </button>
          <button type="submit" className="btn-upload">
            Hoàn thành
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(Form);
