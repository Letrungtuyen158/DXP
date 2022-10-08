import { GET_COMMENT_SHARING } from "constants/sharings.constants";
import { fetcher, formatContent, formatDate } from "utils/common";
import { useRouter } from "next/router";
import LoadingComment from "../../loanding/loadingComment";
import React, { memo } from "react";
import useSWR from "swr";

function CommentViews() {
  const { query } = useRouter();
  const id: any = query.id || "";
  const newId = id.split("-");
  const { data, error } = useSWR(
    `/api/sharing/comments?filter=${JSON.stringify(GET_COMMENT_SHARING(+newId[0]))}`,
    fetcher
  );
  if (!data) return <LoadingComment />;
  if (error) return <LoadingComment />;

  return (
    <div className="not-italic mt-[54px]">
      <section>
        <h2 className="font-semibold text-[24px] leading-[29px]">Bình luận</h2>
        {data?.data.map(
          (items: { name: string; createdAt: string; content: string }, index: number) => (
            <div key={index}>
              <h1 className="font-semibold text-[24px] leading-[29px] mt-[19px]">{items.name}</h1>
              <p className="opacity-50">{formatDate(items.createdAt)}</p>
              <p className="mt-4">{formatContent(items.content)}</p>
            </div>
          )
        )}
      </section>

      <section className="mt-[50px]">
        <h1 className="text-[24px] leading-[29px] font-semibold">Chia sẻ ý kiến của bạn</h1>
      </section>
    </div>
  );
}

export default memo(CommentViews);
