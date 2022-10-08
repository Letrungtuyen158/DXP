import { formatContent } from "utils/file";
import React, { memo, useState } from "react";

function LimitContent({ content }: { content: string }) {
  const [showFullMess, setShowFullMess] = useState<boolean>(false);
  const handleShowMess = () => {
    setShowFullMess(!showFullMess);
  };
  const _content = formatContent(content);
  return (
    <div className="items-start flex-col whitespace-normal text-left" onClick={handleShowMess}>
      <p
        className={`text-[16px] leading-[24px] font-normal cursor-pointer ${
          showFullMess ? "" : "line-clamp-3"
        }`}
      >
        {_content}
      </p>
    </div>
  );
}

export default memo(LimitContent);
