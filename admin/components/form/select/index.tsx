import { ErrorMessage, Field } from "formik";
import React, { memo } from "react";

interface ISelect {
  name: string;
  options: { value: number | string; name: string }[];
  label: string;
}

function Select(props: ISelect) {
  const { name, options, label } = props;
  return (
    <>
      <label className="text-lg font-semibold">{label}</label>
      <div className="mt-5">
        <Field name={name} as="select" className="w-full h-12 px-5 rounded shadow-3xl">
          {options.map((item: { value: any; name: any }, index: number) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </Field>
      </div>
      <div className="pt-4 italic font-medium text-redbg">
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

export default memo(Select);
