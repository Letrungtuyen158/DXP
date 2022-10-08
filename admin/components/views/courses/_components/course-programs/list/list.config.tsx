import { DeleteButton, EditButton } from "components/button";
import { ROUTERS } from "constants/router.constant";
import { formatContent } from "utils/file";
import Image from "next/image";
import LimitContent from "components/limitContent";

import Link from "next/link";
export const getColumns = ({ handleDelete, filter }: any) => {
  return [
    {
      Header: "STT",
      Cell: ({ cell }: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1} </div>;
      },
      style: {
        width: "5%",
      },
    },
    {
      Header: "Hình ảnh",
      Cell: ({ cell }: any) => {
        const { banner } = cell.row.original;
        const { url, urlBlur } = banner || {};
        return (
          <div className="relative w-full aspect-w-3 aspect-h-2">
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
      style: {
        width: "10%",
      },
    },

    {
      Header: "Tên chương trình",
      Cell: ({ cell }: any) => {
        const { name, id } = cell.row.original;
        return (
          <Link href={`${ROUTERS.COURSE_LIST}/${id}/${name}`} passHref>
            <div className="whitespace-normal text-left cursor-pointer">
              <a className="text-bluebtn underline line-clamp-3">{name}</a>
            </div>
          </Link>
        );
      },
      style: {
        width: "30%",
      },
    },

    {
      Header: "Giới thiệu",
      Cell: ({ cell }: any) => {
        const { description }: any = cell.row.original;
        return (
          <>
            <LimitContent content={formatContent(description)} />
          </>
        );
      },
      style: {
        width: "30%",
      },
    },
    {
      Header: "Số lượng khoá học",
      Cell: ({ cell }: any) => {
        const { courses }: any = cell.row.original;
        const TotalCourse = courses?.length;
        return <div>{TotalCourse || 0}</div>;
      },
      style: {
        width: "20%",
      },
    },
    {
      Header: "Hành động",
      Cell: ({ cell }: any) => {
        const { id } = cell.row.original;

        return (
          <div className="justify-center flex gap-3 w-[80px]">
            <EditButton route={`${ROUTERS.COURSE_PROGRAM_UPDATE}/${id}`} />
            <DeleteButton onClick={() => handleDelete(id)} />
          </div>
        );
      },
    },
  ];
};
