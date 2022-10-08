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
    <div className="lg:mt-14 mt-[18px]">
      <div>
        <ReactQuill
          theme="snow"
          value={handleContent(content)}
          readOnly
          className="hide-toolbar sm:quill-text20px text-gray800 quill-text15px"
        />
      </div>
      <div className={`flex w-full justify-end ${showButton.current ? "" : "hidden"}`}>
        <p
          className="cursor-pointer text-[16px] sm:text-[20px] text-black "
          onClick={onToggleSeeMore}
        >
          {isSeeMore ? "Xem thêm" : "Thu gọn"}
        </p>
      </div>
    </div>
  );
};

export default memo(ContentWithSeeMore);
