import { IMAGE_STATUS } from "constants/galary.constants";
import { getSize } from "utils/file";
import { useCallback } from "react";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import Image from "next/image";
import ModalPhoto from "components/modal/photoModal";
import moment from "moment";

export const getColumns = (changeStatus: Function, deleteImage: Function, filter: any) => {
  return [
    {
      Header: "STT",
      Cell: (cell: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
    },
    {
      Header: "Hình ảnh",
      Cell: (props: any) => {
        const { url, urlBlur } = props?.row?.original;
        return (
          <div className="relative w-full h-16">
            <div>
              <Image
                src={url}
                width={82}
                height={60}
                objectFit="cover"
                objectPosition={"center"}
                placeholder="blur"
                blurDataURL={urlBlur}
                alt="admin"
              />
            </div>
            <ModalPhoto photoUrl={url} urlBlur={urlBlur} />
          </div>
        );
      },
    },
    {
      Header: "Tên",
      Cell: () => {
        return <div>Nguyễn Văn A</div>;
      },
    },
    {
      Header: "Ngày tạo",
      Cell: (props: any) => {
        const { createdAt } = props?.row?.original;
        return <div>{moment(createdAt).format("DD-MM-YYYY")}</div>;
      },
    },
    {
      Header: "Kích thước",
      Cell: (props: any) => {
        const { size } = props?.row?.original;
        return <div>{getSize(size)}</div>;
      },
    },
    {
      Header: "Loại",
      Cell: (props: any) => {
        const { url } = props?.row?.original;
        const result = url.split(".");
        return (
          <div>
            <div className="uppercase">{result[result.length - 1]}</div>
          </div>
        );
      },
    },
    {
      Header: "Hành động",
      Cell: (props: any) => {
        const { id, status } = props?.row?.original;
        return (
          <div className="flex justify-center gap-4">
            <ChangeStatusButton
              onClick={useCallback(() => changeStatus(id, status), [])}
              condition={status === IMAGE_STATUS.SHOW || null ? true : false}
            />
            <DeleteButton onClick={() => deleteImage(id)} />
          </div>
        );
      },
    },
  ];
};
