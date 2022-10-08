import Image from "next/image";
import Images from "styles/images/news";
import React, { memo } from "react";

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}>
      <div className="bg-redbg rounded-sm flex items-center justify-center h-[30px] w-[30px]">
        <Image src={Images.deleteIcon} alt="utopia" width={18} height={18}></Image>
      </div>
    </button>
  );
}

export default memo(DeleteButton);
