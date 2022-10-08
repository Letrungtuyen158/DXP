export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: ["status DESC, createdAt DESC"],
            where: {
                or: [
                    { course: { like: `%${value}%` } },
                    { email: { like: `%${value}%` } },
                    { fullName: { like: `%${value}%` } },
                    { phoneNumber: { like: `%${value}%` } }
                ]

            },
        }
    }
}
export const FILTER_DEFAULT = {
    filter: {
        limit: 10,
        offset: 0,
        order: ["status DESC, createdAt DESC"],
        where: {},
    },
}
