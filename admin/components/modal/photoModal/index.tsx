import { Icons } from "styles/images/icons";
import Image from "next/image";
import Modal from "components/modal";
import React, { memo } from "react";
import useModal from "hook/useModal";

const PhotoBtn = ({ photoUrl, urlBlur }: { photoUrl: string; urlBlur?: string }) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button
        className="absolute flex top-0 w-full h-full items-center justify-center cursor-pointer"
        onClick={toggle}
      ></button>
      {isShowing && (
        <Modal isShowing={isShowing}>
          <div className="fixed top-64 bg-opacity-20 flex w-full justify-center items-center">
            <div className="z-30 relative w-[600px] h-[600px] flex justify-center  ">
              <Image
                src={photoUrl}
                alt="Photo"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL={urlBlur}
              />
              <div
                onClick={toggle}
                className="cursor-pointer z-30 absolute top-[-70px] right-[-30px]"
              >
                <Image src={Icons.icon_close} width={63} height={63} alt="icon_close" />
              </div>
            </div>
            <div className="fixed inset-0 bg-opacity-50 bg-black z-10" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default memo(PhotoBtn);
