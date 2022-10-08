import React, { memo } from "react";

const DeleteModal = (
    { onCancel,
        onDeleteBooking }:
        {
            onCancel: any,
            onDeleteBooking: any
        }) => {

    return (
        <>
            <div className="inset-0 confirmDeleteBox z-20 fixed bg-white flex justify-center items-center m-auto flex-col rounded-md">
                <p className="font-medium	mb-3 text-1xl"> Bạn chắc chắn muốn xoá bài viết này? </p>
                <div className="flex flex-row">
                    <button
                        className="text-white w-36 h-8 rounded-md mr-4 bg-red-600 flex items-center justify-center"
                        onClick={onDeleteBooking}
                    >
                        Có
                    </button>
                    <button
                        className="w-36 h-8 rounded-md border border-black"
                        onClick={onCancel}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </>
    )
}

export default memo(DeleteModal)