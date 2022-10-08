import { ROUTERS } from "constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import Photos from "components/photos";
import React, { memo } from "react";
import image from "styles/images/aboutMobi";
import images from "styles/images/aboutMe/index";

function AboutMe() {
  return (
    <div className="container mx-auto px-[100px]">
      <section className="w-full mt-[200px]">
        <div>
          <div className="w-full">
            <div className="w-full justify-center ml-[-5px] flex">
              <div className="w-[50%]">
                <Image
                  src={images.DXP02}
                  placeholder="blur"
                  alt="DXP"
                  width={502}
                  height={318}
                  layout="responsive"
                  priority
                />
              </div>
              <div className="w-[36%] pt-11 ml-11">
                <Image
                  src={images.DXP03}
                  placeholder="blur"
                  alt="DXP"
                  layout="responsive"
                  width={354}
                  height={442}
                  priority
                />
              </div>
              <div className="flex items-end w-[10%]">
                <div className="w-full">
                  <Image
                    src={images.duongxuanphi_text}
                    blurDataURL={images.duongxuanphi_text}
                    placeholder="blur"
                    layout="responsive"
                    width={100}
                    height={294}
                    alt="DXP"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:mt-[-200px] xl:mt-[-260px] 2xl:mt-[-310px]">
            <p className="grid grid-cols gap-y-2 content-end font-normal  text-black300 ">
              <p className="text-[20px] leading-[22px]">Founder/CEO Uto Tech JSC</p>
              <p className="text-[20px] leading-[22px]">Founder/CEO Utopia Eco Lodge</p>
              <p className="text-[20px] leading-[22px]">Founder/CEO tại Utopia Travel</p>
              <p className="text-[20px] leading-[22px]">Founder/CEO Uto Academy</p>
              <p className="text-[20px] leading-[22px]">Founder jGooooo</p>
              <p className="text-[20px] leading-[22px]">Inspirer and Speaker</p>
            </p>
            <div className="w-[30%] lg:ml-[10px] xl:ml-[90px] 2xl:ml-[150px]">
              <Image
                src={images.DXP01}
                placeholder="blur"
                alt="DXP"
                width={302}
                height={295}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-[40px] rounded-[7px] bg-blue_4F0 mt-[95px]">
        <div>
          <p className="font-normal leading-[30px] text-[20px] w-full text-black300">
            “Tôi sẽ không để cuộc đời này ép buộc tôi phải sống theo cách của nó, tôi sẽ là người
            đưa ra quyết định và lựa chọn tôi muốn sống thế nào. Và tôi tin rằng, chỉ cần bạn có ý
            chí đủ lớn, khát vọng đủ mạnh, kiên trì bền bỉ tới cùng, bạn có thể làm bất cứ điều gì
            bạn muốn trong đời này”
          </p>
        </div>
        <p className="text-right mt-1 leading-[30px] text-[20px] text-black300 font-semibold">
          Dương Xuân Phi
        </p>
      </section>
      <section className="mt-[27px]">
        <p className="font-normal text-[20px] leading-[30px] text-black300">
          Dương Xuân Phi sinh ra ở tỉnh Nam Định, sống tại thành phố Nha Trang (tỉnh Khánh Hòa), anh
          từng học Học viện Hàng không tại Thành phố Hồ Chí Minh. Khi đang học năm 2 của học viện,
          anh chọn lối rẽ khác và trải qua nhiều ngành nghề khác nhau. Tiếp đó, năm 2014, anh quyết
          định bỏ hết công việc ở TP. Hồ Chí Minh, anh đã cùng một người bạn thử thách bản thân bằng
          hành trình xuyên Việt chỉ với 1 triệu đồng khởi điểm. Trong suốt thời gian 1,5 năm xuyên
          Việt ấy, anh đạp xe hơn 18.000 km, sống tại 63 tỉnh, thành phố, làm đủ các nghề để hoàn
          thành thử thách và thực hiện 3 dự án cộng đồng : “Thư tay xuyên Việt”, Phim ngắn “Đi và
          Sống”, dự án “Tôi có một ước mơ”.
        </p>
      </section>
      <section className="grid grid-cols-2 mt-[55px]">
        <div className="w-full">
          <div className="w-full">
            <Image
              src={image.text}
              alt="DXP"
              layout="responsive"
              blurDataURL={image.text}
              placeholder="blur"
            />
          </div>
          <div className="w-1/3">
            <Image
              src={images.xedap}
              alt="xe đạp"
              width={120}
              height={73}
              layout="responsive"
              blurDataURL={image.xedap}
              placeholder="blur"
            />
          </div>
          <div className=" text-justify text-[20px] leading-[30px] mt-[18px] text-black300">
            Không đơn thuần là chỉ đi, đạp xe, ngao du, anh đã vạch sẵn cho mình những thử thách cần
            trải qua trong suốt hành trình hơn 4000km. Kho trải nghiệm của anh có tới 1000 trải
            nghiệm cần phải trải qua cực thú vị và đầy táo bạo. Bạn đã bao giờ nghĩ sẽ hôn một cô
            gái xa lạ trên đỉnh núi, tặng quà bất ngờ cho người lạ, hay thử bán vé số dạo, thử làm
            ăn xin trong 1 ngày, hoặc ngủ một đêm trong rừng nguyên sinh, ngủ trên cây, lặn biển
            ngắm san hô… Những ý tưởng kỳ lạ như vậy đã được anh thực hiện trong hành trình của
            mình.
          </div>
        </div>
        <div className="ml-[47px]">
          <div className="flex gap-x-[5px]">
            <div className="w-[63%]">
              <Image
                src={images.DXP_xedap01}
                alt="xe đạp"
                width={330}
                height={223}
                layout="responsive"
                placeholder="blur"
              />
            </div>
            <div className="w-[37%] flex items-end">
              <div className="w-full">
                <Image
                  src={images.DXP_trenbien01}
                  alt="DXP"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-x-[5px] mt-[5px] w-[63%] pr-[2.5px]">
              <div className="w-[38%]">
                <Image
                  src={images.DXP_trenui01}
                  alt="DXP"
                  width={125}
                  height={125}
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
              <div className="w-[62%]">
                <Image
                  src={images.DXP_trenui02}
                  alt="DXP"
                  width={198}
                  height={250}
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="font-[400] text-[20px] leading-[30px] text-justify mt-[30px] text-black300">
        Năm 2016, ở cuối cùng chuyến đi đó, anh đã tìm thấy một nơi mà không mấy ai nhìn ra tiềm
        năng của nó. Không đường, không điện, không nước, nhưng vẻ đẹp nguyên vẹn, hoang sơ. Anh nhớ
        ra hồi bé từng có 1 ước mơ xây 1 ngôi nhà nhỏ trên thảo nguyên và lúc đó nó lại sống dậy.
        Anh quyết định huy động vốn đầu tư và vay mượn để thực hiện xây dựng một khu nghỉ dưỡng dành
        cho những con người muốn hòa mình vào thiên nhiên, đất trời.
        <br /> Anh tổ chức và bán các tour trải nghiệm, dẫn tour, tư vấn định hướng cho các bạn trẻ,
        làm mentor, bán phòng của các khách sạn, mua bán bất động sản, đầu tư bitcoin… để kiếm thêm
        vốn cho việc xây dựng, mở rộng kinh doanh.
      </section>
      <section className="mt-[94px] w-full">
        <Image
          src={images.Utopia_02}
          alt="DXP"
          layout="responsive"
          blurDataURL={images.Utopia_02}
          placeholder="blur"
        />
      </section>
      <section className="mt-[30px] w-full">
        <div className="flex gap-7">
          <div className="w-2/3">
            <p className="font-normal text-black300 leading-[30px] text-[20px] ">
              Cuối cùng anh đã biến một nơi chưa ai biết đến, không đường, không điện, không nước
              trở thành một khu nghỉ dưỡng sinh thái hoang sơ, yên bình bậc nhất Tây Bắc - Utopia
              Eco Lodge. Với giá trị cốt lõi là thân thiện với thiên nhiên và con người. Đây có thể
              được coi là khu nghỉ dưỡng hoang sơ hiếm hoi còn sót lại ở Sapa.
              <br /> Anh tiếp tục xây dựng những tour trekking trải nghiệm sinh thái, tự mình dẫn
              tour, chia sẻ về triết lí sống với khách đến.
            </p>
          </div>
          <div className="relative w-1/3">
            <Image src={images.utopia_view} alt="DXP" layout="responsive" placeholder="blur" />
          </div>
        </div>
        <div className="flex w-full mt-10">
          <div className="w-[50%] mr-5 relative">
            <div className="absolute z-10 w-[70%] md:-top-7 xl:-top-10 2xl:-top-14">
              <Image
                src={image.text_2016}
                layout="responsive"
                alt="DXP"
                blurDataURL={image.text_2016}
                placeholder="blur"
              />
            </div>
            <div className="flex w-full h-full items-end gap-x-5">
              <div className="w-[56%]">
                <Image
                  src={images.Utopia_07}
                  layout="responsive"
                  alt="utopia"
                  width={284}
                  height={200}
                  placeholder="blur"
                />
              </div>
              <div className="w-[43.6%]">
                <Image
                  src={images.Utopia_03}
                  width={235}
                  height={356}
                  layout="responsive"
                  alt="utopia"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="w-[27%] mr-5 ">
            <div className="w-full -mt-5">
              <Image
                src={images.Utopia_04}
                alt="DXP"
                width={288}
                height={191}
                layout="responsive"
                placeholder="blur"
              />
            </div>
            <div className="w-[88%] float-right mt-5">
              <Image
                src={images.Utopia_05}
                alt="DXP"
                layout="responsive"
                width={249}
                height={160}
                placeholder="blur"
              />
            </div>
          </div>
          <div className="w-[21%]">
            <Image
              src={images.Utopia_06}
              alt="DXP"
              width={209}
              height={331}
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
        <section className="mt-[5px] flex justify-end">Hình ảnh Utopia Eco Lodge</section>
        <div className="mt-[50px]">
          <p className="font-normal text-[20px] leading-[30px] text-black300">
            Năm 2019 anh thôi tận hưởng cuộc sống thanh bình ở Utopia, anh khiến nhiều người bất ngờ
            khi chia tay bản Giàng Tả Chải để chọn Đà Nẵng làm nơi đặt những viên gạch đầu tiên phát
            triển ứng dụng mạng xã hội du lịch của người Việt.
          </p>
          <p className="font-normal text-[20px] mt-[20px] leading-[30px] text-black300">
            “Tôi luôn có khát vọng làm những điều lớn lao và mong muốn đưa Việt Nam vào bản đồ công
            nghệ thế giới. Tôi luôn muốn thử thách bản thân, với tôi, người trẻ phải viết nên câu
            chuyện của chính mình và chọn con đường khó để đi”, Dương Xuân Phi.
          </p>
        </div>
      </section>
      <section className="mt-[70px] grid grid-cols-2 gap-32">
        <div className="flex w-full relative items-end justify-end">
          <div className="absolute w-[65%] -bottom-0 left-0 z-10">
            <Image src={images.Uto_01} placeholder="blur" alt="DXP" layout="responsive" />
          </div>
          <div className="flex justify-end items-end w-[55%]">
            <div className="w-full">
              <div className="w-full mb-4">
                <Image
                  src={images.Uto_02}
                  placeholder="blur"
                  alt="DXP"
                  width={1}
                  height={1}
                  layout="responsive"
                />
              </div>
              <div className="w-[63%] float-right">
                <Image
                  src={images.Utop_03}
                  placeholder="blur"
                  alt="DXP"
                  width={183}
                  height={174}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="w-[90%]">
            <Image
              src={image.text_2020}
              layout="responsive"
              alt="DXP"
              blurDataURL={image.text_2020}
              placeholder="blur"
            />
          </div>
          <div className="mt-4">
            <p className="text-[48px] text-blue200 leading-[50px]">Uto Tech JSC</p>
          </div>
          <p className="font-normal text-[20px] leading-[30px] mt-14 text-black300">
            Tháng 2/2020, anh thành lập Công Ty Cổ Phần Uto Technology tại Đà Nẵng. Gần 2 năm thành
            lập, Uto Tech đã trở thành doanh nghiệp công nghệ phát triển nhanh bậc nhất tại Đà Nẵng
            với quy mô, chất lượng cũng như cách tổ chức chuyên nghiệp. Định giá công ty là 100 tỷ
            đồng, đã huy động 5 tỷ cho 5% cổ phần trong vòng gọi vốn đầu tiên trên Facebook.
          </p>
        </div>
      </section>
      <section className="mt-[70px]">
        <div className="flex gap-12 relative z-10">
          <div className="w-[57%]">
            <p className="text-[20px] font-normal leading-[30px] text-black300">
              Sau hơn 4 năm “thai nghén” ý tưởng và 1,5 năm nghiên cứu và phát triển, mạng xã hội du
              lịch jGooooo ra mắt vào ngày 8/8/2021. Sau 4 tháng ra mắt, với chiến lược ưu tiên phát
              triển sự ổn định của nền tảng trước khi phổ quát, ứng dụng jGooooo đã được đón nhận
              với gần 10.000 người dùng và nhiều đánh giá tích cực.
              <p className="text-[20px] font-normal leading-[30px] mt-[25px]">
                Đến thời điểm hiện tại, ứng dụng jGooooo là nền tảng “All In One“ duy nhất ở Việt
                Nam về du lịch, có thể xem là ứng dụng đầu tiên có hướng đi đó trên thế giới, đi
                ngược với cách phát triển sản phẩm thông thường, với mục tiêu trong vòng 20 năm giải
                quyết mọi bài toán của một tín đồ xê dịch.
              </p>
            </p>
          </div>
          <div className="w-[43%]">
            <div className="w-[90%] z-40">
              <Image src={images.jgooooo_01} placeholder="blur" alt="DXP" layout="responsive" />
            </div>
          </div>
        </div>
        <div className="flex relative z-0 justify-end items-center xl:mt-[-100px]">
          <div className="z-10 absolute w-[57%] pr-[24px] left-0">
            <Image
              src={images.jgooooo_02}
              placeholder="blur"
              alt="DXP"
              width={634}
              height={387}
              layout="responsive"
            />
          </div>
          <div className="w-[62%] aspect-[3/2] relative z-0 bg-blue100 float-right flex flex-col items-end">
            <div className="border-white border-r-4 absolute justify-self-end h-full mr-5"></div>
            <div className="w-[51%] mr-20 xl:mr-[100px] 2xl:mr-[125px] mt-[140px]">
              <div className="w-full">
                <Image
                  src={image.text_2021}
                  layout="responsive"
                  alt="DXP"
                  blurDataURL={image.text_2021}
                  placeholder="blur"
                />
              </div>
              <p className="font-semibold mt-2 xl:mt-5 text-[35px] xl:text-[48px] leading-[30px] text-bluebtn">
                jGooooo
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <p className="not-italic font-normal text-[20px] leading-[30px] text-black300">
            Song song với những công việc đó, anh còn thường xuyên tổ chức những buổi diễn thuyết,
            chia sẻ về tư duy, cuộc sống, làm mentor và nhận Coaching cho rất nhiều bạn trẻ. Chỉ qua
            một buổi trò chuyện với anh, có rất nhiều người đã thay đổi cả một cuộc đời. Nguồn năng
            lượng tích cực và tầm ảnh hưởng về tư duy của anh là vô cùng lớn. Với mong muốn giúp đỡ
            thêm được nhiều bạn trẻ hơn trên con đường tìm kiếm, khám phá bản thân mình, anh đang mở
            thêm những khoá học nhằm giúp định hướng tư duy và vạch ra kế hoạch chiến lược cho mỗi
            người. Để biết thêm chi tiết khoá học, xem
            <Link href={ROUTERS.COURSE_DETAIL} passHref>
              <a className="text-bluebtn not-italic cursor-pointer ml-[5px] font-normal text-[20px] leading-[30px] ">
                Tại đây
              </a>
            </Link>
          </p>
        </div>
      </section>
      <section className="mt-[28px]">
        <Image src={images.khoa_01} alt="DXP" placeholder="blur" layout="responsive" />
      </section>
      <section className="mt-[95px] mb-[70px] p-8 bg-white rounded-lg">
        <div className="w-full">
          <p className="font-normal leading-[30px] text-[20px] w-full text-black300">
            Ước mơ từ thuở nhỏ của tôi, cũng là nguồn cảm hứng lớn nhất trong đời tôi, chỉ là được
            trải nghiệm cuộc sống, được tận mắt nhìn thấy thế giới rộng lớn, đẹp đẽ, muôn hình vạn
            trạng này. Tôi không nghĩ mình ngông, tôi chỉ đang theo đuổi đam mê của mình.
          </p>
        </div>
        <p className="grid justify-items-end text-[20px] text-black300 font-semibold">
          Dương Xuân Phi
        </p>
      </section>
      <Photos className={""} />
    </div>
  );
}

export default memo(AboutMe);
