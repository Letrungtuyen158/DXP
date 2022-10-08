import Image from "next/image";
import Modal from "components/modal";
import ModalView from "./modal.view";
import React, { memo, useState } from "react";
import useModal from "hook/useModal";

function Foundation({ founder = [] }: any) {
  const [idFoundation, setIdFoundation] = useState<number>(0);
  const { toggle, isShowing } = useModal();
  const onChangeFoundation = (i: number) => {
    setIdFoundation(i);
    toggle();
  };

  return (
    <section className="flex justify-center pb-[51px]">
      <div className="container mx-auto md:px-[26px]">
        <div className="text-[24px] md:text-[48px] my-[34px] md:my-[76px] lg:ml-[30px] font-normal mb-[38.36px] text-center">
          FOUNDER/CEO
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[30px]">
          {founder.map((item: any, i: number) => {
            return (
              <div
                key={i}
                className={`cursor-pointer flex flex-col hover:bg-[#E4F2FA] xl:w-[360px] xl:h-[300px] justify-center items-center sm:w-[290px] sm:h-[230px]`}
                onClick={() => onChangeFoundation(i)}
              >
                <div className="lg:w-[217px] lg:h-[154px] w-[117px] h-[83px]  relative">
                  {item.logoImg?.url && (
                    <Image
                      src={item.logoImg?.url}
                      alt="logo"
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={item.logoImg?.urlBlur}
                    />
                  )}
                </div>
                <div className="sm:text-[24px] text-[14px] mt-[14px] sm:mt-[32px]">
                  {item.branding}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal isShowing={isShowing}>
        <ModalView foundation={founder[idFoundation]} hide={toggle} />
      </Modal>
    </section>
  );
}

export default memo(Foundation);
