import { ErrorMessage, Field } from "formik";
import React, { memo } from "react";

interface ITextInput {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}
function TextInput(props: ITextInput) {
  const { label, name, type = "text" } = props;
  return (
    <div className="mb-12">
      <label htmlFor="title" className="block text-lg font-semibold">
        {label} <span className="text-red600 align-super">*</span>
      </label>
      <Field
        type={type}
        name={name}
        className="w-full h-12 pl-5 text-lg font-medium focus:outline-none"
        placeholder="Nhập thông tin"
      />
      <div className="pt-4 text-red-600 italic font-medium">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}
export default memo(TextInput);
