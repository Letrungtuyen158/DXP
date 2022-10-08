import { Icons } from "styles/images/icons";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import SearchInput from "components/form/search-input";

function ContentHeader({
  title,
  action,
  actionLink,
  children,
  searchHidden,
  updateName,
  onSearch,
  placeholder,
}: {
  title: string;
  action?: string;
  actionLink?: string;
  children?: any;
  searchHidden: boolean;
  updateName?: string;
  onSearch?: any;
  placeholder?: string;
}) {
  return (
    <div className="flex pb-5 justify-between w-full mt-7">
      <div className="flex flex-1 justify-start items-end text-2xl gap-3">
        <p className="font-semibold">{title}</p>
        <p>{">"}</p>
        {children}
        {updateName && (
          <div className="flex">
            <p>{">"}</p>
            <p className="ml-3 text-2xl">{updateName}</p>
            <div className="ml-3">
              <Image src={Icons.edit} alt="icon" />
            </div>
          </div>
        )}
      </div>
      <div className={`gap-3 justify-between flex `}>
        {action && actionLink && (
          <Link href={actionLink}>
            <a>
              <button className="btn-create flex justify-center items-center gap-2">
                <span>+</span> {action}
              </button>
            </a>
          </Link>
        )}
        <div className={`${searchHidden ? "hidden" : ""}`}>
          <SearchInput onSearch={onSearch} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
}

export default memo(ContentHeader);
