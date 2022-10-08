import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { COURSE_BANNER, COURSE_STATUS } from "constants/course.constant";
import { checkApiStatus } from "utils/common";
import { getColumns } from "./banner.config";
import Api from "services/api";
import React, { memo, useCallback, useEffect, useState } from "react";
import TableBanner from "components/table";

const BannerTable = () => {
  const [banner, setBanner] = useState<any>();
  const [filter, setFilter] = useState(COURSE_BANNER);

  useEffect(() => {
    getDataBanner();
  }, [filter]);

  const getDataBanner = async () => {
    try {
      const res: any = await Api.getCourseBanner(filter);
      if (checkApiStatus(res)) {
        setBanner(res?.data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const handleChangeFilter = (NewFilter: any) => {
    setFilter(NewFilter);
  };
  const handleChangeStatus = async (id: number, status: string) => {
    const showStatus = COURSE_STATUS.SHOW;
    const hideStatus = COURSE_STATUS.HIDE;
    try {
      const res: any = await Api.patchImage(
        id,
        status === (COURSE_STATUS.SHOW || null) ? { status: hideStatus } : { status: showStatus }
      );
      if (checkApiStatus(res)) {
        ToastSuccess("Bạn đã thay đổi trạng thái thành công");
        getDataBanner();
      } else {
        ToastError("Bạn đã thay dổi trạng thái thất bại");
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => onDelete(id) });
    },
    [filter]
  );
  const onDelete = async (id: number) => {
    try {
      const res = await Api.deleteImage(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Bạn đã xóa thành công");
        getDataBanner();
      } else {
        ToastError("Bạn đã xóa thất bại");
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  const Columns = getColumns(handleChangeStatus, handleDelete, filter);
  return (
    <div>
      <TableBanner
        columns={Columns}
        data={banner?.data}
        total={banner?.total}
        name={"Banner"}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
};

export default memo(BannerTable);
