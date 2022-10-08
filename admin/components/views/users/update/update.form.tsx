import { ROUTERS } from "constants/router.constant";
import Link from "next/link";
import React, { memo } from "react";
import TextInput from "components/form/text-input";
import TextInputStrict from "components/form/text-input/text-input-strict";

const UpdateUserForm = (props: any) => {
  const { handleSubmit } = props;
  return (
    <div className="container mx-auto pb-20">
      <form onSubmit={handleSubmit}>
        <TextInput label="Tên hiển thị" name="fullName" />
        <TextInput label="Email" name="email" type="email" />
        <TextInputStrict label="Mật khẩu" name="password" type="password" />
        <TextInputStrict label="Nhắc lại mật khẩu" name="confirmPassword" type="password" />
        <div>
          <TextInput label={"Quyền hạn"} name={"roles"} component={"select"}>
            <option value="customer">Mod</option>
            <option value="admin">Admin</option>
          </TextInput>
        </div>
        <div className="flex justify-end">
          <Link href={ROUTERS.USERS} passHref>
            <div className="btn-primary bg-buttonsubmit">Huỷ</div>
          </Link>
          <button className="btn-primary ml-[25px] bg-green100" type="submit">
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(UpdateUserForm);
