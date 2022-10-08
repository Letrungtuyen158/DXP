import React, { memo } from "react";
import UpdatePost from "components/views/sharing/posts/update";
function UpdateSharing() {
  return (
    <div className="w-full bg-graydivide">
      <div className="w-full">
        <UpdatePost />
      </div>
    </div>
  );
}

export default memo(UpdateSharing);
