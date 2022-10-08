import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import React from "react";
import TableList from "components/views/courses/_components/banner/list";
function BannerList() {
  return (
    <div className="mx-auto container px-10">
      <ContentHeader
        title={"Khóa học"}
        action={"Tạo mới"}
        actionLink={ROUTERS.COURSE_BANNER_CREATE}
        searchHidden={false}
      >
        <p className="text-lg">Banner</p>
      </ContentHeader>
      <TableList />
    </div>
  );
}

export default BannerList;
