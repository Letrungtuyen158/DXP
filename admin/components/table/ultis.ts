export function doPaging(currentPageInput: number, pages: number) {
    let currentPage = currentPageInput,
        range = 5,
        totalPages = pages,
        start = 1;
    let paging = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++)
            paging.push(i)
        return paging
    }
    if (currentPage < range / 2 + 1) {
        start = 1;
    } else if (currentPage >= totalPages - range / 2) {
        start = Math.floor(totalPages - range + 1);
    } else {
        start = currentPage - Math.floor(range / 2);
    }
    for (let i = start; i <= start + range - 1; i++) {
        if (i === currentPage) {
            paging.push(i);
        } else {
            paging.push(i.toString());
        }
    }
    if (currentPage <= totalPages - 4 && currentPage !== totalPages - 3) {
        paging.push("...", totalPages)
    }
    if (currentPage === totalPages - 3) {
        paging.push(totalPages)
    }
    return paging;
}