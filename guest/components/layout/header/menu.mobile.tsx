import { HEADERS } from "./header.constant";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/header";

function HeaderMenu({ onHide }: any) {
  const router = useRouter();
  return (
    <div className="grid relative text-center h-full bg-black text-white z-50 top-[52px] w-full">
      <div className="place-content-between flex flex-col first:mt-[25px]">
        {HEADERS.map((_: { route: string; label: string }, i: number) => {
          const path = _.route.substring(1);
          return (
            <li className="flex items-center justify-center" key={i} onClick={onHide}>
              <Link href={_.route}>
                <a
                  className={`font-normal text-[20px] text-white p-2 leading-[20.56px] uppercase ${
                    path === "" && router.pathname === "/" && "font-bold border-b border-white"
                  } ${
                    path && router.pathname.includes(path) ? "font-bold border-b border-white" : ""
                  } ${
                    path === "" &&
                    router.pathname.includes("gallery") &&
                    "font-bold border-b border-white"
                  }`}
                >
                  {_.label}
                </a>
              </Link>
            </li>
          );
        })}
      </div>
      <div className="mb-6 flex justify-center">
        <Image
          src={images.logo_DXP_mobile}
          width={170}
          height={170}
          alt="logo_DXP"
          placeholder="blur"
          blurDataURL={images.logo_DXP_mobile}
        />
      </div>
    </div>
  );
}

export default memo(HeaderMenu);
