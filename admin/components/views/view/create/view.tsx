import { FileContent, FileInput, Select, TextInput } from "components/form";
import { IProps } from ".";
import { Icons } from "styles/images/icons";
import { ToastSuccess } from "utils/toast";
import { VIEW_TYPE_OPTION } from "constants/view.constant";
import { convertToSlug } from "utils/common";
import { useRouter } from "next/router";
import ContentHeader from "components/layouts/content-header";
import Image from "next/image";
import React, { memo } from "react";
import TextInputStrict from "components/form/text-input/text-input-strict";

function ViewForm(props: IProps) {
  const router = useRouter();
  const { handleSubmit, values, setFieldValue, handleReset } = props;
  const handleChangeFile = (file: any) => {
    setFieldValue("files", file);
  };
  const handleResetForm = () => {
    handleReset;
    ToastSuccess("Huỷ tạo mới bài báo thành công");
    router.back();
  };
  return (
    <div className="w-full mx-auto container px-10">
      <ContentHeader title={"Góc nhìn"} searchHidden={true}>
        <div className="flex justify-start items-center gap-3">
          <p>Báo chí</p>
          <Image src={Icons.editIcon} alt="icon" />
        </div>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInputStrict label={"Báo"} name={"newspaper"} />
        <TextInput label={"Ngày"} name={"newsAt"} type="date" max />
        <TextInput label={"Ngày tạo"} name={"createdAt"} type="date" />
        <TextInputStrict label={"Người viết"} name={"author"} />
        <TextInputStrict label={"Link báo"} name={"url"} textarea rows={3} inputLink />
        <TextInputStrict label={"Tiêu đề"} name={"title"} textarea rows={3} getSlug />
        <TextInputStrict
          label={"Slug"}
          name={"slug"}
          rows={3}
          required
          textarea
          formatValue={(v: any) => convertToSlug(v)}
        />
        <FileContent label={"Nội dung"} name={"content"} setFieldValue={setFieldValue} />
        <div className="flex justify-between items-start mt-9">
          <div className="w-2/5">
            <FileInput
              handleChangeFile={handleChangeFile}
              label={"Ảnh đại diện"}
              buttonName={"Chọn ảnh"}
              idInput={"img"}
              name={"files"}
              requireField
            />
          </div>
          <div className="w-1/3">
            <Select name={"type"} options={VIEW_TYPE_OPTION} label={"Loại bài viết"} />
            <div className="flex justify-start items-center gap-4 mt-[30px]">
              <input
                type="radio"
                name="status"
                value={"HIDE"}
                checked={values.status === "HIDE" ? true : false}
                onClick={() => setFieldValue("status", "HIDE")}
              />
              <label className="font-semibold text-lg">Ẩn</label>
            </div>
            <div className="flex justify-start items-center gap-4 mt-5">
              <input
                type="radio"
                name="status"
                value={"SHOW"}
                checked={values.status === "SHOW" ? true : false}
                onClick={() => setFieldValue("status", "SHOW")}
              />
              <label className="font-semibold text-lg">Hiển thị</label>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" type="reset" onClick={handleResetForm}>
            Huỷ
          </button>
          <button className="btn-upload" type="submit">
            Tải lên
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(ViewForm);
