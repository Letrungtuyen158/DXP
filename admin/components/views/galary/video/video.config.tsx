import { VIDEO_STATUS } from "constants/galary.constants";
import { formatSizeMb } from "utils/file";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import moment from "moment";

export const getColumns = (changeStatus: any, deleteVideo: any, filter: any) => {
  return [
    {
      Header: "STT",
      Cell: (cell: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
    },
    {
      Header: "Tên video",
      Cell: (props: any) => {
        const { displayName } = props?.row.original;
        return <div>{displayName}</div>;
      },
    },
    {
      Header: "Video",
      Cell: (props: any) => {
        const { videoUrl } = props?.row?.original;
        return (
          <div className="mx-auto w-[200px] min-h-[150px]">
            <video controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        );
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
        return <div>{formatSizeMb(size)}</div>;
      },
    },
    {
      Header: "Loại",
      Cell: (props: any) => {
        const { videoUrl } = props?.row?.original;
        const result = videoUrl.split(".");
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
              onClick={() => changeStatus(id, status)}
              condition={status === VIDEO_STATUS.SHOW ? true : false}
            />
            <DeleteButton onClick={() => deleteVideo(id)} />
          </div>
        );
      },
    },
  ];
};
