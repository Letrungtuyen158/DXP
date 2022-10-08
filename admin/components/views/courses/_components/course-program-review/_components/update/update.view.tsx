import { FileContent, FileInput, TextInput } from "components/form";
import { useRouter } from "next/router";
import ContentHeader from "components/layouts/content-header";
import Icon from "styles/images/review";
import Image from "next/image";
import MultiFileInput from "components/form/filesInputUpdate";
import React, { memo, useRef } from "react";

function ReviewUpdateForm(props: any) {
  const { handleSubmit, renderProgram, values, setFieldValue } = props;
  const router = useRouter();
  const handleChangeFile = (values: any) => {
    setFieldValue("listFiles", values);
  };
  const handleChangeAvatar = (values: any) => {
    setFieldValue("fileAvatar", values);
  };
  const listImgsDelete: any = useRef([]);
  const getIdAvatarDelete = (id: number) => {
    listImgsDelete.current.push(id);
    setFieldValue("idDeleteImg", listImgsDelete.current);
  };
  return (
    <div className="w-full px-10 mx-auto container">
      <form onSubmit={handleSubmit}>
        <ContentHeader title={"Khoá học"} searchHidden={true}>
          <div className="flex justify-start items-center gap-2">
            <p>Feedback học viên</p>
            <Image src={Icon.icon_edit} alt="" />
          </div>
        </ContentHeader>
        <TextInput
          label={"Khoá học"}
          name={"courseProgramId"}
          defaultValue={values.courseProgramId}
          component={"select"}
        >
          {renderProgram()}
        </TextInput>
        <TextInput label={"Tên học viên"} name={"reviewerName"} />
        <TextInput type={"date"} label={"Ngày"} name={"reviewAt"} max={true} />
        <FileContent
          name={"content"}
          label={"Nội dung"}
          className={"mt-14"}
          setFieldValue={setFieldValue}
        />
        <FileInput
          accept="image/*, image/HEIC"
          handleChangeFile={handleChangeAvatar}
          label={"Avatar"}
          buttonName={"Thêm ảnh"}
          idInput={"img"}
          name={"avatar"}
          imgDefault={values.avatar}
          getIdImgsDelete={getIdAvatarDelete}
          requireField
        />
        <MultiFileInput
          handleChangeFile={handleChangeFile}
          imagesDefault={values.files}
          accept={"image/*, image/HEIC"}
          getValueDelete={getIdAvatarDelete}
        />
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" onClick={() => router.back()} type="button">
            Huỷ
          </button>
          <button type="submit" className="btn-upload">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(ReviewUpdateForm);
