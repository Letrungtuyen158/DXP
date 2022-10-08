export const NEWS_POST_SHARINGS = {
  filter: {
    limit: 1,
    offset: 0,
    order: ["sharingAt DESC", "id DESC"],
    where: {
      status: "SHOW",
      type: "NORMAL",
    },
  },
};

export const LIST_NEWS_POST_SHARINGS = {
  filter: {
    limit: 7,
    offset: 0,
    order: ["sharingAt DESC", "id DESC"],
    where: { type: "NORMAL", status: "SHOW" },
  },
};
export const LIST_POST_HIGHLIGHT_2_SHARING = {
  filter: {
    limit: 8,
    offset: 0,
    order: ["sharingAt DESC", "id DESC"],
    where: {
      type: "HIGHLIGHT_2",
      status: "SHOW",
    },
  },
};
export const LIST_POST_HIGHLIGHT_1_SHARING = {
  filter: {
    limit: 8,
    offset: 0,
    order: ["sharingAt DESC", "id DESC"],
    where: {
      type: "HIGHLIGHT_1",
      status: "SHOW",
    },
  },
};
export const GET_COMMENT_SHARING = (id: number) => {
  return {
    filter: {
      offset: 0,
      order: "createdAt DESC",
      where: {
        sharingId: id,
        status: "SHOW",
      },
    },
  };
};
