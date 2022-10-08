import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_SHARING } from "../sharing.constant";
import { ROUTERS } from "constants/router.constant";
import { STATUS_POST } from "constants/Sharing.constant";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "./post.config";
import { querySearch } from "./utils";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import SharingTable from "components/table/index";
let timeout: any;
function Posts() {
  const [posts, setPosts] = useState<any>(null);
  const [filter, setFilter] = useState(FILTER_SHARING);

  useEffect(() => {
    getPostSharing();
  }, [filter]);

  const handleChangeFilter = (NewFilter: any) => {
    setFilter(NewFilter);
  };

  const getPostSharing = async () => {
    try {
      const data = await Api.getPostSharing(filter);
      setPosts(data?.data);
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => onDeletePost(id) });
    },
    [filter]
  );

  const onChangeStatusPost = async (id: number, status: string) => {
    const statusShow = { status: STATUS_POST.SHOW };
    const statusHide = { status: STATUS_POST.HIDE };
    try {
      const res = await Api.patchStatusSharingById(
        id,
        status === STATUS_POST.SHOW ? statusHide : statusShow
      );

      if (checkApiStatus(res)) {
        getPostSharing();
        ToastSuccess("Bạn đã thay đổi thành công");
      } else {
        ToastError(getErrorMessage("Bạn đã thay đổi thất bại"));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const onDeletePost = async (id: number) => {
    try {
      const res = await Api.deletePostSharingById(id);
      if (checkApiStatus(res)) {
        getPostSharing();
        ToastSuccess("Xóa thành công!");
      } else {
        ToastError(getErrorMessage("Bạn đã xóa thất bại"));
      }
    } catch (error: any) {
      error?.message;
    }
  };
  const columns = getColumns(onChangeStatusPost, handleDelete, filter);
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
        setFilter(FILTER_SHARING);
      }, 500);
    }
  };
  return (
    <div>
      <ContentHeader
        title={"Chia sẻ"}
        action={"Tạo mới"}
        actionLink={ROUTERS.POST_CREATE}
        searchHidden={false}
        onSearch={onSearch}
        placeholder="Nội dung / Tiêu đề"
      >
        Bài viết
      </ContentHeader>
      <SharingTable
        columns={columns}
        data={posts?.data}
        total={posts?.total}
        name="Bài viết"
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(Posts);
