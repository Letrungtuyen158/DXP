import { STATUS_COMMENT } from "constants/Sharing.constant";
import { memo } from "react";
import { regexContent } from "utils/file";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import LimitContent from "components/limitContent";
import moment from "moment";

const getColumns = (onChangeStatusComment: any, onDeleteComment: any, filter: any) => {
  return [
    {
      Header: "STT",
      Cell: (cell: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
      style: { width: "5%" },
    },
    {
      Header: "Ngày",
      Cell: memo(function getDate(props: any) {
        const { original } = props?.row;
        const { createdAt } = original;

        return (
          <div className="grid gap-y-2">
            <div>
              <div>{moment(createdAt).format("DD/MM/YYYY")}</div>
            </div>
          </div>
        );
      }),
      style: { width: "10%" },
    },
    {
      Header: "Họ tên",
      accessor: "name",
      style: { width: "10%" },
    },
    {
      Header: "email",
      accessor: "email",
      style: { width: "10%" },
    },

    {
      Header: "Bài viết",
      Cell: memo(function title(props: any) {
        const { original } = props?.row;
        return <LimitContent content={original.sharing?.title.replace(regexContent, "")} />;
      }),
      style: { width: "15%" },
    },
    {
      Header: "Nội Dung",
      Cell: memo(function contents(props: any) {
        const { original } = props?.row;
        const { content } = original;
        return <LimitContent content={content} />;
      }),
      style: { width: "30%" },
    },
    {
      Header: "Hành động",
      Cell: memo(function action(props: any) {
        const { original } = props.row;
        const { id, status } = original;
        return (
          <div className="flex justify-center gap-3 min-w-[100px]">
            <ChangeStatusButton
              onClick={() => {
                onChangeStatusComment(id, status);
              }}
              condition={status === STATUS_COMMENT.SHOW}
            />
            <DeleteButton
              onClick={() => {
                onDeleteComment(id);
              }}
            />
          </div>
        );
      }),
    },
  ];
};

export { getColumns };
