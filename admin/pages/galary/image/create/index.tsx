import ContentHeader from "components/layouts/content-header";
import React from "react";
import UpdateImage from "components/views/galary/image/create";

function Index() {
  return (
    <div className="bg-graydivide w-full">
      <div className="mx-auto container px-10">
        <ContentHeader title={"Gallery"} searchHidden={true}>
          <div>Hình ảnh</div>
        </ContentHeader>
        <UpdateImage />
      </div>
    </div>
  );
}

export default Index;
