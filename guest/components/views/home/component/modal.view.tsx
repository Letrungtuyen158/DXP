import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import images from "styles/images/home";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function Modal({ foundation, hide }: any) {
  return (
    <div className="fixed inset-0 z-40 flex justify-center items-center">
      <div className="relative w-[300px] sm:w-[400px] sm:h-[630px] h-[550px] md:w-[700px] lg:w-[950px] md:h-[700px] bg-white z-[100] rounded-[40px]">
        <button
          className="absolute right-[0px] top-[-50px] md:top-[-80px] cursor-pointer w-[44px] h-[44px] md:w-[63px] md:h-[63px]"
          onClick={hide}
        >
          <Image src={images.icon_delete} layout="fill" alt="icon delete" />
        </button>
        <div className="p-7 h-full md:my-[20px] md:mx-[30px] xl:my-[50px] xl:mx-[60px] md:flex">
          <section className="flex-col items-center w-1/3 md:flex hidden">
            <div className="h-[150px]">
              <Image
                src={foundation?.logoImg?.url}
                width={foundation?.logoImg?.width}
                height={foundation?.logoImg?.height}
                objectFit="contain"
                alt="logo"
                placeholder="blur"
                blurDataURL={foundation?.logoImg?.urlBlur}
              />
            </div>
            <div className="mt-[30px] lg:mt-[65px] relative w-[220px] flex-1">
              <Image
                src={foundation?.mediaContents[0].url}
                width={foundation?.mediaContents[0].width}
                height={foundation?.mediaContents[0].height}
                layout="responsive"
                alt="Avatar"
                placeholder="blur"
                blurDataURL={foundation?.mediaContents[0]?.urlBlur}
              />
            </div>
          </section>
          <div className="md:ml-[40px] lg:ml-[70px] md:relative">
            <section className="md:h-[150px]">
              <div className="font-normal text-[24px] md:text-[35px] text-sky">
                {foundation.branding}
              </div>
              <Link href={foundation.url} passHref>
                <p className="text-[18px] md:mt-[10px] font-normal underline cursor-pointer">
                  {foundation.url}
                </p>
              </Link>
              <div className="flex mt-[12px]">
                <Link href="https://www.facebook.com/utotechjsc" passHref>
                  <div className="cursor-pointer">
                    <Image src={images.icon_facebook} alt="icon_facebook" width={35} height={35} />
                  </div>
                </Link>
                <Link href="https://www.tiktok.com/@utotechjsc_2202" passHref>
                  <div className="ml-[22px] cursor-pointer">
                    <Image src={images.icon_tiktok} alt="icon_tiktok" width={35} height={35} />
                  </div>
                </Link>
                <Link href="https://www.youtube.com/channel/UCax4Ns2z-AqXR58X7WI4KkA" passHref>
                  <div className="ml-[22px] cursor-pointer">
                    <Image src={images.icon_ytb} alt="icon_youtobe" width={35} height={35} />
                  </div>
                </Link>
              </div>
            </section>
            <section className="mt-2 gap-6 flex items-center md:hidden">
              <div className="w-[50%]">
                <Image
                  src={foundation?.mediaContents[0].url}
                  width={foundation?.mediaContents[0].width}
                  height={foundation?.mediaContents[0].height}
                  layout="responsive"
                  alt="Avatar"
                  placeholder="blur"
                  blurDataURL={foundation?.mediaContents[0]?.urlBlur}
                />
              </div>
              <div className="w-[50%]">
                <Image
                  src={foundation?.logoImg?.url}
                  width={foundation?.logoImg?.width}
                  height={foundation?.logoImg?.height}
                  layout="responsive"
                  alt="logo"
                  placeholder="blur"
                  blurDataURL={foundation?.logoImg?.urlBlur}
                />
              </div>
            </section>
            <section className="h-[200px] md:h-[340px] font-normal text-[18px] overflow-y-scroll to-orange-50 mt-4 md:mt-[35px] lg:mt-[65px] md:flex-1">
              <div className="h-[370px] pr-3">
                <ReactQuill
                  theme="snow"
                  value={foundation.content}
                  readOnly
                  className="hide-toolbar"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default memo(Modal);
