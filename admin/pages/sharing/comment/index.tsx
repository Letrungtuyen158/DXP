import { Comments } from "components/views/sharing";
import React, { memo } from "react";
function Comment() {
  return (
    <div className="bg-graydivide px-10 w-full">
      <div className="w-full">
        <Comments />
      </div>
    </div>
  );
}

export default memo(Comment);
