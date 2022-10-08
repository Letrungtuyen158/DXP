export const querySearch = (value: any, id: number) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: "createdAt DESC",
            where: {
                courseProgramId: id,
                or: [
                    { courseName: { like: `%${value}%` } }
                ]

            },
        }
    }
}
export const filterDefault = (id: number) => ({
    filter: {
        limit: 10,
        offset: 0,
        order: "createdAt DESC",
        where: {
            courseProgramId: id,
        },
    },
})
