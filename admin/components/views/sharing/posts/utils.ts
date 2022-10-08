export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: ["sharingAt DESC", "id DESC"],
            where: {
                or: [
                    {
                        content: { like: `%${value}%` }
                    },
                    {
                        title: { like: `%${value}%` }
                    }
                ]
            }
        },

    }
}