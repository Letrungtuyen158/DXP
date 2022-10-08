import { ROUTERS } from "constants/router.constant";
import { STATUS } from "constants/view.constant";
import { formatDate } from "utils/file";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import EditButton from "components/button/editButton";
import Image from "next/image";
import LimitContent from "components/limitContent";
export const getColumn = ({ handleDeleteNewspaper, handleUpdateNewspaper, filter }: any) => [
  {
    Header: "STT",
    Cell: (cell: any) => {
      return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
    },
    style: { width: "5%" },
  },
  {
    Header: "Hình ảnh",
    Cell: (cell: any) => {
      const { mediaContent } = cell.row.original;
      const { url, urlBlur } = mediaContent || {};
      return (
        <div className="relative w-[120px] h-[90px]">
          {url && (
            <Image
              src={url}
              placeholder="blur"
              blurDataURL={urlBlur}
              alt="DXP"
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
          )}
        </div>
      );
    },
    style: { width: "10%" },
  },
  {
    Header: "Báo",
    Cell: (props: any) => {
      const { newspaper } = props.row.original;
      return <div className="text-base font-medium">{newspaper}</div>;
    },
    style: { width: "10%" },
  },
  {
    Header: "Ngày",
    Cell: (props: any) => {
      const { newsAt } = props.row.original;
      return <div>{formatDate(newsAt)}</div>;
    },
    style: { width: "15%" },
  },
  {
    Header: "Tiêu đề",
    Cell: (props: any) => {
      const { title } = props.row.original;
      return <LimitContent content={title} />;
    },
    style: {
      width: "40%",
    },
  },
  {
    Header: "Hành động",
    Cell: ({ cell }: any) => {
      const { id, status } = cell.row.original;
      const handleUpdateStatus = () => {
        const data = { status: status === STATUS.SHOW ? STATUS.HIDE : STATUS.SHOW };
        handleUpdateNewspaper(id, data);
      };
      return (
        <div className="justify-center flex gap-3">
          <ChangeStatusButton onClick={handleUpdateStatus} condition={status === STATUS.SHOW} />
          <EditButton route={`${ROUTERS.VIEW_UPDATE}/${id}`} />
          <DeleteButton onClick={() => handleDeleteNewspaper(id)} />
        </div>
      );
    },
    style: {
      width: "20%",
    },
  },
];
