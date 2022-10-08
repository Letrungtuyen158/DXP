import { DeleteButton, EditButton } from "components/button";
import { ROLES_USERS } from "constants/users.constant";
import { ROUTERS } from "constants/router.constant";
import { memo } from "react";
import moment from "moment";

export const getColumns = (filter: any, onDeleteUserById: Function) => {
  return [
    {
      Header: "STT",
      Cell: (cell: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
    },
    {
      Header: "Tên đăng nhập",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { fullName } = original;
        return <div>{fullName}</div>;
      },
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Ngày tạo",
      Cell: memo(function getDate(props: any) {
        const { original } = props?.row;
        const { createdAt } = original;

        return <div>{moment(createdAt).format("DD/MM/YYYY")}</div>;
      }),
    },
    {
      Header: "Quyền hạn",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { roles } = original;
        return (
          <div>
            {roles?.map((item: any, index: number) => {
              return (
                <span key={index}>
                  {item === ROLES_USERS.ADMIN
                    ? ROLES_USERS.ADMIN.charAt(0).toUpperCase() + ROLES_USERS.ADMIN.slice(1)
                    : ROLES_USERS.CUSTOMER}
                </span>
              );
            })}
          </div>
        );
      },
    },
    {
      Header: "Hành động",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { id } = original;
        return (
          <div className="flex justify-center gap-x-2">
            <EditButton route={`${ROUTERS.USER_UPDATE}/${id}`} />
            <DeleteButton onClick={() => onDeleteUserById(id)} />
          </div>
        );
      },
      style: {
        width: 200,
      },
    },
  ];
};
