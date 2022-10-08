import { ErrorMessage } from "formik";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import images from "styles/images/icon";

function FileInput({
  imgDefault,
  handleChangeFile,
  label,
  buttonName,
  idInput,
  name,
  accept,
  getIdImgsDelete,
  requireField,
}: {
  handleChangeFile: any;
  imgDefault?: any;
  label: string;
  buttonName: string;
  idInput: string;
  accept?: string;
  name?: string;
  getIdImgsDelete?: any;
  requireField?: boolean;
}) {
  const [img, setImg] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const [imageDefault, setImageDefault] = useState<any>(imgDefault);
  useEffect(() => {
    handleChangeFile(file);
  }, [file]);

  useEffect(() => {
    setImageDefault(imgDefault);
  }, [imgDefault]);

  const onChangeFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imgRender: any = URL.createObjectURL(file);
      setImg(imgRender);
      setFile(file);
    }
    getIdImgsDelete && getIdImgsDelete(imgDefault.id);
  };

  const onDeleteImgDefault = () => {
    setImageDefault(null);
    getIdImgsDelete && getIdImgsDelete(imgDefault.id);
  };
  const onDeletePrev = () => {
    setImg(null);
    setFile(null);
  };

  return (
    <div className=" w-[40%] mt-4">
      <span className="text-2xl font-semibold flex mb-1">
        {label}
        {requireField && <span className="ml-2 align-super text-red100">*</span>}
      </span>
      <div className="gap-x-14 flex">
        <label htmlFor={idInput} className="flex flex-col cursor-pointer">
          <div
            className={`mt-[10px] flex justify-center items-center gap-2 btn-file ${
              buttonName === "Thêm ảnh" ? "bg-darkbluebg" : "bg-black"
            }`}
          >
            <span>
              <Image src={images.imgIcon} alt="utopia" />
            </span>
            <p className="text-lg font-normal">{buttonName}</p>
          </div>

          {name && (
            <p className="pt-4 text-red100 italic font-medium">
              <ErrorMessage name={name} />
            </p>
          )}
        </label>

        <input type="file" id={idInput} hidden onChange={onChangeFile} accept={accept} />

        <div className="mt-[90px] relative">
          <div className="relative w-[217px] h-[217px] shadow-sm">
            {img && (
              <div>
                <Image
                  src={img}
                  alt="DXP"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={img}
                  objectPosition="center"
                />
                {!requireField && (
                  <div
                    className="absolute right-[-25px] top-[-25px] cursor-pointer"
                    onClick={onDeletePrev}
                  >
                    <Image src={images.removeIcon} alt="DXP" width={35} height={35} />
                  </div>
                )}
              </div>
            )}

            {!!imageDefault && !img && (
              <div>
                <Image
                  src={imageDefault.url}
                  alt="DXP"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={imageDefault.urlBlur}
                  objectPosition="center"
                />
                {!requireField && (
                  <div
                    className="absolute right-[-25px] top-[-25px] cursor-pointer"
                    onClick={onDeleteImgDefault}
                  >
                    <Image src={images.removeIcon} alt="DXP" width={35} height={35} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FileInput);
