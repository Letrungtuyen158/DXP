export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: "createdAt DESC",
            where: {
                or: [
                    {
                        displayName: { like: `%${value}%` }
                    },
                ]
            }
        }
    }
}
export const FILTER_GALLERY_DEFAULT = {
    filter: {
        limit: 10,
        offset: 0,
        order: ["createdAt DESC"],
    },
}