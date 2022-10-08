import React, { memo } from "react";

export const Button = memo(function button({
  children,
  className,
}: {
  children: any;
  className: string;
}) {
  return (
    <button
      type="button"
      className={`
            relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 
            ${className}
      `}
    >
      {children}
    </button>
  );
});

export const PageButton = memo(function pageButton({
  children,
  className,
  onClick,
}: {
  children: any;
  className: string;
  onClick: any;
}) {
  return (
    <div
      className={`relative inline-flex items-center px-2 py-2 bg-white text-base font-medium text-black hover:bg-gray-200 
            ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
});
