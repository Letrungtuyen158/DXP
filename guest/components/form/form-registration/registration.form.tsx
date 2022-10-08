import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import React, { memo } from "react";
import TextInput from "components/form/text-input";
import images from "styles/images/courses";

function FormRegistration(props: any) {
  const { handleSubmit } = props;
  return (
    <div>
      <div className="sm:mx-3 bg-grayf6 pt-4 sm:h-[700px] relative w-full flex justify-center items-center">
        <div className="sm:block hidden">
          <Image
            src={images.bg_form}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            alt="background"
          />
        </div>
        <div className="w-[809px] sm:h-[434px] bg-white sm:mx-0 mx-[14px] z-10 rounded-[8px]">
          <form className="sm:my-[51px] sm:mx-[95px] mx-6 mt-4 mb-8" onSubmit={handleSubmit}>
            <div className="font-semibold text-[24px] sm:text-[36px] leading-[35px] mb-[39px] text-sky text-center">
              ĐĂNG KÝ KHOÁ HỌC
            </div>
            <div className="mb-[19px] grid sm:gap-y-[25px] sm:grid-cols-2 gap-y-3 gap-x-[30px]">
              <div>
                <TextInput name={"name"} placeholder="Họ và tên *" />
              </div>
              <div>
                <TextInput name={"phone"} placeholder="Điện thoại *" />
              </div>
              <div>
                <TextInput name={"email"} placeholder="Email" />
              </div>
              <div>
                <TextInput name={"course"} placeholder="Khoá học quan tâm" />
              </div>
            </div>
            <div className="text-graysearch mb-[25px] text[14px] leading-[20px]">
              Bằng việc đăng ký thông tin, bạn đồng ý cho nhân viên của chúng tôi liên lạc thông qua
              các hình thức: cuộc gọi, tin nhắn, email nhằm mục đích tư vấn chương trình khoá học
            </div>
            <button className="w-full h-[40px] sm:h-[50px] bg-sky rounded-[7px] text-white text-[20px] font-semibold active:opacity-60">
              Đăng ký ngay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(FormRegistration);
