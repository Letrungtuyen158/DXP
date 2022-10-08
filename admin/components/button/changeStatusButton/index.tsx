import Image from "next/image";
import Images from "styles/images/news";
import React, { memo } from "react";

function ChangeStatusButton({ onClick, condition }: { onClick: () => void; condition: boolean }) {
  return (
    <button onClick={onClick}>
      <a>
        {condition ? (
          <div className="bg-green100 rounded-sm flex justify-center items-center h-[30px] w-[30px]">
            <Image src={Images.viewIcon} alt="utopia" width={18} height={18}></Image>
          </div>
        ) : (
          <div className="bg-gray300 rounded-sm flex justify-center items-center h-[30px] w-[30px]">
            <Image src={Images.hideViewIcon} alt="utopia" width={18} height={18}></Image>
          </div>
        )}
      </a>
    </button>
  );
}

export default memo(ChangeStatusButton);
