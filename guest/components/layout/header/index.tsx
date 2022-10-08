import { HEADERS } from "./header.constant";
import { ROUTERS } from "constants/router.constant";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import MenuMobile from "./menu.mobile";
import React, { useState } from "react";
import SubHeaderMobile from "./subHeader.mobile";
import images from "styles/images/header";
export default function Header() {
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(false);
  const onShowing = () => {
    setIsShowing(!isShowing);
  };
  const result: any = HEADERS?.find((i: any) => {
    const path = i.route.substring(1);
    if (path) {
      return router.pathname.includes(path);
    }
  });

  return (
    <>
      <section className="fixed top-0 right-0 left-0 z-40 lg:h-[99px] h-[60px]  border-b border-gray200 bg-white">
        <button className="absolute z-30 ml-[12px] mt-[9px] block lg:hidden" onClick={onShowing}>
          {!isShowing ? (
            <Image src={images.list_menu} width={32} height={32} alt="icon_listMenu" />
          ) : (
            <div className="relative animate-wiggle">
              <Image src={images.X_icon} width={32} height={32} alt="icon_listMenu" />
            </div>
          )}
        </button>
        <div className="lg:shadow-none flex items-center xl:px-[90px] md:h-[100px] h-[55px] justify-center">
          <Link passHref href={ROUTERS.HOME}>
            <div className="flex lg:mt-[16px] lg:flex-1 cursor-pointer">
              <div className="lg:block hidden px-3">
                <Image src={images.logo_DXP} width={64} height={71} alt="logo_DXP" />
              </div>
              <div className="text-center">
                <div className="lg:font-semibold font-medium text-[18px] lg:text-[34px] lg:leading-[30px] leading-[22px] mt-[8px]">
                  DUONG XUAN PHI
                </div>
                <div className="lg:text-[18px] text-[11px] font-light	lg:font-normal lg:mt-[3px]">
                  Inspirer, Entrepreneur and Speaker
                </div>
              </div>
            </div>
          </Link>
          <ul className="lg:flex-1 hidden lg:flex">
            {HEADERS.map((menuItem: any, index) => {
              const pathname = `/${router.pathname.split("/")?.[1]}`;

              let activeClass =
                pathname === menuItem?.route || menuItem?.subRoute?.includes(router.pathname)
                  ? "border-b border-black"
                  : "";
              return (
                <Link passHref href={menuItem.route} key={index}>
                  <li className={`text-[18px] font-normal flex-1 flex justify-center`}>
                    <a className={`${activeClass} cursor-pointer pb-[8.5px]`}>{menuItem.label}</a>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div
          className={`lg:hidden fixed z-20 inset-0 transiton-all ease-in-out duration-200 ${
            isShowing ? " opacity-100 translate-x-0" : "-translate-x-full opacity-0"
          } `}
        >
          <MenuMobile onHide={onShowing} />
        </div>
        {!isShowing &&
          !router.pathname.includes("gallery") &&
          !router.pathname.includes("goc-nhin/") &&
          !router.pathname.includes("chia-se/") && (
            <div>
              <SubHeaderMobile
                name={result?.label_subHeader ? result?.label_subHeader : result?.label}
              />
            </div>
          )}
      </section>
    </>
  );
}
