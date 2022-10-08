import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_SHARING_COMMENT } from "../sharing.constant";
import { STATUS_COMMENT } from "constants/Sharing.constant";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "./comment.config";
import { querySearch } from "./utils";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import SharingTable from "components/table/index";
let timeout: any;
function Comment() {
  const [filter, setFilter] = useState(FILTER_SHARING_COMMENT);
  const [comments, setComments] = useState<any>(null);

  useEffect(() => {
    getComment();
  }, [filter]);

  const handleChangeFilter = (NewFilter: any) => {
    setFilter(NewFilter);
  };

  const getComment = async () => {
    try {
      const res = await Api.getCommentSharing(filter);
      setComments(res?.data);
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => onDeleteComment(id) });
    },
    [filter]
  );

  const onChangeStatusComment = async (id: number, status: string) => {
    const statusShow = { status: STATUS_COMMENT.SHOW };
    const statusHide = { status: STATUS_COMMENT.HIDE };
    try {
      const res = await Api.patchStatusCommentById(
        id,
        status === STATUS_COMMENT.SHOW ? statusHide : statusShow
      );
      if (checkApiStatus(res)) {
        getComment();
        ToastSuccess("Thay đổi trạng thái thành công!");
      } else {
        ToastError(getErrorMessage("Thay đổi trạng thái thất bại!"));
      }
    } catch (error) {}
  };
  const onDeleteComment = async (id: number) => {
    try {
      const res = await Api.deleteCommentById(id);
      if (checkApiStatus(res)) {
        getComment();
        ToastSuccess("Bạn đã xóa thành công");
      } else {
        ToastError(getErrorMessage("Bạn đã xóa thất bại"));
      }
    } catch (error: any) {
      error.message;
    }
  };
  const onSearch = (value: any) => {
    if (value?.length >= 2) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setFilter(querySearch(value));
      }, 500);
    } else {
      setTimeout(() => {
        setFilter(FILTER_SHARING_COMMENT);
      }, 500);
    }
  };
  const columns = getColumns(onChangeStatusComment, handleDelete, filter);
  return (
    <div>
      <ContentHeader
        title={"Chia sẻ"}
        action={"Tạo mới"}
        searchHidden={false}
        placeholder="Họ tên / Email / Nội dung"
        onSearch={onSearch}
      >
        Bài viết
      </ContentHeader>
      <SharingTable
        columns={columns}
        data={comments?.data}
        total={comments?.total}
        name="Bài viết"
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(Comment);
