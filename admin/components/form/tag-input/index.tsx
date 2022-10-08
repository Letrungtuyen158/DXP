import { ErrorMessage, Field } from "formik";
import { checkEvent, formatTag, formatTagStr } from "utils/file";
import Image from "next/image";
import Images from "styles/images/news";
import React, { memo, useEffect, useState } from "react";

function TagInput({ handleChangeTag, prevTag }: { handleChangeTag: any; prevTag?: any }) {
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState<any>([]);

  useEffect(() => {
    if (prevTag) {
      const prevTagList = prevTag?.split(",");
      setTagList(prevTagList);
    }
  }, [prevTag]);

  useEffect(() => {
    handleChangeTag(formatTagStr(tagList));
  }, [tagList]);

  const handleChange = (e: any) => {
    setTag(e.target.value);
  };

  const addTag = (e: any) => {
    if (checkEvent(e.key)) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
      if (formatTag(e.target.value).length > 1) {
        const data: any = [...tagList, formatTag(e.target.value)];
        handleChangeTag(formatTagStr(data));
        setTagList(data);
      }
      setTag("");
    }
  };

  const deleteTag = (i: number) => {
    const newTagList = [...tagList];
    newTagList.splice(i, 1);
    setTagList(newTagList);
  };

  return (
    <div className="mb-12">
      <label className="block text-lg font-semibold">Tag</label>
      <div className="flex gap-3 justify-start items-center ">
        <ul className="flex flex-row flex-wrap gap-3">
          {tagList &&
            tagList.map((tag: any, index: number) => {
              return (
                <li
                  key={index}
                  className="relative rounded p-2 bg-[#C4C4C4] text-lg flex items-center "
                >
                  #<span>{tag}</span>
                  <button
                    className="absolute rounded-full bg-black opacity-20  w-4 h-4 -top-2 -right-1 flex items-center justify-center"
                    onClick={() => deleteTag(index)}
                    type="button"
                  >
                    <Image src={Images.timesIcon} alt="icon" />
                  </button>
                </li>
              );
            })}
          <Field
            name="tag"
            className="flex-1 text-lg font-medium focus:outline-none pr-3  pl-5 min-h-[60px]  "
            value={tag}
            placeholder="Nhập thông tin"
            onKeyDown={addTag}
            onChange={handleChange}
          />
        </ul>
      </div>

      <div className="pt-4 text-red-600 italic font-medium">
        <ErrorMessage name="tag" />
      </div>
    </div>
  );
}
export default memo(TagInput);
