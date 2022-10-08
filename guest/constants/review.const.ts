export const REVIEW_COURSE = "REVIEW_COURSE";
export const REVIEW_ABOUT_ME = "REVIEW_ABOUT_ME";

export const REVIEW_COURSE_FILTER = {
  filter: {
    offset: 0,
    limit: 3,
    order: "reviewAt DESC",
    where: {
      type: REVIEW_COURSE,
    },
    include: [
      {
        relation: "mediaContents",
      },
    ],
  },
};
export const REVIEW_ABOUT_ME_FILTER = {
  filter: {
    limit: 3,
    offset: 0,
    order: "reviewAt DESC",
    where: {
      type: REVIEW_ABOUT_ME,
    },
    include: [
      {
        relation: "mediaContents",
      },
    ],
  },
};
