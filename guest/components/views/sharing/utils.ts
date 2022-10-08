export const querySearch = (value: string, slug: string) => {
    return {
        filter: {
            limit: 8,
            offset: 0,
            order: ["sharingAt DESC", "id DESC"],
            where: {
                and: [
                    { type: "HIGHLIGHT_1" },
                    { status: "SHOW" },
                    {
                        or: [
                            {
                                content: { like: `%${value}%` }
                            },
                            {
                                slug: { like: `%${slug}%` }
                            }
                        ]
                    }
                ]
            }
        },
    }
};
export const querySearch2 = (value: string, slug: string) => {
    return {
        filter: {
            limit: 7,
            offset: 0,
            order: ["sharingAt DESC", "id DESC"],
            where: {
                and: [
                    { status: "SHOW" },
                    { type: "NORMAL" },
                    {
                        or: [
                            {
                                content: { like: `%${value}%` }
                            },
                            {
                                slug: { like: `%${slug}%` }
                            }
                        ]
                    }
                ]
            },

        }
    }
};
export const querySearch3 = (slug: string) => {
    return {
        filter: {
            limit: 8,
            offset: 0,
            order: ["sharingAt DESC", "id DESC"],
            where: {
                and: [
                    { type: "HIGHLIGHT_2" },
                    { status: "SHOW" },
                    {
                        or: [
                            {
                                slug: { like: `%${slug}%` }
                            }
                        ]
                    }
                ]
            },

        }
    }
};


