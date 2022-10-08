import { Icons } from "styles/images/icons";
import { POST_TYPE_OPTION } from "constants/Sharing.constant";
import { Select, TagInput, TextInput } from "components/form";
import { convertToSlug } from "utils/common";
import ContentHeader from "components/layouts/content-header";
import FileInput from "components/form/file-input";
import Image from "next/image";
import React, { memo } from "react";
import TextEditor from "components/form/text-editor";
import TextInputStrict from "components/form/text-input/text-input-strict";
import router from "next/router";
function CreatePostForm(props: any) {
  const { handleSubmit, values, setFieldValue } = props;

  const handleChangeHide = () => {
    if (!values.status) return;
    setFieldValue("status", false);
  };
  const handleChangeShow = () => {
    if (values.status) return;
    setFieldValue("status", true);
  };
  const handleChangeTag = (value: string) => {
    setFieldValue("tag", value);
  };
  const handleChangeFile = (file: any) => {
    setFieldValue("filesPost", file);
  };

  return (
    <div className="w-full bg-gray-200 mr-28 px-20 pt-2 pb-20 bg-graydivide">
      <form onSubmit={handleSubmit}>
        <ContentHeader title={"Chia sẻ"} searchHidden={true}>
          <div className="flex justify-start items-center gap-3">
            <p className="text-lg">Bài viết</p>
            <Image src={Icons.editIcon} alt="icon" />
          </div>
        </ContentHeader>
        <TextInput name="sharingAt" label="Ngày" type="date" max />
        <TextInput label={"Ngày tạo"} name={"createdAt"} type="date" />
        <TextInputStrict label={"Tiêu đề"} name={"title"} textarea rows={3} getSlug />
        <TextInputStrict
          label={"Slug"}
          name={"slug"}
          rows={3}
          required
          textarea
          formatValue={(v: any) => convertToSlug(v)}
        />
        <TextEditor name="content" label="Nội dung" setFieldValue={setFieldValue} />
        <TagInput handleChangeTag={handleChangeTag} />
        <div className="flex flex-auto justify-between w-full">
          <FileInput
            handleChangeFile={handleChangeFile}
            label={"Ảnh đại diện"}
            buttonName={"Chọn ảnh"}
            idInput={"img"}
            name={"filesPost"}
            requireField
          />
          <div className="flex w-full justify-end  ">
            <div className="w-2/5">
              <Select name="type" options={POST_TYPE_OPTION} label="Loại bài viết" />
              <div>
                <label className="block mb-5 text-base font-semibold">
                  <input type="radio" checked={values.status} onChange={handleChangeShow} />
                  <span className="pl-5">Hiển thị</span>
                </label>
                <label className="block mb-5 text-base font-semibold">
                  <input type="radio" checked={!values.status} onChange={handleChangeHide} />
                  <span className="pl-5">Ẩn</span>
                </label>
              </div>
              <div className="flex gap-[25px]">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => {
                    router.back();
                  }}
                >
                  Huỷ
                </button>
                <button type="submit" className="btn-upload">
                  Tải lên
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(CreatePostForm);
