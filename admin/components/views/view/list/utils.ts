
export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: ["newsAt DESC", "id DESC"],
            where: {
                or: [
                    { newspaper: { like: `%${value}%` } },
                    { title: { like: `%${value}%` } },
                ]

            },
        }
    }
}
export const FILTER_NEWSPAPER_DEFAULT = {
    filter: {
        offset: 0,
        limit: 10,
        order: ["newsAt DESC", "id DESC"],
    },
}