export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: "createdAt DESC",
            where: {
                or: [
                    {
                        branding: { like: `%${value}%` }
                    },
                    {
                        content: { like: `%${value}%` }
                    }
                ]
            }

        }
    }
}
export const FILLTER_FOUNDER_DEFAULT = {
    filter: {
        limit: 10,
        offset: 0,
        order: "createdAt DESC"
    }
}