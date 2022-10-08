import { COURSE_STATUS } from "constants/course.constant";
import { ChangeStatusButton, DeleteButton, EditButton } from "components/button";
import { ROUTERS } from "constants/router.constant";
import { formatDate } from "utils/file";
import LimitContent from "components/limitContent";

export const getColumns = ({ handleDelete, updateCourse, filter }: any) => {
  return [
    {
      Header: "STT",
      Cell: ({ cell }: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
    },

    {
      Header: "Các khoá học",
      Cell: (props: any) => {
        const { courseName } = props?.row?.original;
        return <LimitContent content={courseName} />;
      },
      width: "20%",
    },
    {
      Header: "Khai giảng",
      Cell: (props: any) => {
        const { openingDate } = props?.row?.original;
        return <div className="text-lg">{formatDate(openingDate)}</div>;
      },
    },
    {
      Header: "Giờ học",
      Cell: (props: any) => {
        const { time } = props?.row?.original;
        return <LimitContent content={time} />;
      },
    },
    {
      Header: "Số buổi",
      Cell: (props: any) => {
        const { numberOfLessons } = props?.row?.original;
        return <div className="w-[60px]">{numberOfLessons}</div>;
      },
    },

    {
      Header: "Học phí",
      Cell: (props: any) => {
        const { fee } = props?.row?.original;
        return <LimitContent content={fee} />;
      },
    },
    {
      Header: "Hành động",
      Cell: ({ cell }: any) => {
        const { id, status } = cell.row.original;
        const handleUpdateStatus = () => {
          const data = {
            status: `${
              status === COURSE_STATUS.HIDE || status === null
                ? COURSE_STATUS.SHOW
                : COURSE_STATUS.HIDE
            }`,
          };
          updateCourse(id, data);
        };

        return (
          <div className="justify-center flex gap-3">
            <ChangeStatusButton
              onClick={handleUpdateStatus}
              condition={status === COURSE_STATUS.SHOW}
            />
            <EditButton route={`${ROUTERS.COURSE_UPDATE}/${id}`} />
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
