import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_ABOUME_DEFAULT, querySearch } from "./utils";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { getColumns } from "./config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Table from "components/table";
let timeout: any;
function ViewAboutMeTable() {
  const [data, setData] = useState<any>({});
  const [filter, setFilter] = useState<any>(FILTER_ABOUME_DEFAULT);
  useEffect(() => {
    getReview();
  }, [filter]);
  const handleChangeFilter = (newFilter: any) => {
    setFilter(newFilter);
  };
  const getReview = async () => {
    try {
      const res = await Api.getReviews(filter);
      if (checkApiStatus(res)) {
        setData(res.data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const deleteReview = async (id: number) => {
    try {
      const res: any = await Api.deleteReviews(id);
      Swal.showLoading();
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá bài viết thành công");
        getReview();
      } else {
        ToastError(res.data.error.name);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteReview(id) });
    },
    [filter]
  );

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
        setFilter(FILTER_ABOUME_DEFAULT);
      }, 500);
    }
  };
  const columns = getColumns({ handleDelete, filter });
  return (
    <div className="w-full mx-auto container px-10">
      <ContentHeader
        title={"Góc nhìn"}
        action={"Tạo mới"}
        actionLink={ROUTERS.VIEW_ABOUT_ME_CREATE}
        searchHidden={false}
        placeholder={"Tên / Nội dung"}
        onSearch={onSearch}
      >
        <p className="text-lg">Góc nhìn về tôi</p>
      </ContentHeader>
      <Table
        columns={columns}
        data={data?.data}
        total={data?.total}
        name={""}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(ViewAboutMeTable);
