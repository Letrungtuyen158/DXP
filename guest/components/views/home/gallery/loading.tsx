import React, { memo } from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-20 animate-pulse">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30,
      ].map((_) => {
        return (
          <div key={_} className="text-left">
            <div className="relative h-36 bg-gray200"></div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Loading);
