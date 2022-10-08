export const FILTER_SHARING_COMMENT = {
  filter: {
    limit: 10,
    offset: 0,
    order: "createdAt DESC",
    include: [
      {
        relation: "sharing",
      },
    ],
  },
};
export const FILTER_SHARING = {
  filter: {
    limit: 10,
    offset: 0,
    order: ["sharingAt DESC", "id DESC"],
  },
};
