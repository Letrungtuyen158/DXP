import { ROUTERS } from "constants/router.constant";
import { STATUS_POST } from "constants/Sharing.constant";
import { memo } from "react";
import { regexContent } from "utils/file";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import EditButton from "components/button/editButton";
import Image from "next/image";
import LimitContent from "components/limitContent";
import moment from "moment";
const getColumns = (onChangeStatusPost: any, handleDelete: any, filter: any) => {
  return [
    {
      Header: "STT",
      Cell: (cell: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
      style: { width: "5%" },
    },
    {
      Header: "Hình ảnh",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { mediaContent } = original;
        return (
          <div>
            {mediaContent && (
              <div className="relative w-[120px] h-[90px]">
                <Image
                  src={mediaContent?.url}
                  layout="fill"
                  objectFit="cover"
                  alt="duong xuan phi"
                  objectPosition="center"
                />
              </div>
            )}
          </div>
        );
      },
      style: { width: "10%" },
    },
    {
      Header: "Ngày",
      Cell: memo(function getDate(props: any) {
        const { original } = props?.row;
        const { sharingAt } = original;

        return (
          <div className="grid gap-y-2">
            <div>
              <div>{moment(sharingAt).format("DD/MM/YYYY")}</div>
            </div>
          </div>
        );
      }),
      style: { width: "10%" },
    },
    {
      Header: "Tiêu đề",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { title } = original;
        return (
          <div>
            <LimitContent content={title} />
          </div>
        );
      },
      style: {
        width: "40%",
      },
    },
    {
      Header: "Nội Dung",
      Cell: memo(function contents(props: any) {
        const { original } = props?.row;
        const { content } = original;
        return (
          <div>
            <LimitContent content={content.replace(regexContent, "")} />
          </div>
        );
      }),
      style: { width: "15%" },
    },
    {
      Header: "Hành động",
      Cell: memo(function action(props: any) {
        const { original } = props.row;
        const { id, status } = original;
        return (
          <div className="flex justify-center gap-3">
            <ChangeStatusButton
              onClick={() => {
                onChangeStatusPost(id, status);
              }}
              condition={status === STATUS_POST.SHOW}
            />
            <EditButton route={`${ROUTERS.POST_UPDATE}/${id}`} />
            <DeleteButton
              onClick={() => {
                handleDelete(id);
              }}
            />
          </div>
        );
      }),
      style: { width: "20%" },
    },
  ];
};

export { getColumns };
