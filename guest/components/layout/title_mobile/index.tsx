import React, { memo } from "react";

function Title({ title }: { title: string }) {
  return (
    <article>
      <h1 className="text-4xl font-semibold py-5 pl-5 border-solid border-b border-[#D7DAD6]">
        {title}
      </h1>
    </article>
  );
}

export default memo(Title);
