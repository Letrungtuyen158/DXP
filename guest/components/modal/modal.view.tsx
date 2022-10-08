import Image from "next/image";
import React, { memo } from "react";

const Modal = ({ image, setImage }: { image: any; setImage: any }) => {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center z-20 bg-black bg-opacity-5 ease-out ${
        image ? "block" : "hidden"
      }`}
    >
      {image?.url && (
        <div className="z-10 ease-out">
          <Image
            alt="Utopia Eco Lodge - At Home In Wild"
            src={image?.url}
            blurDataURL={image?.urlBlur}
            placeholder="blur"
            objectFit="cover"
            width={650}
            height={500}
          />
        </div>
      )}
      <div
        className={`absolute inset-0 z-5 bg-black bg-opacity-70`}
        onClick={() => {
          setImage(null);
        }}
      />
    </div>
  );
};

export default memo(Modal);
