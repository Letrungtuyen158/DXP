import { CONTACT_ITEMS } from "constants/contact.constants";
import { ComboBox, DeleteButton } from "components/button";
import { formatDate } from "utils/file";
import LimitContent from "components/limitContent";

export const getColumn = ({ handleDelete, updateRegistrationStatus, filter }: any) => {
  return [
    {
      Header: "STT",
      Cell: ({ cell }: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
    },
    {
      Header: "Ngày ĐK",
      accessor: "createdAt",
      Cell: (props: any) => {
        const { createdAt } = props.row.original;
        return <div>{formatDate(createdAt)}</div>;
      },
    },
    {
      Header: "Họ tên",
      Cell: (props: any) => {
        const { fullName } = props.row.original;
        return (
          <div>
            <LimitContent content={fullName} />
          </div>
        );
      },
      style: {
        width: "20%",
      },
    },

    {
      Header: "Điện thoại",
      accessor: "phoneNumber",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Khoá học quan tâm",
      Cell: (props: any) => {
        const { course } = props.row.original;
        return (
          <div>
            <LimitContent content={course} />
          </div>
        );
      },
      style: {
        width: "40%",
      },
    },
    {
      Header: "Trạng thái",
      Cell: (props: any) => {
        const { id, status } = props.row.original;
        return (
          <ComboBox
            id={id}
            onChangeStatus={updateRegistrationStatus}
            status={status}
            listItems={CONTACT_ITEMS}
          />
        );
      },
    },
    {
      Header: "Hành động",
      Cell: (props: any) => {
        const { id } = props.row.original;
        return (
          <div className="justify-center flex items-center min-w-[80px]">
            <DeleteButton onClick={() => handleDelete(id)} />
          </div>
        );
      },
      style: {
        width: 200,
      },
    },
  ];
};
