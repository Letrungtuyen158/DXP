import { EditorDynamic } from "components/form/editor";
import React, { memo } from "react";

function Commit({ data }: any) {
  if (!data) return null;
  return (
    <div className="bg-bluebaner sm:px-[75px] sm:py-[35px] px-[15px] py-4 md:rounded-[7px] overflow-hidden">
      <div className="sm:text-[48px] leading-[30px] sm:leading-[50px] text-sky100 text-[20px]">
        CAM KẾT
      </div>
      <div className="border-b border-white sm:mt-[30px] mb-[30px] mt-[10px]"></div>
      <div className="text-[20px] text-white leading-[24px]">
        <EditorDynamic content={data} className="quill-text18px sm:quill-text21px text-white" />
      </div>
    </div>
  );
}

export default memo(Commit);
