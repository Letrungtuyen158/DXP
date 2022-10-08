export const FORM_TYPE = {
  BOOKING: "BOOKING",
  CONTACT: "CONTACT",
};
export const NEWS_POST_SHARINGS = {
  filter: {
    limit: 5,
    offset: 0,
    order: "createdAt DESC",
    where: {
      status: "SHOW",
      type: "NORMAL",
    },
  },
};
export const FILTER_ABOUTME = {
  filter: {
    limit: 10,
    offset: 0,
    order: ["createdAt DESC"],
    where: {
      type: "REVIEW_ABOUT_ME",
    },
  },
};
export const FILTER_MULTIPLE_VIDEOS = {
  filter: {
    limit: 30,
    offset: 0,
    order: "createdAt DESC",
    where: {
      status: "SHOW",
    },
  },
};
export const FILTER_PHOTOS = {
  filter: {
    limit: 15,
    offset: 0,
    order: "createdAt DESC",
    where: {
      status: "SHOW",
    },
  },
};

export const FILTER_FOUNDERS = {
  filter: {
    limit: 6,
    offset: 0,
    order: "createdAt DESC",
    where: {
      status: "SHOW",
    },
  },
};
