import { ROUTERS } from "constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/home";
function aboutDXP() {
  return (
    <div className="md:grid md:grid-cols-12 md:place-items-center 2xl:gap-4 md:gap-x-[20px]">
      <div className="md:place-self-end md:mb-[250px] xl:mb-[100px] 2xl:pt-[100px] md:grid md:col-span-3 flex">
        <div className="relative 2xl:w-[340px] md:w-[280px] md:h-[280px] w-[250px] h-[220px]">
          <Image
            src={images.boss_3}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="DXP"
          />
        </div>
        <div className="relative 2xl:w-[340px] 2xl:h-[330px] md:w-[280px] md:h-[330px] w-[250px] h-[220px]">
          <Image
            src={images.boss_2}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="DXP"
          />
        </div>
      </div>
      <div className=" bg-[#081A39] p-8  md:grid md:col-span-4  ">
        <div>
          <p className="font-normal md:text-[20px] leading-[22px] text-justify text-white">
            Dương Xuân Phi:
            <br />
            <br /> Founder/CEO Uto Tech JSC
            <br />
            <br /> Founder/CEO Eco Resort - Utopia Eco Lodge
            <br />
            <br /> Founder/CEO tại Utopia Travel
            <br />
            <br /> Founder/CEO Uto Academy
            <br />
            <br /> Founder jGooooo
            <br />
            <br /> Inspirer and Speaker
          </p>
          <p className="font-normal text-[20px] leading-[22px] text-justify text-white mt-[40px]">
            “Không có vinh quang nào mà không trả giá. Tôi là người đi lên từ con số không, tự học,
            tự làm, tự rèn luyện để theo đuổi lý tưởng của bản thân. Đôi khi tôi cũng suy nghĩ, vì
            sao mình lại không sống nhàn hạ như bao người khác. Nhưng tôi đã quyết định sẽ dùng hết
            20 năm của cuộc đời để góp phần cùng với những ‘kẻ mơ mộng khác’ thực hiện sứ mệnh nhằm
            kiến tạo những điều vĩ đại để thay đổi thế giới”
          </p>
          <div className="text-right md:text-left">
            <Link href={ROUTERS.ABOUT_ME} passHref>
              <button className="border text-white active:opacity-75 w-[143px] text-[18px] h-[35px] mt-[24px]">
                Về tôi
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:grid md:col-span-5 ">
        <div className="hidden md:block   ">
          <Image src={images.boss_4} placeholder="blur" alt="DXP" />
        </div>
        <div>
          <div className="p-[22px]">
            <p className="font-semibold">
              “Mục đích của cả cuộc đời này đơn giản chỉ là một chuyến phiêu lưu để
              <span className="inline text-[#3744B4]"> HỌC HỎI và TIẾN HOÁ.</span> Người giàu có
              nhất là người có nhiều{" "}
              <span className="inline text-[#3744B4]">TRẢI NGHIỆM NHẤT </span>
              trong cuộc đời này.”
            </p>
            <p className="my-[15px] leading-[24px] text-[20px] font-semibold float-right md:float-left">
              DƯƠNG XUÂN PHI
            </p>
          </div>
        </div>
        <div className="md:hidden block mt-4">
          <Image src={images.boss_4} placeholder="blur" alt="DXP" />
        </div>
      </div>
    </div>
  );
}

export default memo(aboutDXP);
