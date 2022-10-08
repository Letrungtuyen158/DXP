import ContentHeader from "components/layouts/content-header";
import React from "react";
import UsersUpdateForm from "components/views/users/update";

function Index() {
  return (
    <div className="w-full px-10 bg-graydivide">
      <ContentHeader title={"Admin"} searchHidden={false}>
        Danh sách {">"} Chỉnh sửa
      </ContentHeader>
      <div className="py-12 w-full">
        <UsersUpdateForm />
      </div>
    </div>
  );
}

export default Index;
