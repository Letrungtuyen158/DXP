export const NEWS_TYPE = { NORMAL: "NORMAL", MAIN: "MAIN" };
export const NEWS_TYPE_OPTION = [
  {
    value: NEWS_TYPE.NORMAL,
    name: "Bài viết",
  },
  {
    value: NEWS_TYPE.MAIN,
    name: "Bài viết nổi bật",
  },
];

export const COURSE_STATUS = { SHOW: "SHOW", HIDE: "HIDE" };

export const COURSE_PROGRAM_FILTER = {
  filter: {
    limit: 10,
    offset: 0,
    order: "createdAt DESC",
  },
};

export const COURSE_BANNER = () => {
  return {
    filter: {
      limit: 10,
      offset: 0,
      order: "createdAt DESC",
      where: { sourceType: "COURSE" },
    },
  };
};
export const FILTER_SET_COURSE_ID = {
  filter: {
    include: [
      { relation: "banner" },
      {
        relation: "mediaContents",
      },
    ],
  },
}

export const COURSE_FILTER = (id: number) => {
  return {
    filter: {
      limit: 10,
      offset: 0,
      order: "createdAt DESC",
      where: {
        id: id,
      },
    },
  };
};
