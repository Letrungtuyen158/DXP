import { ROUTERS } from "constants/router.constant";
import Link from "next/link";
import React, { memo } from "react";
import TextInput from "components/form/text-input";
import TextInputStrict from "components/form/text-input/text-input-strict";

const CreateUserForm = (props: any) => {
  const { handleSubmit } = props;
  return (
    <div className="w-full container mx-auto pb-20">
      <form onSubmit={handleSubmit}>
        <TextInput label="Tên đăng nhập" name="fullName" />
        <TextInput label="Email" name="email" type="email" />
        <TextInputStrict label="Mật khẩu" name="password" type="password" />
        <TextInputStrict label="Nhắc lại mật khẩu" name="confirmPassword" type="password" />
        <div>
          <TextInput label={"Quyền hạn"} name={"roles"} component={"select"}>
            <option value="admin">Admin</option>
            <option value="customer">Mod</option>
          </TextInput>
        </div>
        <div className="flex justify-end">
          <Link href={ROUTERS.USERS} passHref>
            <div className="btn-primary mr-[25px] cursor-pointer bg-buttonsubmit">Huỷ</div>
          </Link>
          <button className="btn-primary bg-green100" type="submit">
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(CreateUserForm);
