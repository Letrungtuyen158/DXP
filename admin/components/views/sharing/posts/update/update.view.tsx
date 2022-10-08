import { Icons } from "styles/images/icons";
import { POST_TYPE_OPTION } from "constants/Sharing.constant";
import { Select, TagInput, TextInput } from "components/form";
import { convertToSlug } from "utils/common";
import { useRouter } from "next/router";
import ContentHeader from "components/layouts/content-header";
import FileInput from "components/form/file-input";
import Image from "next/image";
import React, { memo } from "react";
import TextEditor from "components/form/text-editor";
import TextInputStrict from "components/form/text-input/text-input-strict";

function UpdatePostForm(props: any) {
  const router = useRouter();
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
  const handleChangeFile = (filesPost: any) => {
    setFieldValue("files", filesPost);
  };
  const handleCancel = () => {
    router.back();
  };
  const getIdImgsDelete = (id: number) => {
    setFieldValue("idDelete", id);
  };

  return (
    <div className="w-full bg-gray-200 mr-28 pb-20 px-20">
      <ContentHeader title={"Chia sẻ"} searchHidden={true}>
        <div className="flex justify-start items-center gap-3">
          <p className="text-lg">Bài viết</p>
          <Image src={Icons.editIcon} alt="icon" />
        </div>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput name="sharingAt" label="Ngày" max type="date" />
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
        <TagInput handleChangeTag={handleChangeTag} prevTag={values.tag} />
        <div className="flex flex-auto justify-between w-full">
          <FileInput
            handleChangeFile={handleChangeFile}
            label={"Ảnh đại diện"}
            buttonName={"Chọn ảnh"}
            idInput={"img"}
            accept={"image/*, image/HEIC"}
            requireField
            imgDefault={values?.filesPost}
            getIdImgsDelete={getIdImgsDelete}
          />

          <div className="flex w-full justify-end  ">
            <div className="w-2/5">
              <Select name="type" options={POST_TYPE_OPTION} label="Loại bài viết" />
              <div>
                <label className="block mb-5 text-base font-semibold">
                  <input type="radio" checked={values.status} onChange={handleChangeShow} />
                  <span className="pl-5">Hiện thị</span>
                </label>
                <label className="block mb-5 text-base font-semibold">
                  <input type="radio" checked={!values.status} onChange={handleChangeHide} />
                  <span className="pl-5">Ẩn</span>
                </label>
              </div>
              <div className="flex gap-[25px]">
                <button className="btn-cancel" type="button" onClick={handleCancel}>
                  Huỷ
                </button>
                <button className="btn-upload cursor-pointer">Tải lên</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(UpdatePostForm);
