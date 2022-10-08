import ContentHeader from "components/layouts/content-header";
import React from "react";
import UpdateVideo from "components/views/galary/video/create";

function Index() {
  return (
    <div className="bg-graydivide w-full">
      <div className="mx-auto container px-10">
        <ContentHeader title={"Gallery"} searchHidden={true}>
          <div>Video</div>
        </ContentHeader>
        <UpdateVideo />
      </div>
    </div>
  );
}

export default Index;
