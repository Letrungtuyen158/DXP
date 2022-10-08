import ContentHeader from "components/layouts/content-header";
import CreateUsersForm from "components/views/users/create";
import React from "react";

function index() {
  return (
    <div className="w-full px-10 bg-graydivide">
      <ContentHeader title={"Admin"} searchHidden={true}>
        <div>Danh sách {">"} Tạo mới</div>
      </ContentHeader>
      <div className="py-12 w-full">
        <CreateUsersForm />
      </div>
    </div>
  );
}

export default index;
