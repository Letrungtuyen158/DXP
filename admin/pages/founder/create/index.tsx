import ContentHeader from "components/layouts/content-header";
import CreateFounder from "components/views/founder/create";
import React from "react";

function Create() {
  return (
    <div className="bg-graydivide w-full">
      <div className="w-full container lg:mx-auto px-10 ">
        <ContentHeader title={"Trang chủ"} searchHidden={true}>
          <p className="text-lg">Founder/CEO</p>
        </ContentHeader>
        <CreateFounder />
      </div>
    </div>
  );
}

export default Create;
