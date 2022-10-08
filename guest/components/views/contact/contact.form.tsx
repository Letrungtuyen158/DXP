import { ErrorMessage, Field } from "formik";
import { validateName } from "utils";
import ContactBanner from "./contact.banner";
import React, { memo } from "react";
function contactForm(props: any) {
  const { handleSubmit } = props;

  return (
    <section className="bg-gray100">
      <div className="container xl:px-[94px] lg:px-[50px] px-5 mx-auto">
        <ContactBanner />
        <form className=" mt-[17px] lg:mt-[40px] mb-[47px] lg:mb-[100px]" onSubmit={handleSubmit}>
          <div className="lg:flex justify-between w-full lg:h-[114px] h-[228px]">
            <div className="flex-1 lg:mr-[25px] h-[114px]">
              <p className="text-[20px]">Tên *</p>
              <Field
                type="text"
                name="fullName"
                validate={validateName}
                className="h-[45px] outline-none border border-black rounded-lg text-[20px] px-[22px] w-full"
              />
              <p className="text-[16px] italic text-red">
                <ErrorMessage name="fullName" />
              </p>
            </div>
            <div className="flex-1 lg:ml-[25px] h-[114px]">
              <p className="text-[20px]">Email *</p>
              <Field
                name="email"
                type="email"
                className="h-[45px] outline-none border border-black rounded-lg text-[20px] px-[22px] w-full"
              />
              <p className="text-[16px] italic text-red">
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>
          <div className="h-[114px]">
            <p className="text-[20px]">Chủ đề *</p>
            <Field
              name="topic"
              type="text"
              className="w-full h-[45px] outline-none border border-black rounded-lg text-[20px] px-[22px]"
            />
            <p className="text-[16px] italic text-red">
              <ErrorMessage name="topic" />
            </p>
          </div>

          <div className="h-[114px]">
            <p className="text-[20px]">Nội dung *</p>
            <Field
              name="content"
              as="textarea"
              rows={3}
              className="w-full outline-none border border-black rounded-lg text-[20px] p-[22px]"
            />
            <p className="text-[16px] italic text-red">
              <ErrorMessage name="content" />
            </p>
          </div>
          <button
            className="w-full h-[45px] text-black font-semibold text-[18px] lg:text-[20px] mt-[94px] bg-gray500 rounded-lg active:opacity-70"
            type="submit"
          >
            GỬI
          </button>
        </form>
      </div>
    </section>
  );
}

export default memo(contactForm);
