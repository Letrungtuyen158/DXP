import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_GALLERY_DEFAULT, querySearch } from "../utils";
import { IMAGE_STATUS } from "constants/galary.constants";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "./image.config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";
let timeout: any;
function Index() {
  const [images, setImage] = useState<any>([]);
  const [filter, setFilter] = useState<any>(FILTER_GALLERY_DEFAULT);

  const handleChangeFilter = (NewFilter: any) => {
    setFilter(NewFilter);
  };
  const changeStatus = async (id: number, status: string) => {
    const statusShow = { status: IMAGE_STATUS.SHOW };
    const statusHide = { status: IMAGE_STATUS.HIDE };
    try {
      const res: any = await Api.patchImage(
        id,
        status === IMAGE_STATUS.SHOW ? statusHide : statusShow
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
  const handleDeleteImage = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => onDelete(id) });
    },
    [filter]
  );
  const onDelete = async (id: number) => {
    try {
      const res: any = await Api.deleteImage(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá hình ảnh thành công");
        getData();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const columns: any = getColumns(changeStatus, handleDeleteImage, filter);

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
      const res: any = await Api.getImages(filter);
      setImage(res?.data);
    } catch (error: any) {
      ToastError(error?.message);
    }
  };

  return (
    <div>
      <ContentHeader
        title={"Gallery"}
        action={"Thêm ảnh mới"}
        actionLink={ROUTERS.IMAGE_CREATE}
        searchHidden={false}
        onSearch={onSearch}
        placeholder="Tên"
      >
        <div>Hình ảnh</div>
      </ContentHeader>
      <Table
        columns={columns}
        data={images?.data}
        total={images?.total}
        name={"HÌNH ẢNH"}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(Index);
