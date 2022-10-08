import Image from "next/image";
import Images from "styles/images/news";
import Link from "next/link";
import React, { memo } from "react";

function EditButton({ route }: { route: string }) {
  return (
    <Link href={`${route}`}>
      <a>
        <div className="bg-bluebtn rounded-sm flex items-center justify-center h-[30px] w-[30px]">
          <Image src={Images.editIcon} alt="utopia" width={18} height={18}></Image>
        </div>
      </a>
    </Link>
  );
}

export default memo(EditButton);
