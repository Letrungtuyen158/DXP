import { REVIEW_ABOUT_ME } from "constants/review.constants";

export const querySearch = (value: any) => {
    return {
        filter: {
            limit: 10,
            offset: 0,
            order: "reviewAt DESC",
            where: {
                or: [
                    { content: { like: `%${value}%` } },
                    { reviewerName: { like: `%${value}%` } },
                ],
                type: REVIEW_ABOUT_ME,

            },
            include: [
                {
                    relation: "mediaContents",
                },
            ],
        }
    }
}
export const FILTER_ABOUME_DEFAULT = {
    filter: {
        offset: 0,
        limit: 10,
        order: "reviewAt DESC",
        where: {
            type: REVIEW_ABOUT_ME,
        },
        include: [
            {
                relation: "mediaContents",
            },
        ],
    },
}