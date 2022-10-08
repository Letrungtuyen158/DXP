import { DeleteButton, EditButton } from "components/button";
import { ROUTERS } from "constants/router.constant";
import { formatDate } from "utils/file";
import Image from "next/image";
import LimitContent from "components/limitContent";

export const getColumns = ({ handleDelete, filter }: any) => {
  return [
    {
      Header: "STT",
      Cell: (cell: any) => {
        const { index } = cell.row;
        return <div>{index + filter?.filter?.offset + 1}</div>;
      },
      style: { width: "5%" },
    },
    {
      Header: "Avatar",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { ownerAvatar } = original;
        const { url, urlBlur } = ownerAvatar || {};
        return (
          <div className="relative w-full h-16">
            {url && (
              <Image
                src={url}
                placeholder="blur"
                blurDataURL={urlBlur}
                alt="photo"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
              />
            )}
          </div>
        );
      },
      style: {
        width: "10%",
      },
    },
    {
      Header: "Tên",
      Cell: (cell: any) => {
        const { reviewerName } = cell.row.original;
        return <div className="font-medium">{reviewerName}</div>;
      },
      style: { width: "15%" },
    },
    {
      Header: "Ngày",
      Cell: (cell: any) => {
        const { reviewAt } = cell.row.original;
        return <div>{formatDate(reviewAt)}</div>;
      },
      style: { width: "15%" },
    },
    {
      Header: "Nội dung",
      Cell: (cell: any) => {
        const { content } = cell.row.original;
        return <LimitContent content={content} />;
      },
      style: {
        width: "40%",
      },
    },
    {
      Header: "Hành động",
      Cell: (cell: any) => {
        const { id } = cell.row.original;
        return (
          <div className="flex justify-center gap-5 items-center">
            <EditButton route={`${ROUTERS.VIEW_ABOUT_ME_UPDATE}/${id}`} />
            <DeleteButton onClick={() => handleDelete(id)} />
          </div>
        );
      },
      style: {
        width: "15%",
      },
    },
  ];
};
