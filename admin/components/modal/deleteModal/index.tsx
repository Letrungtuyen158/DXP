import React, { memo } from "react";

function DeleteModal({ hide, action, name }: { hide: Function; action: Function; name: string }) {
  const handleDelete = () => {
    action();
    hide();
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-black z-10 bg-opacity-20 flex w-screen justify-center items-center"
        onClick={() => hide()}
      ></div>
      <div className="bg-white px-20 z-20 m-auto fixed inset-0 py-11 text-center rounded-md w-fit h-fit">
        <p className="font-medium text-base mb-8">Bạn chắc chắn muốn xoá {name} này?</p>
        <div className="flex justify-between gap-10 items-center">
          <button className="btn-delete" onClick={handleDelete}>
            Xoá
          </button>
          <button className="btn-cancel" onClick={() => hide()}>
            Không
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(DeleteModal);
