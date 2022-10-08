export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: "createdAt DESC",
            include: [
                {
                    relation: "sharing",
                },
            ],
            where: {
                or: [
                    {
                        name: { like: `%${value}%` }
                    },
                    {
                        content: { like: `%${value}%` }
                    },
                    {
                        email: { like: `%${value}%` }
                    }
                ]
            }
        },
    }
}