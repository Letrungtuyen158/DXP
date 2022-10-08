import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_DEFAULT, querySearch } from "./utils";
import { checkApiStatus } from "utils/common";
import { getColumn } from "./registration.config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";

let timeout: any;
function RegistrationTable() {
  const [list, setList] = useState<any>([]);
  const [filter, setFilter] = useState(FILTER_DEFAULT);
  useEffect(() => {
    getRegistrationList();
  }, [filter]);
  const handleChangeFilter = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);

  const getRegistrationList = async () => {
    try {
      const res = await Api.getRegistrationList(filter);
      if (checkApiStatus(res)) {
        const data = res.data;
        setList(data);
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteRegistration(id) });
    },
    [filter]
  );
  const deleteRegistration = async (id: number) => {
    try {
      const res = await Api.deleteRegistration(id);
      if (checkApiStatus(res)) {
        getRegistrationList();
        ToastSuccess("Xoá tin tức thành công!");
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  const updateRegistrationStatus = async (id: number, newStatus: any) => {
    try {
      const data = { status: newStatus };
      const res = await Api.updateRegistrationStatus(id, data);
      if (checkApiStatus(res)) {
        ToastSuccess("Cập nhật trạng thái thành công");
        getRegistrationList();
      }
    } catch (error: any) {
      ToastError(error?.message);
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
        setFilter(FILTER_DEFAULT);
      }, 500);
    }
  };
  const columns = getColumn({ handleDelete, updateRegistrationStatus, filter });

  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader
        title={"Khoá học"}
        searchHidden={false}
        placeholder="Họ tên / SDT / Email / Course"
        onSearch={onSearch}
      >
        <p className="text-lg">Đăng kí khoá học</p>
      </ContentHeader>
      <Table
        columns={columns}
        data={list?.data}
        total={list?.total}
        name={""}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(RegistrationTable);
