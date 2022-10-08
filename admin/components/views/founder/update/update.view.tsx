import { FileContent, FileInput, TextInput } from "components/form";
import { useRouter } from "next/router";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useRef } from "react";

function Form(props: any) {
  const { handleSubmit, setFieldValue, values } = props;
  const handleChangeLogo = (file: any) => {
    setFieldValue("logo", file);
  };
  const handleChangeAvatar = (file: any) => {
    setFieldValue("avatar", file);
  };
  const router = useRouter();
  const listIdImgs: any = useRef([]);
  const getIdImgsDelete = (id: number) => {
    listIdImgs.current.push(id);
    setFieldValue("listIdImgDelete", listIdImgs.current);
  };

  return (
    <div className="mx-10 lg:mx-auto container">
      <ContentHeader title={"Trang chủ"} searchHidden={true} updateName={values.branding}>
        <p className="text-lg">Founder/CEO</p>
      </ContentHeader>

      <form onSubmit={handleSubmit}>
        <TextInput name="branding" label="Thương hiệu" />
        <TextInput name="url" label="Link Web" />
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
            name={"logo"}
            accept={"image/*, image/HEIC"}
            imgDefault={values?.logoImg}
            getIdImgsDelete={getIdImgsDelete}
            requireField={true}
          />
          <FileInput
            handleChangeFile={handleChangeAvatar}
            label="Ảnh đại diện"
            buttonName="Chọn ảnh"
            idInput="input-avatar"
            name={"avatar"}
            accept={"image/*, image/HEIC"}
            imgDefault={values?.fileAvatar}
            getIdImgsDelete={getIdImgsDelete}
            requireField={true}
          />
        </div>
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button type="button" className="btn-cancel" onClick={router.back}>
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

export default memo(Form);
