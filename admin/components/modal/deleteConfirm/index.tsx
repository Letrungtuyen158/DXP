import React, { memo } from "react";
import styles from "components/views/review/list/review.module.scss";

function deleteConfirm({ isShowing, hide, onDelete }: any) {
  return (
    <div className={`${isShowing ? "flex" : "hidden"}`}>
      <div
        className="inset-0 z-10 fixed bg-opacity-20 bg-black flex justify-center items-center"
        onClick={hide}
      ></div>
      <div
        className={`inset-0 h-40 z-20 fixed bg-white flex justify-center items-center m-auto flex-col rounded-md ${styles.modal_delete} `}
      >
        <p className="font-medium	mb-3 text-1xl"> Bạn chắc chắn muốn xoá bài viết này? </p>
        <div className="flex flex-row">
          <div
            className="text-white w-36 h-8 rounded-md mr-4 h-10 bg-red-500 flex items-center justify-center cursor-pointer"
            onClick={onDelete}
          >
            Có
          </div>
          <div
            className="text-white w-36 h-8 rounded-md h-10 bg-gray-500 flex items-center justify-center cursor-pointer "
            onClick={hide}
          >
            Không
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(deleteConfirm);
