export const FILTER_CAROUSEL_POST = {
  filter: {
    offset: 0,
    order: ["sharingAt DESC", "id DESC"],
    where: {
      status: "SHOW",
      type: "NORMAL",
    },
  },
};
