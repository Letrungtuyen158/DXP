import { formatContent } from "utils/common";
import React, { memo, useRef, useState } from "react";

const ContentWithSeeMore = ({ content = "" }: { content?: string }) => {
  const [isSeeMore, setSeeMore]: any = useState(true);
  const onSeeMoreItems = () => {
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
      <p
        className={`text-black  sm:text-xl text-lg sm:leading-[30px] leading-[22px] md:mt-5 mt-[15px]  ${
          showButton.current ? "" : "hidden"
        } `}
      >
        {handleContent(formatContent(content))}
      </p>
      <span
        className={`cursor-pointer text-black flex justify-end text-lg leading-[22px] mt-[15px]  ${
          showButton.current ? "" : "hidden"
        }`}
        onClick={onSeeMoreItems}
      >
        {isSeeMore ? "Xem thêm" : "Thu gọn"}
      </span>
    </div>
  );
};

export default memo(ContentWithSeeMore);
