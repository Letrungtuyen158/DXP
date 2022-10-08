import { STATUS, VALUE_SELECT } from "constants/contact.constants";
import Image from "next/image";
import React, { memo, useState } from "react";
import images from "styles/images/contacts";

const ChangeStatus = ({
  onChangeStatus,
  id,
  status,
  listItems,
}: {
  id: number;
  onChangeStatus: any;
  status: string;
  listItems: any;
}) => {
  const [showOption, setShowOption] = useState<boolean>(false);
  const handlerChangeStatus = (idBooking: number, value: string) => {
    if (status !== value) onChangeStatus(idBooking, value);
  };

  return (
    <div className="contactList relative flex justify-center">
      <div
        className="flex justify-between gap-x-2 border px-1 rounded-[4px] shadow-sm shadow-grayborder border-grayborder cursor-pointer w-[112px]"
        onClick={() => setShowOption(!showOption)}
      >
        <div className="w-full">
          <p
            className={`font-medium ${status !== STATUS.DONE ? "text-orange100" : "text-gray999"}`}
          >
            {status === STATUS.DONE ? VALUE_SELECT.STATUS_DONE : VALUE_SELECT.STATUS_PENDING}
            <span className="relative top-[-1px] left-[4px]">
              <Image src={images.arrowDown} width={8} height={6} alt="arrow" />
            </span>
          </p>

          {showOption && (
            <div className="bg-white absolute right-[0.2px] top-[-3px] left-0 border rounded-[2px] shadow-sm shadow-grayborder border-grayborder mx-auto z-20 w-[112px]">
              {listItems.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="hover:bg-slate-100 first:text-orange100 last:border-t last:border-grayborder font-medium last:text-gray999"
                    onClick={() => {
                      handlerChangeStatus(id, item.value);
                    }}
                  >
                    {item.content}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {showOption && (
        <div className="fixed inset-0 z-10" onClick={() => setShowOption(!showOption)} />
      )}
    </div>
  );
};
export default memo(ChangeStatus);
