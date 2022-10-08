import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { filterDefault, querySearch } from "./utils";
import { getColumns } from "./list.configs";
import { useRouter } from "next/router";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";
let timeout: any;
function CourseTable() {
  const [courses, setCourses] = useState<any>(null);
  const router = useRouter();
  const id = Number(router.query.programId);
  const programName = router.query.slug;
  const [filter, setFilter] = useState(filterDefault(id));
  const handleChangeFilter = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);

  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteNews(id) });
    },
    [filter]
  );

  useEffect(() => {
    getCourses();
  }, [filter]);

  const getCourses = async () => {
    try {
      const res: any = await Api.getCourses(filter);
      if (checkApiStatus(res)) {
        const { data } = res;
        setCourses(data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const deleteNews = async (id: number) => {
    try {
      const res = await Api.deleteCourse(id);
      if (checkApiStatus(res)) {
        getCourses();
        ToastSuccess("Xoá khoá học thành công!");
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  const updateCourse = async (id: number, data: any) => {
    try {
      const res = await Api.updateCourse(id, data);
      if (checkApiStatus(res)) {
        getCourses();
        ToastSuccess("Thay đổi trạng thái thành công!");
      }
    } catch (error: any) {
      ToastError(error);
    }
  };

  const columns: any = getColumns({ handleDelete, updateCourse, filter });
  const onSearch = (value: any) => {
    if (value?.length >= 2) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setFilter(querySearch(value, id));
      }, 500);
    } else {
      setTimeout(() => {
        setFilter(filterDefault(id));
      }, 500);
    }
  };
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader
        title={"Khoá học"}
        action={"Tạo mới"}
        actionLink={`${ROUTERS.COURSE_CREATE}/${id}/${programName}`}
        searchHidden={false}
        placeholder="Tên khoá học"
        onSearch={onSearch}
      >
        <div className="flex justify-start items-center text-lg gap-2">
          <p className="font-medium">Các khoá học</p>
          <span>{">"}</span>
          <p>{programName}</p>
        </div>
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
export default memo(CourseTable);
