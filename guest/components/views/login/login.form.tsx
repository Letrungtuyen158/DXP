import { ErrorMessage, Field } from "formik";
import React, { memo, useRef, useState } from "react";
import styles from "./login.module.scss";

const Login: React.FC = (props: any) => {
  const { handleSubmit, isSubmitting, setFieldValue } = props;
  const [showPassword, setShowPassWord] = useState(true);
  const inputPassword: any = useRef();
  const handleShowPassword = () => {
    setShowPassWord(!showPassword);
  };
  const handleKey = (e: any) => {
    if (e.charCode === 32) {
      e.preventDefault();
    }
  };
  const onChangeText = (e: any) => {
    const values: string = e.target.value;
    setFieldValue("password", values);
  };

  return (
    <>
      <div className={` min-h-screen mx-auto pt-44 pb-32 `}>
        <div className="flex flex-1 flex-col justify-center items-center">
          <div>
            <p className="text-[36px] font-normal mb-[48px]">Đăng nhập</p>
            <form
              onSubmit={handleSubmit}
              className="p-[35px] bg-darkbluebg w-[915px] h-[446px] rounded-[15px]"
            >
              <div className="h-[140px]">
                <p className="text-[20px] text-white leading-[30px] mb-[12px]">Địa chỉ email*</p>
                <Field
                  name="email"
                  type="email"
                  className="px-8 w-full rounded-[7px] h-[60px] text-[20px] mb-12 outline-none"
                />
                <p className="text-[18px] italic text-red relative top-[-45px]">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="relative h-[140px]">
                <p className="text-[20px] text-white leading-[30px] mb-[12px]">Mật khẩu*</p>
                <input
                  ref={inputPassword}
                  onChange={onChangeText}
                  onKeyPress={handleKey}
                  name="password"
                  type={showPassword ? "password" : "text"}
                  className="px-8 w-full rounded-[7px] h-[60px] text-[20px] mb-12 outline-none"
                />
                <p className="text-[18px] italic text-red relative top-[-45px]">
                  <ErrorMessage name="password" />
                </p>
                <div
                  className="cursor-pointer flex font-medium justify-center items-center absolute right-[13px] top-[56px] w-[60px] rounded-[7px] bg-darkbluebg text-[20px] text-white"
                  onClick={handleShowPassword}
                >
                  {showPassword ? "Show" : "Hide"}
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Field
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="mb-1 cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="ml-[14px] text-[20px] text-white cursor-pointer"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? "bg-sky200" : "bg-buttonlogin"
                } w-[163px] h-[44px] rounded-[7px] text-[20px] text-white flex justify-center items-center
                  `}
              >
                {!isSubmitting ? (
                  "Đăng nhập"
                ) : (
                  <div
                    className={`flex justify-center top-[-2px] relative ${styles.lds_dual_ring} `}
                  ></div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Login);
