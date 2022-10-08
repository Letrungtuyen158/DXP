import Image from "next/image";
import React, { memo } from "react";
import images from "styles/images/home";

function Banner() {
  return (
    <div className="w-full md:from-zinc-300 bg-gradient-to-t from-gray500 to-white ">
      <div className="container mx-auto md:grid md:grid-cols-2 pt-[76px] pb-[16px] md:pb-[60px]">
        <div className="flex items-center justify-center py-[30px] min-h-[325px]">
          <div className=" flex flex-row mt-[-60px] gap-0 md:gap-8">
            <div className=" relative min-h-[335px] min-w-[255px] md:min-h-[640px] md:min-w-[500px] ">
              <Image
                src={images.boss_1}
                layout="responsive"
                placeholder="blur"
                alt="Duong Xuan Phi"
                priority
              />
            </div>
          </div>
        </div>
        <div className="px-[15px] md:mx-0 md:mt-[100px] xl:mt-[150px] 2xl:mt-[220px]  ">
          <p className="  pb-[30px] text-[48px] leading-[57px] md:block hidden text-right">
            THE PRACTITIONER
          </p>
          <p className="text-black text-[20px] md:leading-[32px] md:pb-[35px]  font-normal ">
            Dương Xuân Phi (1990) là một doanh nhân trẻ, một diễn giả truyền cảm hứng. Từ những hành
            trình của tuổi trẻ, những bài viết, những buổi chia sẻ của anh đã truyền cảm hứng, động
            lực và tạo nên những ảnh hưởng tích cực, mạnh mẽ đến hàng ngàn bạn trẻ.
            <br />
            <br /> Anh được biết đến là người có những tư duy khác biệt, dám dấn thân, làm những
            việc người khác chưa từng làm và một ý chí vô cùng mạnh mẽ.
            <br /> Bất cứ lĩnh vực nào anh tham gia, anh cũng đều gặt hái được nhiều thành công bởi
            sự kiên trì, bền bỉ và tinh thần không bao giờ từ bỏ của mình.
            <br /> Hiện tại, anh đang theo đuổi một giấc mơ lớn về ngành công nghệ nhằm mang lại
            những giá trị tốt đẹp hơn cho cộng đồng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
