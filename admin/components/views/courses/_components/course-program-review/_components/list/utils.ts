import { REVIEW_COURSE } from "constants/review.constants";

export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: "createdAt DESC",
            where: {
                or: [
                    { reviewerName: { like: `%${value}%` } },
                    { content: { like: `%${value}%` } },
                ]

            },
        }
    }
}
export const FILTER_REVIEW_DEFAULT = {
    filter: {
        limit: 10,
        offset: 0,
        order: "reviewAt DESC",
        where: {
            type: REVIEW_COURSE,
        },
    },
}
