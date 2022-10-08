import { BOOKING_STATUS } from "constants/booking.constants";
import { useTable } from "react-table";
import Pagination from "./pagination";
import React, { memo } from "react";

interface ITable {
  columns: any;
  data: any;
  total: number;
  name: string;
  onChangePage: Function;
  filter: any;
}

const BookingTable = ({
  columns = [],
  data = [],
  total = 0,
  name = "",
  onChangePage,
  filter = {},
}: ITable) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div className=" min-w-full">
      <div className="mt-2 flex flex-col ">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden rounded-lg">
              <table
                {...getTableProps}
                className="min-w-full divide-y-2 divide-graydivide bg-white"
              >
                <thead>
                  {headerGroups.map((headerGroup, index) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      key={index}
                      className="divide-x divide-graydivide"
                    >
                      {headerGroup.headers.map((column, subIndex) => (
                        <th
                          {...column.getHeaderProps()}
                          key={index + "-" + subIndex}
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-black uppercase tracking-wider"
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className="bg-white divide-y divide-graydivide">
                  {rows?.map((row, index) => {
                    prepareRow(row);
                    const { status }: any = row?.original;
                    return (
                      <tr
                        {...row.getRowProps()}
                        key={index}
                        className={`divide-x divide-graydivide ${
                          status === BOOKING_STATUS.DONE ? "text-gray-400" : ""
                        }`}
                      >
                        {row.cells.map((cell: any, subIndex) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={cell?.column?.style}
                              key={index + "-" + subIndex}
                              className={`px-6 py-4 whitespace-nowrap text-ellipsis overflow-hidden text-center ${cell?.column?.className}`}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 flex items-center justify-between pb-20">
        <Pagination name={name} total={total} onChangePage={onChangePage} filter={filter} />
      </div>
    </div>
  );
};

export default memo(BookingTable);
