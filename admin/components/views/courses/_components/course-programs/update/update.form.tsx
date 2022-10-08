import { FileContent, TextInput } from "components/form";
import ContentHeader from "components/layouts/content-header";
import FileInput from "components/form/file-input";
import MultiFileInput from "components/form/filesInputUpdate";
import React, { memo, useRef } from "react";

function UpdateCourseProgram(props: any) {
  const { handleSubmit, handleCancel, setFieldValue, values } = props;
  const handleChangeFiles = (values: any) => {
    setFieldValue("filesList", values);
  };
  const handleChangeFile = (values: any) => {
    setFieldValue("banner", values);
  };
  const listImagesDelete: any = useRef([]);
  const getValueDelete = (values: any) => {
    listImagesDelete.current.push(values);
    setFieldValue("listImgDelete", listImagesDelete.current);
  };
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader title={"Khoá học"} searchHidden={true}>
        <p className="text-lg">Chương trình học</p>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput label={"Tên chương trình"} name={"name"} />
        <TextInput label={"Mô tả ngắn ( được hiển thị ở danh sách )"} name={"description"} />
        <FileContent
          name={"value"}
          label={"Giá trị mang lại"}
          className="mt-[50px]"
          setFieldValue={setFieldValue}
        />
        <FileContent
          name={"detail"}
          label={"Chi tiết khoá học"}
          className="mt-[50px]"
          setFieldValue={setFieldValue}
        />
        <FileContent
          name={"participants"}
          label={"Đối tượng tham gia"}
          className="mt-[50px]"
          setFieldValue={setFieldValue}
        />
        <FileContent
          name={"commitment"}
          label={"Cam kết"}
          className="mt-[50px]"
          setFieldValue={setFieldValue}
          isNotRequired
        />
        <FileInput
          handleChangeFile={handleChangeFile}
          label={"Ảnh bìa"}
          buttonName={"Thêm ảnh"}
          idInput={"imageId"}
          imgDefault={values.banner}
          getIdImgsDelete={getValueDelete}
          name="banner"
          requireField
          accept={"image/*, image/HEIC"}
        />
        <MultiFileInput
          handleChangeFile={handleChangeFiles}
          imagesDefault={values?.files && values?.files}
          accept={"image/*, image/HEIC"}
          getValueDelete={getValueDelete}
        />
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" onClick={handleCancel} type="button">
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

export default memo(UpdateCourseProgram);
