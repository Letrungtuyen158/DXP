import { EditorDynamic } from "components/form/editor";
import React, { memo } from "react";

function Value({ data }: any) {
  return (
    <div>
      <h1 className="text-black mt-[20px] mb-[30px] sm:mt-[57px] text-center md:text-4xl text-2xl sm:text-2xl font-semibold sm:mb-12">
        MÔ TẢ KHOÁ HỌC
      </h1>
      <div className="bg-bluebaner md:rounded-[7px] p-[15px] overflow-hidden md:py-[28px] md:px-[100px]">
        <div className="text-sky100 font-bold text-xl md:text-2xl leading-[30px] border-b border-white pb-2">
          KHOÁ HỌC SẼ MANG LẠI CHO BẠN
        </div>
        <div>
          <EditorDynamic
            content={data?.value}
            className="text-white quill-text18px mt-[10px] md:mt-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Value);
