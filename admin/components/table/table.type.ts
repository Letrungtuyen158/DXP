export const FILTER_DEFAULT = {
  filter: {
    limit: 10,
    offset: 0,
    order: "createdAt DESC",
  },
};

export interface IFilter {
  limit: number;
  offset: number;
  order: string;
  page: number;
}
