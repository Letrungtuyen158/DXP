import { ErrorMessage, useFormikContext } from "formik";
import { convertToSlug } from "utils/common";
import React, { memo, useRef } from "react";

interface ITextInput {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
  max?: boolean;
  formatValue?: any;
  textarea?: boolean;
  rows?: number;
  positive?: boolean;
  inputLink?: boolean;
  getSlug?: boolean;
}

function TextInput(props: ITextInput) {
  const {
    label,
    name,
    type = "text",
    defaultValue,
    textarea,
    rows,
    positive,
    inputLink,
    getSlug,
    formatValue,
  } = props;
  const input: any = useRef();
  const { values, setValues }: any = useFormikContext();
  const handleText = (e: any) => {
    const finalValue: string = e.target.value;
    if (finalValue === " ") {
      input.current.value = "";
      setValues({ ...values, [name]: "" });
    } else {
      setValues({
        ...values,
        [name]: formatValue ? formatValue(finalValue) : finalValue,
        ...(getSlug ? { slug: convertToSlug(finalValue) } : {}),
      });
    }
  };
  const handleKey = (e: any) => {
    if (positive) {
      if (e.charCode === 45) e.preventDefault();
    }
    if (name === "password" && e.charCode === 32) {
      e.preventDefault();
    } else if (name === "confirmPassword" && e.charCode === 32) {
      e.preventDefault();
    }
    if (inputLink) {
      if (e.charCode === 13) e.preventDefault();
    }
  };
  return (
    <>
      <div className="min-h-12 grid grid-cols-4 items-center text-2xl font-semibold my-[18px]">
        <label className="col-span-1">
          {label} <span className="text-red100 align-super">*</span>
          <div>
            {inputLink && (
              <span className="text-[16px] italic font-normal">
                (các link cách nhau bằng dấu , )
              </span>
            )}
          </div>
        </label>
        {textarea ? (
          <textarea
            name={name}
            className="flex-1 col-span-3 bg-white h-full px-5 text-xl rounded outline-none shadow-3xl"
            onChange={handleText}
            ref={input}
            placeholder="Nhập thông tin"
            onKeyPress={handleKey}
            rows={rows}
            defaultValue={defaultValue}
            value={values[name]}
          />
        ) : (
          <input
            name={name}
            className="flex-1 col-span-3 bg-white h-full px-5 text-xl rounded outline-none shadow-3xl"
            onChange={handleText}
            ref={input}
            placeholder="Nhập thông tin"
            onKeyPress={handleKey}
            type={type}
            defaultValue={defaultValue}
            value={values[name]}
          />
        )}
      </div>
      <div className="text-red100 font-medium italic">{<ErrorMessage name={name} />}</div>
    </>
  );
}
export default memo(TextInput);
