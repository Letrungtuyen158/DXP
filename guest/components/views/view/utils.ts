export const queryUserSearch1 = (value: string, slug: any) => ({
  filter: {
    limit: 5,
    offset: 0,
    order: "createdAt DESC",
    where: {
      status: "SHOW",
      type: "HIGHLIGHT_1",
      or: [
        {
          title: { like: `%${value}%` },
        },
        {
          description: { like: `%${value}%` },
        },
        {
          slug: { like: `%${slug}%` },
        },
      ],
    },
  },
});
export const queryUserSearch2 = (value: string, slug: any) => ({
  filter: {
    limit: 8,
    offset: 0,
    order: "createdAt DESC",
    where: {
      and: [
        { status: "SHOW" },
        { type: "HIGHLIGHT_2" },
        {
          or: [
            {
              title: { like: `%${value}%` },
            },
            {
              slug: { like: `%${slug}%` },
            },
          ]
        },
      ]
    },
  },
});
