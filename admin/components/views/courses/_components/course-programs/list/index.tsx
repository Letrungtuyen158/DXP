import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_COURSE_PROGRAMS_DEFAULT, querySearch } from "./utils";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { getColumns } from "./list.config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";
let timeout: any;
function CourseProgramTable() {
  const [courses, setCourses] = useState<any>(null);
  const [filter, setFilter] = useState(FILTER_COURSE_PROGRAMS_DEFAULT);

  const handleChangeFilter = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);

  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteCourseProgram(id) });
    },
    [filter]
  );
  useEffect(() => {
    getCourseProgram();
  }, [filter]);

  const getCourseProgram = async () => {
    try {
      const res: any = await Api.getCourseProgram(filter);
      if (checkApiStatus(res)) {
        const { data } = res;
        setCourses(data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const deleteCourseProgram = async (id: number) => {
    try {
      const res = await Api.deleteCourseProgram(id);
      if (checkApiStatus(res)) {
        getCourseProgram();
        ToastSuccess("Xoá tin tức thành công!");
      }
    } catch (error: any) {
      ToastError(error.message);
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
        setFilter(FILTER_COURSE_PROGRAMS_DEFAULT);
      }, 500);
    }
  };
  const columns: any = getColumns({ handleDelete, filter });
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader
        title={"Khoá học"}
        action={"Tạo mới"}
        actionLink={ROUTERS.COURSE_PROGRAM_CREATE}
        searchHidden={false}
        placeholder="Tên / Giới thiệu"
        onSearch={onSearch}
      >
        <p className="text-lg">Các khoá học</p>
      </ContentHeader>
      <Table
        columns={columns}
        data={courses?.data}
        total={courses?.total}
        name={""}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}
export default memo(CourseProgramTable);
