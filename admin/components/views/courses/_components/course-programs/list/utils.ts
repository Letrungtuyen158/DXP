export const FILTER_COURSE_PROGRAMS_DEFAULT = {
    filter: {
        limit: 10,
        offset: 0,
        order: "createdAt DESC",
        include: [
            { relation: "banner" },
            {
                relation: "mediaContents",
            },
            { relation: "courses" },
        ],
    },
}
export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: "createdAt DESC",
            include: [
                { relation: "banner" },
                {
                    relation: "mediaContents",
                },
                { relation: "courses" },
            ],
            where: {
                or: [
                    {
                        name: { like: `%${value}%` }
                    },
                    {
                        description: { like: `%${value}%` }
                    }
                ]
            }

        },
    }
}