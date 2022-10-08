import { ErrorMessage, Field } from "formik";
import CommentViews from "../index";
import React, { memo } from "react";
function CommentForm(props: any) {
  const { handleSubmit } = props;

  return (
    <section>
      <CommentViews />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 mt-4">
          <div className="">
            <label className="text-lg">
              Tên
              <span className="text-red1 align-super">*</span>
            </label>
            <Field
              type="text"
              name="name"
              className="h-[45px] outline-none border rounded-md border-black  text-[20px] px-[22px] w-full"
            />
            <p className="text-[16px] italic text-red mt-2">
              <ErrorMessage name="name" />
            </p>
          </div>
          <div className="">
            <label className="text-lg">
              Email
              <span className="text-red1 align-super">*</span>
            </label>
            <Field
              name="email"
              type="email"
              className="h-[45px] outline-none border rounded-md border-black  text-[20px] px-[22px] w-full"
            />
            <p className="text-[16px] italic text-red mt-2">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="lg:col-span-2">
            <label className="text-lg">
              Nội dung
              <span className="text-red1 align-super">*</span>
            </label>
            <Field
              name="content"
              as="textarea"
              rows={4}
              className="w-full outline-none border rounded-md border-black p-4 text-[20px]  resize-none"
            />
            <p className="text-[16px] italic text-red">
              <ErrorMessage name="content" />
            </p>
          </div>
        </div>

        <button
          className="w-[160px] mb-8 md:mb-none h-[45px] text-black font-semibold text-[18px] lg:text-[20px] mt-10 md:mt-[29px] bg-gray500 rounded-md active:opacity-70"
          type="submit"
        >
          GỬI
        </button>
      </form>
    </section>
  );
}

export default memo(CommentForm);
