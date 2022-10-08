import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_GALLERY_DEFAULT, querySearch } from "../utils";
import { ROUTERS } from "constants/router.constant";
import { VIDEO_STATUS } from "constants/galary.constants";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "./video.config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";
let timeout: any;
function Index() {
  const [videos, setVideos] = useState<any>([]);
  const [filter, setFilter] = useState<any>(FILTER_GALLERY_DEFAULT);

  const handleChangeFilter = (NewFilter: any) => {
    setFilter(NewFilter);
  };
  const changeStatus = async (id: number, status: string) => {
    const statusShow = { status: VIDEO_STATUS.SHOW };
    const statusHide = { status: VIDEO_STATUS.HIDE };
    try {
      const res: any = await Api.patchVideo(
        id,
        status === VIDEO_STATUS.SHOW ? statusHide : statusShow
      );
      if (checkApiStatus(res)) {
        ToastSuccess("Thay đổi trạng thái thành công");
        getData();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const handleDeleteVideo = useCallback((id: number) => {
    AlertConfirm({ onOk: () => onDelete(id) });
  }, []);
  const onDelete = async (id: number) => {
    try {
      const res: any = await Api.deleteVideo(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá Video thành công");
        getData();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const columns: any = getColumns(changeStatus, handleDeleteVideo, filter);
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
        setFilter(FILTER_GALLERY_DEFAULT);
      }, 500);
    }
  };
  useEffect(() => {
    getData();
  }, [filter]);
  const getData = async () => {
    try {
      const res: any = await Api.getVideos(filter);
      setVideos(res?.data);
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  return (
    <div>
      <ContentHeader
        title={"Gallery"}
        action={"Thêm video mới"}
        actionLink={ROUTERS.VIDEO_CREATE}
        searchHidden={false}
        onSearch={onSearch}
        placeholder="Tên Video"
      >
        <div>Video</div>
      </ContentHeader>
      <Table
        columns={columns}
        data={videos?.data}
        total={videos?.total}
        name={"VIDEO"}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(Index);
