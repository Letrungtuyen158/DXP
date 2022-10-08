import Image from "next/dist/client/image";
import Images from "styles/images/footer";
import images from "styles/images";

const Footer = () => {
  return (
    <section className="flex items-center flex-col">
      <div className="flex items-center justify-center h-[151px] xl:h-[320px] bg-gray800 text-white w-full">
        <div className="lg:w-[700px] sm:w-[400px] xl:w-[904px] w-[225px] flex flex-col">
          <div className="text-[18px] lg:text-[26px] xl:text-[36px] font-normal text-white leading-[22px] lg:leading-[42.96px]">
            “The only way to overcome this fear is make it happen”
          </div>
          <div className="text-[14px] lg:text-[18px] xl:text-[28px] mt-[8px] xl:mt-[28px] text-gray300 font-medium lg:font-semibold text-left">
            Dương Xuân Phi
          </div>
        </div>
        <div className="xl:ml-[80px] xl:w-[169px] xl:h-[227px] lg:w-[134px] lg:h-[180px] h-[125px] w-[105px] ml-[30px] relative">
          <Image src={Images.img_DXP} layout="fill" alt="Hình ảnh Dương Xuân Phi" />
        </div>
      </div>
      <div className="lg:h-[469px] bg-white flex flex-col items-center w-full">
        <div className="mt-[10px] lg:mt-[50px] w-[145px] h-[58px] lg:w-[289px] lg:h-[116px] relative">
          <Image src={images.text_findMeHere} layout="fill" alt="text_findMeHere" />
        </div>
        <div className="mt-[8px] flex">
          <a
            href="https://www.facebook.com/duongxuanphi"
            target="_blank"
            className="relative lg:w-[44px] lg:h-[44px] w-[35px] h-[35px] block"
            rel="noreferrer"
          >
            <Image src={images.icon_f} layout="fill" alt="icon_Facebook" />
          </a>
          <a
            href="https://jgooooo.com/"
            target="_blank"
            className="lg:ml-[59px] ml-[49px] relative lg:w-[44px] lg:h-[44px] w-[35px] h-[35px] block"
            rel="noreferrer"
          >
            <Image src={images.icon_jgo} layout="fill" alt="icon_Jgooooo" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCykGIFyTvWWEqhTS5CtT5RA"
            target="_blank"
            className="lg:ml-[59px] ml-[51px] relative lg:w-[44px] lg:h-[44px] w-[35px] h-[35px] block"
            rel="noreferrer"
          >
            <Image src={images.icon_ytb} layout="fill" alt="icon_Youtobe" />
          </a>
        </div>
        <div className="w-full lg:max-w-[800px] xl:max-w-[1100px] border-b border-gray800 mb-[20px] mt-[35px] lg:mt-[45px] lg:mb-[74px]" />
        <div className="text-[18px] lg:mb-0 mb-[30px]">
          <span className="font-normal">Copyright © 2019 by</span>
          <span className="font-semibold"> Dương Xuân Phi</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
