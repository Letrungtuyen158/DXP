import Image from "next/image";
import Images from "styles/images/news";
import React, { memo } from "react";

function ChangeTypeButton({ onClick, condition }: { onClick: () => void; condition: boolean }) {
  return (
    <button onClick={onClick}>
      <a>
        <div
          className={`${
            condition ? "bg-yellow-300" : "bg-gray-400"
          } rounded-sm flex items-center justify-center h-[30px] w-[30px]`}
        >
          <Image src={Images.starIcon} alt="utopia" width={18} height={18}></Image>
        </div>
      </a>
    </button>
  );
}

export default memo(ChangeTypeButton);
