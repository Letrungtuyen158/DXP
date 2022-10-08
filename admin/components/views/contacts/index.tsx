import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "components/views/contacts/contact.config";
import Api from "services/api";
import ContactTable from "components/table/index";
import React, { useCallback, useEffect, useState } from "react";

function ContactManage() {
  const [contacts, setContacts] = useState<any>(null);

  const [filter, setFilter] = useState({
    filter: {
      limit: 10,
      offset: 0,
      order: ["status DESC, createdAt DESC"],
    },
  });

  const handleChangeFilter = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);

  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => onDeleteContact(id) });
    },
    [filter]
  );

  useEffect(() => {
    getContacts();
  }, [filter]);

  const getContacts = async () => {
    try {
      const Data: any = await Api.getContacts(filter).then((res: any) => res);
      setContacts(Data.data);
    } catch (error: any) {
      ToastError(error?.message);
    }
  };

  const onDeleteContact = async (id: number) => {
    try {
      const res: any = await Api.deleteContactById(id);
      if (checkApiStatus(res)) {
        getContacts();
        ToastSuccess("Xoá thành công!");
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };

  const onChangeStatusContact = async (id: number, newStatus: any) => {
    try {
      const data = { status: newStatus };
      const res: any = await Api.updateContactStatus(id, data);
      if (checkApiStatus(res)) {
        getContacts();
        ToastSuccess("Thay đổi thành công!");
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const columns: any = getColumns({
    handleDelete,
    onChangeStatusContact,
    filter,
  });

  return (
    <div>
      <div className="flex gap-2 text-xl items-center h-14 ">
        <h3 className="font-semibold ">Liên hệ</h3>
        <p> {">"} Thông tin</p>
      </div>
      <div>
        <ContactTable
          columns={columns}
          data={contacts?.data}
          total={contacts?.total}
          filter={filter}
          onChangePage={handleChangeFilter}
          name={"Liên Hệ"}
        />
      </div>
    </div>
  );
}

export default ContactManage;
