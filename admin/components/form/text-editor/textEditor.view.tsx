import "react-quill/dist/quill.snow.css";
import { ErrorMessage, Field } from "formik";
import { formats, modules } from "./TextEditor.config";
import React, { memo } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    const myFunction = ({ forwardedRef, ...props }: any) => <RQ ref={forwardedRef} {...props} />;
    return myFunction;
  },
  {
    ssr: false,
  }
);

export const FileContent = ({ name, label, className, setFieldValue, isNotRequired }: any) => {
  const handleChangeContent = (value: any) => {
    setFieldValue(name, value);
  };
  return (
    <>
      <label className={`block text-2xl font-semibold ${className}`}>
        {label} {!isNotRequired && <span className="text-red100 align-super">*</span>}
      </label>
      <Field name={name}>
        {({ field }: any) => (
          <ReactQuill
            theme="snow"
            formats={formats}
            modules={modules}
            value={field.value}
            onChange={handleChangeContent}
            className="bg-white min-h-[350px] pb-20 px-10 mt-4 rounded shadow-3xl"
          />
        )}
      </Field>
      <div className="pt-4 text-red100 font-medium italic">
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

export default memo(FileContent);
