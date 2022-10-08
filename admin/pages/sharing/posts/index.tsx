import { Posts } from "components/views/sharing";

import React, { memo } from "react";
function Sharing() {
  return (
    <div className="px-10 bg-graydivide w-full">
      <div className=" w-full">
        <Posts />
      </div>
    </div>
  );
}

export default memo(Sharing);
