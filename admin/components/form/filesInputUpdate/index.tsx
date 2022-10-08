import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import images from "styles/images/review";

interface Iprops {
  handleChangeFile: Function;
  accept: string;
  imagesDefault?: any;
  getValueDelete?: Function;
  title?: string;
}
function FileInput(props: Iprops) {
  const { handleChangeFile, accept, imagesDefault, getValueDelete, title = "Hình ảnh" } = props;
  const [imgsDefault, setImgDefault] = useState<any>(imagesDefault);
  const [imgs, setImgs] = useState([]);
  const [imgsPre, setImgPre] = useState([]);
  const onChangeFile = (e: any) => {
    const files = e.target.files;
    const result: any = Object.values(files).map((item) => item);
    setImgs(imgs.concat(result));
  };

  useEffect(() => {
    setImgDefault(imagesDefault);
  }, [imagesDefault]);

  useEffect(() => {
    showFiles(imgs);
    handleChangeFile(imgs);
  }, [imgs]);

  const showFiles = (imgs: any) => {
    const prevList: any = imgs.map((item: any) => {
      return URL.createObjectURL(item);
    });
    setImgPre(prevList);
  };
  const handleRemove = (i: any) => {
    const newImage = [...imgsPre];
    newImage.splice(i, 1);
    setImgPre(newImage);
    const fileList: any = [...imgs];
    fileList.splice(i, 1);
    setImgs(fileList);
  };

  const handleRemoveFileDefault = (i: any) => {
    const newImage = [...imgsDefault];
    newImage.splice(i, 1);
    setImgDefault(newImage);
    getValueDelete && getValueDelete(imgsDefault[i].id);
  };
  return (
    <div>
      <div className="flex flex-col mb-3 mt-10">
        <label className="font-semibold mb-2 text-2xl">{title}</label>
        <div className="h-11">
          <div className="flex">
            <label htmlFor="file-upload" className="custom-file-upload font-medium h-11 text-white">
              <div className="justify-center h-11 bg-black  w-32 flex items-center rounded cursor-pointer">
                <div className="relative flex  ">
                  <Image alt="icon_image" src={images.icon_image} width={19} height={20} />
                </div>
                <span className="ml-2">Chọn ảnh</span>
              </div>
            </label>
          </div>
          <input
            onChange={onChangeFile}
            className="hidden"
            id="file-upload"
            type="file"
            multiple
            accept={accept}
          />
        </div>
      </div>
      <div className="flex mb-3 gap-2 w-full mt-10 flex-wrap">
        {imgsDefault &&
          imgsDefault !== [] &&
          imgsDefault?.map((img: any, i: number) => {
            return (
              <div key={i} className="w-24 h-16 relative">
                <div
                  className="absolute -top-2 h-3 w-3 -right-1 z-10 cursor-pointer"
                  onClick={() => handleRemoveFileDefault(i)}
                >
                  <Image alt="icon_edit" src={images.delete_icon} width={22} height={22} />
                </div>
                <Image
                  alt="icon_edit"
                  src={img.url}
                  layout="fill"
                  objectPosition={"center"}
                  objectFit="cover"
                />
              </div>
            );
          })}

        {imgsPre &&
          imgsPre.map((img: any, i: number) => {
            return (
              <div key={i} className="mr-2 w-24 h-16 relative">
                <div
                  className="absolute -top-2 h-3 w-3 -right-1 z-10 cursor-pointer"
                  onClick={() => handleRemove(i)}
                >
                  <Image alt="icon_edit" src={images.delete_icon} width={22} height={22} />
                </div>
                <Image
                  alt="icon_edit"
                  src={img}
                  layout="fill"
                  objectPosition={"center"}
                  objectFit="cover"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default memo(FileInput);
