import { FeaturedNews1, FeaturedNews2 } from "../_components";
import { SearchInput } from "components";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/home/gallery/photos";
import Link from "next/link";
import React, { memo } from "react";

function SerachResult() {
  return (
    <div className="lg:container xl:px-[180px] px-5 mt-40 mx-auto pb-14">
      <div className="flex justify-between items-center gap-5">
        <h1 className="text-[40px] uppercase">báo chí</h1>
        <div className="flex-auto h-[1px] bg-graysearch"></div>
      </div>
      <div className="grid grid-cols-3 gap-12 mb-11 mt-[70px]">
        <div className="col-span-2">
          <div className="h-[400px] w-full bg-gray300 relative">
            <Image
              src={Images.img14}
              alt=""
              layout="fill"
              objectPosition={"center"}
              placeholder="blur"
              objectFit="cover"
            />
          </div>
          <article className="mb-9">
            <h1 className="font-semibold text-2xl text-darkblue mt-6">
              NHỮNG BÀI HỌC SÂU SẮC CẦN KHẮC CỐT GHI TÂM
            </h1>
            <p className="text-lg opacity-40 my-4">05/08/2019</p>
            <p className="text-lg leading-[30px] text-gray800">
              Người ta gọi tôi là &quot;gã điên&quot; bởi tôi thường xuyên có ý tưởng điên rồ, bởi
              tôi thường xuyên có ý tưởng điên rồ, Người ta gọi tôi là &quot;gã điên&quot; bởi tôi
              thường xuyên có ý tưởng điên rồ, bởi tôi thường xuyên có ý tưởng điên rồ,
            </p>
          </article>
          <FeaturedNews1 />
          <div className="flex justify-end items-center gap-[10px]">
            <Link href="">
              <a className="text-lg text-gray800">Xem thêm</a>
            </Link>
            <Image src={Icons.next} alt="icon" />
          </div>
        </div>
        <nav>
          <SearchInput placeholder="Tìm kiêm bài viết" />
          <FeaturedNews2 />
        </nav>
      </div>
    </div>
  );
}

export default memo(SerachResult);
