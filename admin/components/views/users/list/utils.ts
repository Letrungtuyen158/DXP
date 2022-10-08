export const queryUserSearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: "createdAt DESC",
            where: {
                or: [
                    {
                        email: { like: `%${value}%` },
                    },
                    {
                        fullName: { like: `%${value}%` },
                    },
                ],
            },
        }
    }
}