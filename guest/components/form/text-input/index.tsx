import { ErrorMessage, Field } from "formik";
import React, { memo } from "react";
interface ITextInput {
  label?: string;
  name: string;
  placeholder?: string;
}
function TextInput({ label, name, placeholder }: ITextInput) {
  return (
    <>
      {label && (
        <label className="text-lg font-normal">
          {label}
          <span className="text-red1 align-super">*</span>
        </label>
      )}
      <Field
        name={name}
        type="text"
        placeholder={placeholder ? placeholder : "Nhập thông tin"}
        className="w-full h-11 sm:h-10 pl-5 text-lg rounded-lg focus:outline-none border border-graysearch sm:border-black border-solid"
      />
      <div className="ml-4 pt-1 leading-[16px] text-[16px] italic font-medium text-red1">
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

export default memo(TextInput);
