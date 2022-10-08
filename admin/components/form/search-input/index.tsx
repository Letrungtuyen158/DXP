import Image from "next/image";
import Images from "styles/images/header";
import React, { memo } from "react";

function SearchInput({ onSearch, placeholder }: { onSearch: any; placeholder?: string }) {
  return (
    <div className="rounded relative flex gap-2 items-center w-[300px] h-[35px] bg-white py-2 px-[15px] shadow-sm">
      <div className="w-[17px] h-[17px]">
        <Image src={Images.searchIcon} alt="icon_search" />
      </div>
      <input
        type="text"
        className="focus:outline-none flex-1 font-medium"
        onChange={(e: any) => onSearch(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default memo(SearchInput);
