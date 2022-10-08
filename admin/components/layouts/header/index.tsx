import { removeCookies } from "cookies-next";
import { useRouter } from "next/router";
import Image from "next/image";
import Images from "styles/images/header";
import Link from "next/link";
import React, { memo, useState } from "react";

function Header({ userData }: any) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleLogout = () => {
    removeCookies("secret");
    router.push("/login");
  };
  return (
    <div className="shadow-3xl fixed left-0 right-0 z-20 bg-white">
      <div className="relative xl:px-24 px-10 py-4 mx-auto flex justify-between items-center h-[100px]">
        <Link href="/">
          <a>
            <div className="flex justify-start items-center gap-[14px]">
              <div className="relative h-[71px] w-[87px]">
                <Image src={Images.logo} layout="fill" alt="admin-utopia" />
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[33px] uppercase font-medium">duong xuan phi</p>
                <p className="text-lg font-light">Inspirer, Entrepreneur and Speaker</p>
              </div>
            </div>
          </a>
        </Link>
        <div className="flex items-end">
          <div className="relative mr-6 w-8 h-8 flex justify-center items-center">
            <Image src={Images.notiIcon} layout="fill" alt="admin-utopia" />
            <div className="h-5 w-5 bg-pink100 rounded-full flex items-center justify-center absolute -right-1/3 -top-1/4">
              <span className="text-white text-xs">2</span>
            </div>
          </div>
          <div className="text-right font-medium text-sm">
            <p className="">Tài khoản</p>
            <span className="text-usercolor">{userData?.email}</span>
          </div>
          <button className="ml-2" onClick={() => setShow(!show)}>
            <Image src={Images.downIcon} width={12} height={6} alt="admin-utopia" />
          </button>
        </div>
        <button
          className={`absolute px-9 py-2 bg-white rounded-md shadow-3xl font-medium top-3/4 right-0 mr-10 ${
            show ? "" : "hidden"
          }`}
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default memo(Header);
