import { ROUTERS } from "constants/router.constant";
import Gallery from "components/photos";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import images from "styles/images/aboutMobi/index";

export default function AboutMeMobi() {
  return (
    <>
      <section className="mt-[100px] w-full">
        <div className="flex justify-center w-full">
          <div className="w-[36.8%]">
            <Image
              src={images.DXP_01}
              width={138}
              height={162}
              layout="responsive"
              alt="DXP"
              placeholder="blur"
            />
          </div>
          <div className="ml-[20px] mt-[15px] w-[45.3%]">
            <Image
              src={images.DXP_02}
              width={170}
              height={214}
              alt="DXP"
              placeholder="blur"
              layout="responsive"
            />
          </div>
          <div className="w-[11%] flex items-end">
            <div className="w-full relative ml-[-15px]">
              <Image
                src={images.duongxuanphi_text}
                width={44}
                height={126}
                layout="responsive"
                alt="DXP"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="mt-[-114px] ml-[-60px] w-[34%]">
            <Image src={images.DXP_03} width={128} height={150} alt="DXP" layout="responsive" />
          </div>
        </div>
        <div className="font-normal mt-8 text-[18px] grid gap-2 leading-[24px] mx-4 text-black300">
          <p>Founder/CEO Uto Tech JSC</p>
          <p>Founder/CEO Utopia Eco Lodge</p>
          <p>Founder/CEO tại Utopia Travel</p>
          <p>Founder/CEO Uto Academy</p>
          <p>Founder jGooooo</p>
          <p>Inspirer and Speaker</p>
        </div>
        <div className="p-4 bg-blue_4F0 mt-6">
          <p className="font-normal text-[18px] leading-[24px] text-black300">
            “Tôi sẽ không để cuộc đời này ép buộc tôi phải sống theo cách của nó, tôi sẽ là người
            đưa ra quyết định và lựa chọn tôi muốn sống thế nào. Và tôi tin rằng, chỉ cần bạn có ý
            chí đủ lớn, khát vọng đủ mạnh, kiên trì bền bỉ tới cùng, bạn có thể làm bất cứ điều gì
            bạn muốn trong đời này”
          </p>
          <p className="text-right font-semibold text-[18px] text-black300">Dương Xuân Phi</p>
        </div>
        <div>
          <p className="p-4 font-normal text-[18px] leading-[24px] text-black300">
            Dương Xuân Phi sinh ra ở tỉnh Nam Định, sống tại thành phố Nha Trang (tỉnh Khánh Hòa),
            anh từng học Học viện Hàng không tại Thành phố Hồ Chí Minh. Khi đang học năm 2 của học
            viện, anh chọn lối rẽ khác và trải qua nhiều ngành nghề khác nhau. <br />
            <span className="block mt-2">
              Tiếp đó, năm 2014, anh quyết định bỏ hết công việc ở TP. Hồ Chí Minh, anh đã cùng một
              người bạn thử thách bản thân bằng hành trình xuyên Việt chỉ với 1 triệu đồng khởi
              điểm. Trong suốt thời gian 1,5 năm xuyên Việt ấy, anh đạp xe hơn 18.000 km, sống tại
              63 tỉnh, thành phố, làm đủ các nghề để hoàn thành thử thách và thực hiện 3 dự án cộng
              đồng : {"“"}Thư tay xuyên Việt{"”"}, Phim ngắn {"“"}Đi và Sống{"”"}, dự án {"“"}Tôi có
              một ước mơ{"”"}.
            </span>
          </p>
        </div>
        <div className="w-full px-4 justify-center items-center">
          <Image src={images.text} alt="DXP" layout="responsive" width={344} height={78} />
          <div className="w-[30%]">
            <Image src={images.xedap} alt="DXP" layout="responsive" width={120} height={73} />
          </div>
        </div>
        <div className="p-4 mt-[-5px]">
          <p className="text-[18px] leading-[24px] font-normal text-black300">
            Không đơn thuần là chỉ đi, đạp xe, ngao du, anh đã vạch sẵn cho mình những thử thách cần
            trải qua trong suốt hành trình hơn 4000km. Kho trải nghiệm của anh có tới 1000 trải
            nghiệm cần phải trải qua cực thú vị và đầy táo bạo. Bạn đã bao giờ nghĩ sẽ hôn một cô
            gái xa lạ trên đỉnh núi, tặng quà bất ngờ cho người lạ, hay thử bán vé số dạo, thử làm
            ăn xin trong 1 ngày, hoặc ngủ một đêm trong rừng nguyên sinh, ngủ trên cây, lặn biển
            ngắm san hô… Những ý tưởng kỳ lạ như vậy đã được anh thực hiện trong hành trình của
            mình.
          </p>
        </div>
        <section className="">
          <div className="w-full">
            <div className="flex w-full items-end">
              <div className="w-3/5">
                <Image
                  src={images.dxp_06}
                  width={236}
                  height={166}
                  layout="responsive"
                  alt="DXP"
                  placeholder="blur"
                />
              </div>
              <div className="w-2/5 ml-1">
                <Image
                  src={images.dxp_08}
                  width={139}
                  height={102}
                  layout="responsive"
                  alt="DXP"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex mt-2 w-3/5">
              <div className="w-2/5">
                <Image
                  src={images.dxp_07}
                  width={90}
                  layout="responsive"
                  height={90}
                  alt="DXP"
                  placeholder="blur"
                />
              </div>
              <div className="w-3/5 ml-1">
                <Image
                  src={images.dxp_05}
                  width={142}
                  layout="responsive"
                  height={179}
                  alt="DXP"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="px-4 mt-3">
            <p className="text-[18px] leading-[24px] font-normal text-black300">
              Năm 2016, ở cuối cùng chuyến đi đó, anh đã tìm thấy một nơi mà không mấy ai nhìn ra
              tiềm năng của nó. Không đường, không điện, không nước, nhưng vẻ đẹp nguyên vẹn, hoang
              sơ. Anh nhớ ra hồi bé từng có 1 ước mơ xây 1 ngôi nhà nhỏ trên thảo nguyên và lúc đó
              nó lại sống dậy. Anh quyết định huy động vốn đầu tư và vay mượn để thực hiện xây dựng
              một khu nghỉ dưỡng dành cho những con người muốn hòa mình vào thiên nhiên, đất trời.
              <br />
              <span className="mt-2 block">
                Anh tổ chức và bán các tour trải nghiệm, dẫn tour, tư vấn định hướng cho các bạn
                trẻ, làm mentor, bán phòng của các khách sạn, mua bán bất động sản, đầu tư bitcoin…
                để kiếm thêm vốn cho việc xây dựng, mở rộng kinh doanh.
              </span>
            </p>
          </div>
          <div className="w-full">
            <Image src={images.utopia_01} layout="responsive" width={344} height={88} alt="DXP" />
          </div>

          <div className="px-4 mt-3">
            <p className="text-[18px] leading-[24px] font-normal text-black300">
              Cuối cùng anh đã biến một nơi chưa ai biết đến, không đường, không điện, không nước
              trở thành một khu nghỉ dưỡng sinh thái hoang sơ, yên bình bậc nhất Tây Bắc - Utopia
              Eco Lodge. Với giá trị cốt lõi là thân thiện với thiên nhiên và con người. Đây có thể
              được coi là khu nghỉ dưỡng hoang sơ hiếm hoi còn sót lại ở Sapa. Anh tiếp tục xây dựng
              những tour trekking trải nghiệm sinh thái, tự mình dẫn tour, chia sẻ về triết lí sống
              với khách đến.
            </p>
          </div>
          <div className="w-[85%] px-4 mt-5 float-right">
            <Image src={images.text_2016} layout="responsive" width={292} height={115} alt="DXP" />
          </div>

          <div className="flex w-full pt-[15px] relative">
            <div className="w-[56%] absolute z-10 bottom-0">
              <div className="">
                <Image
                  src={images.uto_1}
                  layout="responsive"
                  width={209}
                  height={138}
                  alt="utopia"
                />
              </div>
              <div className="mt-[10px]">
                <Image
                  src={images.uto_3}
                  layout="responsive"
                  width={209}
                  height={111}
                  alt="utopia"
                />
              </div>
              <div className="mt-[10px] w-2/3">
                <Image
                  src={images.uto_5}
                  layout="responsive"
                  width={136}
                  height={220}
                  alt="utopia"
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-end">
              <div className="w-[73%] flex flex-col items-end">
                <div className="w-full">
                  <Image
                    src={images.uto_2}
                    layout="responsive"
                    width={265}
                    height={186}
                    alt="utopia"
                  />
                </div>
                <div className="w-[57%] mt-[10px]">
                  <Image
                    src={images.uto_4}
                    layout="responsive"
                    width={150}
                    height={235}
                    alt="utopia"
                  />
                </div>
                <div className="w-[82%] mt-[10px]">
                  <Image
                    src={images.uto_6}
                    layout="responsive"
                    width={224}
                    height={143}
                    alt="utopia"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-sm text-right p-4">Hình ảnh Utopia Eco Lodge</div>

          <div className="px-4">
            <p className="text-[18px] leading-[24px] font-normal text-black300">
              Năm 2019 anh thôi tận hưởng cuộc sống thanh bình ở Utopia, anh khiến nhiều người bất
              ngờ khi chia tay bản Giàng Tả Chải để chọn Đà Nẵng làm nơi đặt những viên gạch đầu
              tiên phát triển ứng dụng mạng xã hội du lịch của người Việt. <br />{" "}
              <span className="block mt-2">
                “Tôi luôn có khát vọng làm những điều lớn lao và mong muốn đưa Việt Nam vào bản đồ
                công nghệ thế giới. Tôi luôn muốn thử thách bản thân, với tôi, người trẻ phải viết
                nên câu chuyện của chính mình và chọn con đường khó để đi”, Dương Xuân Phi.
              </span>
            </p>
          </div>

          <div className="w-[85%] px-4 mt-5 float-right">
            <Image src={images.text_2020} layout="responsive" width={292} height={115} alt="DXP" />
            <p className="text-blue200 text-right text-[24px] leading-[28px] font-normal mt-4">
              Uto Tech JSC
            </p>
          </div>

          <div className="mt-8">
            <div className="ml-[170px]">
              <Image src={images.uto_01} alt="uto" placeholder="blur" />
            </div>
            <div className="flex">
              <div className="mt-[-78px]">
                <Image src={images.uto_02} alt="uto" placeholder="blur" />
              </div>
              <div className="mt-2">
                <Image src={images.uto_03} alt="uto" placeholder="blur" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="p-4">
            <p className="text-[18px] leading-[24px] font-normal text-black300">
              Tháng 2/2020, anh thành lập Công Ty Cổ Phần Uto Technology tại Đà Nẵng. Gần 2 năm
              thành lập, Uto Tech đã trở thành một trong những doanh nghiệp công nghệ phát triển
              nhanh bậc nhất tại Đà Nẵng với quy mô, chất lượng cũng như cách tổ chức chuyên nghiệp.
              Định giá công ty là 100 tỷ đồng, đã huy động 5 tỷ cho 5% cổ phần trong vòng gọi vốn
              đầu tiên trên Facebook.
            </p>
          </div>
          <div className="w-[85%] p-4 float-left">
            <Image src={images.text_2021} layout="responsive" width={249} height={75} alt="DXP" />
          </div>
          <div>
            <Image src={images.jgooooo_01} alt="Jgooooo" placeholder="blur" />
          </div>
          <div className="mt-1 px-4">
            <p className="text-[18px] leading-[24px] font-normal ">
              Sau hơn 4 năm “thai nghén” ý tưởng và 1,5 năm nghiên cứu và phát triển, mạng xã hội du
              lịch jGooooo ra mắt vào ngày 8/8/2021. Sau 4 tháng ra mắt, với chiến lược ưu tiên phát
              triển sự ổn định của nền tảng trước khi phổ quát, ứng dụng jGooooo đã được đón nhận
              với gần 10.000 người dùng và nhiều đánh giá tích cực.
              <br />
              <span className="block mt-4">
                Đến thời điểm hiện tại, ứng dụng jGooooo là nền tảng “All In One“ duy nhất ở Việt
                Nam về du lịch, có thể xem là ứng dụng đầu tiên có hướng đi đó trên thế giới, đi
                ngược với cách phát triển sản phẩm thông thường, với mục tiêu trong vòng 20 năm giải
                quyết mọi bài toán của một tín đồ xê dịch.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <Image src={images.jgooooo_02} alt="jgooooo" placeholder="blur" />
          </div>
          <div className="mt-4 px-4">
            <p className="text-[18px] leading-[24px] font-normal">
              Song song với những công việc đó, anh còn thường xuyên tổ chức những buổi diễn thuyết,
              chia sẻ về tư duy, cuộc sống, làm mentor và nhận Coaching cho rất nhiều bạn trẻ. Chỉ
              qua một buổi trò chuyện với anh, có rất nhiều người đã thay đổi cả một cuộc đời. Nguồn
              năng lượng tích cực và tầm ảnh hưởng về tư duy của anh là vô cùng lớn.
              <br /> Với mong muốn giúp đỡ thêm được nhiều bạn trẻ hơn trên con đường tìm kiếm, khám
              phá bản thân mình, anh đang mở thêm những khoá học nhằm giúp định hướng tư duy và vạch
              ra kế hoạch chiến lược cho mỗi người.
              <br /> Để biết thêm chi tiết khoá học, xem{" "}
              <span>
                <Link href={ROUTERS.COURSES} passHref>
                  <a className="text-sky">Tại đây</a>
                </Link>
              </span>
            </p>
          </div>
          <div className="mt-4">
            <Image src={images.utotech} alt="jgooooo" placeholder="blur" />
          </div>
        </section>

        <div className="mt-5 px-4">
          <p className="text-[18px] leading-[24px] font-normal">
            Ước mơ từ thuở nhỏ của tôi, cũng là nguồn cảm hứng lớn nhất trong đời tôi, chỉ là được
            trải nghiệm cuộc sống, được tận mắt nhìn thấy thế giới rộng lớn, đẹp đẽ, muôn hình vạn
            trạng này. Tôi không nghĩ mình ngông, tôi chỉ đang theo đuổi đam mê của mình.
          </p>
          <div className="ml-[210px] mt-4">
            <p className="font-semibold text-[18px] text-right leading-[24px] text-black300">
              Dương Xuân Phi
            </p>
          </div>
        </div>
        <Gallery className={""} showDots={false} />
      </section>
    </>
  );
}
