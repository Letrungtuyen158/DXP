import { CONTACT_ITEMS } from "constants/contact.constants";
import ComboBox from "components/button/comboBox";
import Image from "next/image";
import Images from "styles/images/contacts/index";
import LimitContent from "components/limitContent";
import moment from "moment";

export const getColumns = ({ handleDelete, onChangeStatusContact, filter }: any) => {
  return [
    {
      Header: "STT",
      Cell: (cell: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
    },
    {
      Header: "Ngày LH",
      Cell: (props: any) => {
        const { createdAt } = props.row.original;
        return <div>{moment(createdAt).format("DD/MM/YYYY")}</div>;
      },
    },
    {
      Header: "Họ tên",
      Cell: (props: any) => {
        const { fullName } = props.row.original;
        return <LimitContent content={fullName} />;
      },
      style: {
        width: "20%",
      },
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Chủ đề",
      Cell: (props: any) => {
        const { topic } = props.row.original;
        return <LimitContent content={topic} />;
      },
      style: {
        width: "20%",
      },
    },
    {
      Header: "Nội dung",
      Cell: (props: any) => {
        const { content } = props.row.original;
        return <LimitContent content={content} />;
      },
    },
    {
      Header: "Trạng thái",
      Cell: (props: any) => {
        const { id, status } = props.row.original;
        return (
          <ComboBox
            id={id}
            onChangeStatus={onChangeStatusContact}
            status={status}
            listItems={CONTACT_ITEMS}
          />
        );
      },
    },
    {
      Header: "Hành Động",
      Cell: (props: any) => {
        const { id } = props.row.original;
        return (
          <div className="min-w-[80px] cursor-pointer">
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              <Image src={Images.status} alt="delete" />
            </button>
          </div>
        );
      },
    },
  ];
};
