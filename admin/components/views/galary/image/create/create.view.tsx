import { IMAGE_STATUS } from "constants/galary.constants";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import images from "styles/images/icon";

interface Iprops {
  onSubmit: Function;
}
function Index(props: Iprops) {
  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [checked, setChecked] = useState(true);
  const router = useRouter();
  const [data, setData] = useState<any>({
    file: null,
    status: "SHOW",
    displayName: "",
  });
  useEffect(() => {
    return () => {
      data.file && URL.revokeObjectURL(data?.file?.prev);
    };
  }, [data.file]);

  const onChangeFile = (e: any) => {
    const file: any = e.target.files[0];
    if (file) {
      file.prev = URL.createObjectURL(file);
      setData({
        ...data,
        file: file,
      });
      setError(false);
    }
  };
  const onChangeStatus = (e: any) => {
    setChecked(!checked);
    setData({
      ...data,
      status: e.target.value,
    });
  };
  const onChanggeName = (e: any) => {
    setData({
      ...data,
      displayName: e.target?.value,
    });
    !e.target.value.length ? setErrorName(true) : setErrorName(false);
  };
  const handleCancel = () => {
    router.replace("/galary/image");
  };
  const handleSubmit = () => {
    data.file ? props?.onSubmit(data) : setError(true);
  };
  return (
    <div>
      <div className="font-semibold text-[20px]">Tải hình ảnh lên</div>
      <form>
        <input id="input-image" type="file" accept="image/*" hidden onChange={onChangeFile} />
        <label htmlFor="input-image">
          <div
            className={`cursor-pointer mt-[19px] flex justify-center items-center gap-3 btn-file bg-black`}
          >
            <span>
              <Image src={images.imgIcon} alt="utopia" />
            </span>
            <p className="text-lg font-normal">Chọn ảnh</p>
          </div>
        </label>

        {data?.file && (
          <div className="w-full flex justify-center mt-10">
            <Image
              src={data?.file.prev}
              width={500}
              height={300}
              objectFit="cover"
              objectPosition="center"
              alt="admin"
            />
          </div>
        )}
        <div className="mt-[27px]">
          <label className="text-[18px] font-semibold leading-[30px] ">Tên ảnh*</label>
          <br />
          <input
            className="mt-[10px] w-full h-[47px] px-6 drop-shadow-xl outline-none  rounded-lg"
            type="text"
            placeholder="Nhập tên"
            onChange={onChanggeName}
            value={data?.displayName}
          />
          {errorName && <p className="text-[16px] mt-4 text-redbg italic">Require</p>}
        </div>

        {error && <p className="text-[16px] text-redbg italic">Require</p>}

        <div className="ml-[25px] mt-[55px] font-semibold text-[16px]">
          <div className="flex items-center mt-[12px] ">
            <input
              className="cursor-pointer w-6 h-6"
              type="radio"
              name="status"
              value={IMAGE_STATUS.SHOW}
              onChange={onChangeStatus}
              checked={checked}
            />
            <p className="ml-[17px]">Hiển thị</p>
          </div>
          <div className="flex items-center mt-[12px]">
            <input
              className="cursor-pointer w-6 h-6"
              type="radio"
              name="status"
              value={IMAGE_STATUS.HIDE}
              onChange={onChangeStatus}
              checked={!checked}
            />
            <p className="ml-[17px]">Ẩn</p>
          </div>
        </div>
        <div className="gap-[25px] flex mt-[25px]">
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Huỷ
          </button>
          <div
            className="btn-upload flex items-center justify-center cursor-pointer"
            onClick={handleSubmit}
          >
            Tải lên
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(Index);
