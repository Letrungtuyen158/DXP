import { FOUNDER_STATUS } from "./founder.constants";
import { ROUTERS } from "constants/router.constant";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import EditButton from "components/button/editButton";
import Image from "next/image";
import LimitContent from "components/limitContent";

const getColumns = (onchangeStatus: any, onDeleteFounderById: any, filter: any) => {
  return [
    {
      Header: "STT",
      Cell: (cell: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
    },
    {
      Header: "Thương hiệu",
      accessor: "branding",
    },
    {
      Header: "Logo",
      Cell: (props: any) => {
        const { logoImg } = props.row.original;
        return (
          <div>
            {logoImg && (
              <Image
                src={logoImg.url}
                width={90}
                height={70}
                blurDataURL={logoImg.urlBlur}
                placeholder="blur"
                alt="logo"
              />
            )}
          </div>
        );
      },
    },
    {
      Header: "Hình ảnh",
      Cell: (props: any) => {
        const { mediaContents } = props.row.original;
        const { url, urlBlur } = mediaContents?.[0] || {};
        return (
          <div>
            {url && (
              <Image
                src={url}
                blurDataURL={urlBlur}
                placeholder="blur"
                width={67}
                height={79}
                objectFit="cover"
                objectPosition="center"
                alt="image"
              />
            )}
          </div>
        );
      },
    },
    {
      Header: "Nội dung",
      Cell: (props: any) => {
        const { content } = props.row.original;
        return (
          <div>
            <LimitContent content={content} />
          </div>
        );
      },
      style: {
        width: "25%",
      },
    },
    {
      Header: "Hành động",
      Cell: (props: any) => {
        const { id, status } = props.row.original;
        return (
          <div className="flex justify-center gap-x-2">
            <ChangeStatusButton
              onClick={() => {
                onchangeStatus(id, status);
              }}
              condition={status === FOUNDER_STATUS.SHOW ? true : false}
            />
            <EditButton route={`${ROUTERS.FOUNDER_UPDATE}/${id}`} />
            <DeleteButton onClick={() => onDeleteFounderById(id)} />
          </div>
        );
      },
    },
  ];
};
export { getColumns };
