import Icons from "styles/images/icon";
import Image from "next/image";
import React, { memo } from "react";
function SearchInput({ placeholder, onSearch }: { placeholder: string; onSearch?: any }) {
  return (
    <div className="bg-[#E2E2E2] h-11 rounded-lg flex justify-between items-center px-4 md:my-0 my-6">
      <input
        type="text"
        className="bg-gray200 text-graysearch h-full w-3/4 text-lg focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => onSearch(e?.target?.value)}
      />

      <Image src={Icons.search} alt="icon" />
    </div>
  );
}

export default memo(SearchInput);
