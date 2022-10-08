import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FILTER_NEWSPAPER_DEFAULT, querySearch } from "./utils";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { getColumn } from "./config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";
let timeout: any;
function ViewTable() {
  const [news, setNews] = useState<any>([]);
  const [filter, setFilter] = useState(FILTER_NEWSPAPER_DEFAULT);
  const handleChangeFilter = (newFilter: any) => {
    setFilter(newFilter);
  };
  useEffect(() => {
    getNewspaper();
  }, [filter]);
  const getNewspaper = async () => {
    try {
      const res = await Api.getNewspaper(filter);
      if (checkApiStatus(res)) {
        setNews(res.data);
      }
    } catch (error) {}
  };

  const handleUpdateNewspaper = async (id: number, data: any) => {
    try {
      const res = await Api.updateNewspaper(id, data);
      if (checkApiStatus(res)) {
        ToastSuccess("Cập nhật bài báo thành công");
        getNewspaper();
      }
    } catch (error: any) {
      ToastError(error?.messages);
    }
  };
  const handleDeleteNewspaper = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteNews(id) });
    },
    [filter]
  );
  const deleteNews = async (id: number) => {
    try {
      const res = await Api.deleteNewspaper(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá bài báo thành công");
        getNewspaper();
      }
    } catch (error: any) {
      ToastError(error.messages);
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
        setFilter(FILTER_NEWSPAPER_DEFAULT);
      }, 500);
    }
  };
  const columns = getColumn({ handleUpdateNewspaper, handleDeleteNewspaper, filter });
  return (
    <div className="w-full mx-auto px-10 container">
      <ContentHeader
        title={"Góc nhìn"}
        action={"Tạo mới"}
        actionLink={ROUTERS.VIEW_CREATE}
        searchHidden={false}
        placeholder="Báo / Tiêu đề"
        onSearch={onSearch}
      >
        <p className="text-lg">Báo chí</p>
      </ContentHeader>
      <Table
        columns={columns}
        data={news?.data}
        total={news?.total}
        name={""}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(ViewTable);
