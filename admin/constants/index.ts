const BASE_API = "https://api-dxp.jgooooo.com";
const FILTER_DEFAULT = {
  filter: {
    limit: 10,
    offset: 0,
    order: "createdAt DESC",
  },
};
const isDev = process.env.NODE_ENV === "development";

export { BASE_API, FILTER_DEFAULT, isDev };
