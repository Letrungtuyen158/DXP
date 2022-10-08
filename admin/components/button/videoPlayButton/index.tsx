import { memo } from "react";
import Image from "next/image";
import Images from "styles/images/table";
import ModalVideo from "components/modal/videoModal";
import useModal from "hook/useModal";

let ModalInline: any = null;

const PlayVideoBtn = ({ videoUrl, thumbnail }: { videoUrl: string; thumbnail: string }) => {
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
      >
        <Image alt="Utopia Eco Lodge - At Home In Wild" src={Images.playIcon} />
      </button>
      {isShowing && (
        <ModalInline isShowing={isShowing}>
          <ModalVideo hide={toggle} videoUrl={videoUrl} thumbnail={thumbnail} />
        </ModalInline>
      )}
    </>
  );
};

export default memo(PlayVideoBtn);
