import React, { memo, useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ContentWithSeeMore = ({ content = "" }: { content?: string }) => {
  const [isSeeMore, setSeeMore]: any = useState(true);
  const onToggleSeeMore = () => {
    setSeeMore(!isSeeMore);
  };
  const showButton = useRef(true);
  const handleContent = (content: string) => {
    const lengthContent = content.length;
    if (lengthContent > 400) {
      showButton.current = true;
      if (isSeeMore) {
        return content.substring(0, 400) + "...";
      } else {
        return content;
      }
    } else {
      showButton.current = false;
      return content;
    }
  };
  return (
    <div>
      <div>
        <ReactQuill theme="snow" value={handleContent(content)} readOnly className="hide-toolbar" />
      </div>
      <div
        className={`text-[21px] italic underline text-[#3faef2] cursor-pointer ${
          showButton.current ? "" : "hidden"
        }`}
        onClick={onToggleSeeMore}
      >
        {isSeeMore ? "Xem thêm" : "Thu gọn"}
      </div>
    </div>
  );
};

export default memo(ContentWithSeeMore);
