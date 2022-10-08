import { DeleteButton, EditButton } from "components/button";
import { ROUTERS } from "constants/router.constant";
import { formatContent, formatDate } from "utils/file";
import Image from "next/image";
import LimitContent from "components/limitContent";
export const getColumns = ({ handleDeleteReview, filter }: any) => {
  return [
    {
      Header: "STT",
      Cell: ({ cell }: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
      style: {
        width: "5%",
      },
    },
    {
      Header: "Avatar",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { ownerAvatar } = original;
        const { url, urlBlur } = ownerAvatar || {};
        return (
          <div className="relative ">
            {url && (
              <Image
                src={url}
                placeholder="blur"
                blurDataURL={urlBlur}
                alt="photo"
                width={82}
                height={60}
                objectFit="cover"
                objectPosition={"center"}
              />
            )}
          </div>
        );
      },
      style: {
        width: "15%",
      },
    },
    {
      Header: "Tên học viên",
      accessor: "reviewerName",
      style: {
        width: "15%",
      },
    },
    {
      Header: "Ngày",
      Cell: (props: any) => {
        const { reviewAt } = props.row.original;
        return <p className="text-base">{formatDate(reviewAt)}</p>;
      },
      style: {
        width: "15%",
      },
    },

    {
      Header: "Giới thiệu",
      Cell: (props: any) => {
        const { content } = props.row.original;
        return <LimitContent content={formatContent(content)} />;
      },
      style: {
        width: "35%",
      },
    },
    {
      Header: "Hành động",
      Cell: ({ cell }: any) => {
        const { id } = cell.row.original;

        return (
          <div className="justify-center flex gap-3">
            <EditButton route={`${ROUTERS.COURSE_REVIEW_UPDATE}/${id}`} />
            <DeleteButton onClick={() => handleDeleteReview(id)} />
          </div>
        );
      },
      style: {
        width: "15%",
      },
    },
  ];
};
