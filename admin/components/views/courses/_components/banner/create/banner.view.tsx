import { Icons } from "styles/images/icons";
import ContentHeader from "components/layouts/content-header";
import Image from "next/image";
import React, { memo } from "react";

interface Iprops {
  imgPrev: any;
  onChangeFile: any;
  handleSubmit: () => void;
  path: string;
  handleRemove: Function;
  handleCancel: () => void;
  error: boolean;
}
function BannerView({
  imgPrev,
  onChangeFile,
  handleCancel,
  handleRemove,
  handleSubmit,
  path,
  error,
}: Iprops) {
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader title={"Khoá học"} searchHidden={true}>
        <p className="text-lg">Banner</p>
      </ContentHeader>
      <div className="mt-9">
        <h1 className=" text-[22px] font-semibold mb-3">Tải hình ảnh lên</h1>
        <label htmlFor="input-file">
          <input
            type="file"
            id="input-file"
            className="hidden"
            accept="image/*"
            onChange={onChangeFile}
          />
          <div className="h-12 w-full bg-white flex items-center justify-start rounded-md shadow-3xl cursor-pointer">
            <div className="bg-bluebtn w-[15%] rounded-l-md h-full flex justify-center items-center gap-3">
              <div className=" rounded-sm h-[22px] w-6 flex justify-center items-center gap-3">
                <Image src={Icons.imgIcon} alt="icon" />
              </div>
              <p className="text-lg text-white">Chọn ảnh</p>
            </div>
            {imgPrev.length > 0 && <p className="ml-4"> {path} </p>}
          </div>
          {error && <p className="text-[16px] text-redbg italic">Require</p>}
        </label>
        <div>
          <div className="flex justify-center mt-10">
            <div className="w-1/3 min-h-[250px] relative">
              {imgPrev.length > 0 && (
                <Image src={imgPrev[imgPrev.length - 1]} layout="fill" objectFit="contain" alt="" />
              )}
            </div>
          </div>
          <div className="flex w-full flex-wrap mt-14">
            {!!imgPrev &&
              imgPrev.map((img: any, i: number) => {
                return (
                  <div key={i} className="mr-3 w-24 h-16 relative">
                    <button
                      className="absolute -top-2 h-3 w-3 -right-1 z-10 cursor-pointer"
                      onClick={() => handleRemove(i)}
                    >
                      <Image alt="icon_edit" src={Icons.closeIcon} width={11} height={11} />
                    </button>
                    <Image
                      alt="icon_edit"
                      src={img}
                      layout="fill"
                      objectPosition={"center"}
                      objectFit="contain"
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex justify-start items-center gap-3 my-[50px]">
          <button className="btn-cancel" onClick={handleCancel}>
            Huỷ
          </button>
          <button className="btn-upload" onClick={handleSubmit}>
            Tải lên
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(BannerView);
