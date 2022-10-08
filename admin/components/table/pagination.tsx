import { Button, PageButton } from "./tableButton";
import Image from "next/image";
import Images from "styles/images/table";
import React, { memo } from "react";
import { doPaging } from "./ultis";

const Pagination = ({
  name,
  total,
  onChangePage,
  filter,
}: {
  name: string;
  total: number;
  onChangePage: any;
  filter: any;
}) => {
  const pageFilter = filter?.filter;
  const pageFilters: any = [];
  let limit = filter?.filter?.limit;
  let pages = Math.ceil(total / limit);
  let currentPage = pageFilter?.offset / limit;
  for (let i = 1; i <= pages; i++) {
    pageFilters.push({
      filter: {
        ...pageFilter,
        offset: (i - 1) * limit,
      },
    });
  }
  const listPageRender = doPaging(currentPage + 1, pages);

  const handleChangePage = (filter: any, item: any) => {
    if (item === "...") return;
    onChangePage(filter);
  };
  return (
    <>
      <div className="flex-1 flex justify-between sm:hidden">
        <Button className="">Previous</Button>
        <Button className="">Next</Button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-col gap-x-2">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Trang{" "}
              <span className="font-medium">{`${filter?.filter?.offset + 1} - ${
                filter?.filter?.offset + limit
              }`}</span>{" "}
              của <span className="font-medium">{pages}</span> mục
            </span>
          </div>
          <div className="mt-14">
            <span className="text-green-700 font-semibold uppercase">
              TỔNG SỐ {name}: <span>{total}</span>
            </span>
          </div>
        </div>
        <div>
          {total > 0 && (
            <nav
              className="relative z-0 inline-flex rounded-md -space-x-px gap-x-4"
              aria-label="Pagination"
            >
              <PageButton
                className={`rounded-full shadow-3xl cursor-pointer`}
                onClick={() =>
                  handleChangePage(
                    {
                      filter: {
                        ...pageFilter,
                        offset: 0,
                      },
                    },
                    1
                  )
                }
              >
                <div className="h-5 w-5 flex justify-center">
                  <Image src={Images.chevronLeftIcon} alt="Table" width={15} height={15} />
                </div>
              </PageButton>

              {listPageRender &&
                listPageRender?.map((item: any, index: number) => {
                  return (
                    <PageButton
                      className={`rounded-full shadow-3xl ${
                        currentPage + 1 === item ? "bg-gray200" : ""
                      } ${item !== "..." ? "cursor-pointer" : ""}`}
                      key={"page-" + index}
                      onClick={() => handleChangePage(pageFilters[item - 1], item)}
                    >
                      <div className="h-5 w-5 flex justify-center">
                        <span>{item}</span>
                      </div>
                    </PageButton>
                  );
                })}
              <PageButton
                className="rounded-full shadow-3xl cursor-pointer"
                onClick={() =>
                  handleChangePage(
                    {
                      filter: {
                        ...pageFilter,
                        offset: (pages - 1) * 10,
                      },
                    },
                    1
                  )
                }
              >
                <div className="h-5 w-5 flex justify-center">
                  <Image src={Images.chevronRightIcon} alt="table booking" width={15} height={15} />
                </div>
              </PageButton>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Pagination);
