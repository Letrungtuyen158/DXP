import { ROUTERS } from "constants/router.constant";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { memo } from "react";

function TabMenu() {
  const pathname = useRouter().pathname;
  const renderTabMenu = () => {
    return (
      <nav className="flex justify-center md:justify-start items-center gap-14 my-4 md:my-5 text-lg md:text-2xl">
        <Link href={ROUTERS.GALLERY_PHOTOS} passHref>
          <a
            className={`${
              pathname === ROUTERS.GALLERY_PHOTOS
                ? "text-bluebtn border-b leading-8 border-solid border-bluebtn"
                : "text-graysearch"
            }`}
          >
            HÌNH ẢNH
          </a>
        </Link>
        <Link href={ROUTERS.GALLERY_VIDEOS} passHref>
          <a
            className={`${
              pathname === ROUTERS.GALLERY_VIDEOS
                ? "text-bluebtn border-b leading-8 border-solid border-bluebtn"
                : "text-graysearch"
            }`}
          >
            VIDEO
          </a>
        </Link>
      </nav>
    );
  };
  return <>{renderTabMenu()}</>;
}
export default memo(TabMenu);
