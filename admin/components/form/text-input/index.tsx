import { ErrorMessage, Field } from "formik";
import React, { memo } from "react";
import moment from "moment";

interface ITextInput {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  component?: string;
  children?: any;
  as?: string;
  rows?: number;
  defaultValue?: string;
  max?: boolean;
  minNumber?: number;
}

function TextInput(props: ITextInput) {
  const {
    label,
    name,
    type = "text",
    max,
    component,
    children,
    defaultValue,
    as,
    rows,
    minNumber,
  } = props;
  const Date = moment().format("YYYY-MM-DD");
  return (
    <>
      <div className="min-h-12 grid grid-cols-4 items-center text-2xl font-semibold my-[18px]">
        <label htmlFor="" className="col-span-1">
          {label} <span className="text-red100 align-super">*</span>
        </label>
        <Field
          as={as}
          rows={rows}
          defaultValue={defaultValue}
          component={component}
          name={name}
          type={type}
          max={max ? Date : ""}
          min={minNumber}
          placeholder={"Nhập thông tin"}
          className="flex-1 col-span-3 w-full bg-white h-full px-5 text-xl rounded focus:outline-none shadow-3xl"
        >
          {component && children}
        </Field>
      </div>
      <div className="text-red100 font-medium italic">
        <ErrorMessage name={name} />
      </div>
    </>
  );
}
export default memo(TextInput);
