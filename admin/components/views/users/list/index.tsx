import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_DEFAULT } from "components/table/table.type";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "./list.config";
import { queryUserSearch } from "./utils";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useEffect, useState } from "react";
import Table from "components/table";
let timeout: any;
const UsersTable = () => {
  const [users, setUsers] = useState<any>(null);
  const [filter, setFilter] = useState(FILTER_DEFAULT);

  useEffect(() => {
    getUsers();
  }, [filter]);

  const getUsers = async () => {
    try {
      const res: any = await Api.getUsers(filter);
      setUsers(res.data);
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  const onDeleteUserById = (id: number) => {
    AlertConfirm({ onOk: () => onDelete(id) });
  };

  const onDelete = async (id: number) => {
    try {
      const res: any = await Api.deleteUserById(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá thành công"), getUsers();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
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
        setFilter(queryUserSearch(value));
      }, 500);
    } else {
      setTimeout(() => {
        setFilter(FILTER_DEFAULT);
      }, 500);
    }
  };

  const columns = getColumns(filter, onDeleteUserById);
  return (
    <>
      <ContentHeader
        title={"Admin"}
        action={"Tạo mới"}
        actionLink={ROUTERS.USERS_CREATE}
        searchHidden={false}
        onSearch={onSearch}
        placeholder="Tên/Email"
      >
        <div>Danh sách</div>
      </ContentHeader>
      <Table
        columns={columns}
        data={users?.data}
        total={users?.total}
        name="USER"
        onChangePage={setFilter}
        filter={filter}
      />
    </>
  );
};

export default memo(UsersTable);
