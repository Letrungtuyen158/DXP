import ModalPhoto from "components/modal/photoModal";
import React, { memo } from "react";
import useModal from "hook/useModal";
let ModalInline: any = null;

const PhotoBtn = ({ photoUrl }: { photoUrl: string }) => {
  const { isShowing, toggle } = useModal();

  const _handleShowModal = () => {
    if (ModalInline == null) {
      ModalInline = require("components/modal").default;
    }

    toggle();
  };
  return (
    <>
      <button
        className="absolute flex top-0 w-full h-full items-center justify-center cursor-pointer"
        onClick={_handleShowModal}
      ></button>
      {isShowing && (
        <ModalInline isShowing={isShowing}>
          <ModalPhoto  photoUrl={photoUrl} urlBlur={""} />
        </ModalInline>
      )}
    </>
  );
};

export default memo(PhotoBtn);
