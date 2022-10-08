import { HEADERS } from "./header.constant";
import React, { memo } from "react";

function SubHeaderMobile(props: { name: any }) {
  return (
    <div>
      <div className="h-[35px] font-[600] text-[18px] flex items-center right-0 left-0 shadow top-[60px] fixed z-40 bg-grayf6 lg:hidden">
        <span className="ml-[12px] text-[#081419]">
          {props.name ? props.name : HEADERS[0].label}
        </span>
      </div>
    </div>
  );
}

export default memo(SubHeaderMobile);
