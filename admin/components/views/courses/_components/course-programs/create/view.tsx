import { FileContent, TextInput } from "components/form";
import { IProps } from "components/views/founder/create";
import { ToastSuccess } from "utils/toast";
import { useRouter } from "next/router";
import ContentHeader from "components/layouts/content-header";
import FileInput from "components/form/file-input";
import MultiFileInput from "components/form/filesInputUpdate";
import React, { memo } from "react";
function CourseProgramCreateForm(props: IProps) {
  const router = useRouter();
  const { handleSubmit, handleReset, setFieldValue } = props;
  const handleChangeFiles = (values: any) => {
    setFieldValue("files", values);
  };
  const handleChangeFile = (file: any) => {
    setFieldValue("banner", file);
  };
  const handleResetForm = () => {
    handleReset;
    ToastSuccess("Huỷ tạo chương trình học thành công");
    router.back();
  };

  return (
    <div className="w-full px-10 mx-auto container ">
      <ContentHeader title={"Khoá học"} searchHidden={true}>
        <p className="text-lg">Chương trình học</p>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput label={"Tên chương trình"} name={"name"} />
        <TextInput label={"Mô tả ngắn ( được hiển thị ở danh sách )"} name={"description"} />
        <FileContent
          name={"value"}
          label={"Khoá học sẽ mang lại cho bạn"}
          className="mt-[50px]"
          setFieldValue={setFieldValue}
        />
        <FileContent
          name={"detail"}
          label={"Thông tin chi tiết"}
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
          requireField
          name="banner"
          accept={"image/*, image/HEIC"}
        />
        <MultiFileInput
          handleChangeFile={handleChangeFiles}
          accept={"image/*, image/HEIC"}
          title="Các hình ảnh khoá học"
        />
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" onClick={handleResetForm} type="button">
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
export default memo(CourseProgramCreateForm);
