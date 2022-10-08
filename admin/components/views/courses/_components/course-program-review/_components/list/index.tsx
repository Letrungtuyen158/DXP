import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_REVIEW_DEFAULT, querySearch } from "./utils";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { getColumns } from "./config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";
let timeout: any;
function CourseReviewTable() {
  const [reviews, setReviews] = useState<any>([]);
  const [filter, setFilter] = useState<any>(FILTER_REVIEW_DEFAULT);

  useEffect(() => {
    getReviews();
  }, [filter]);
  const handleChangeFilter = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);
  const getReviews = async () => {
    try {
      const res = await Api.getReviews(filter);
      if (checkApiStatus(res)) {
        const { data } = res;
        setReviews(data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const handleDeleteReview = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteReview(id) });
    },
    [filter]
  );

  const deleteReview = async (id: number) => {
    try {
      const res = await Api.deleteReviews(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá feedback thành công");
        getReviews();
      }
    } catch (error) {}
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
        setFilter(FILTER_REVIEW_DEFAULT);
      }, 500);
    }
  };

  const column = getColumns({ handleDeleteReview, filter });
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader
        title={"Khoá học"}
        searchHidden={false}
        action={"Tạo mới"}
        actionLink={ROUTERS.COURSE_REVIEW_CREATE}
        placeholder="Tên học viên / Giới thiệu"
        onSearch={onSearch}
      >
        <p className="text-lg">Feedback học viên</p>
      </ContentHeader>
      <Table
        columns={column}
        data={reviews?.data}
        total={reviews?.total}
        name={""}
        filter={filter}
        onChangePage={handleChangeFilter}
      />
    </div>
  );
}

export default memo(CourseReviewTable);
