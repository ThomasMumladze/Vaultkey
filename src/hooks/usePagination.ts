import { useEffect, useState } from "react";

const usePagination = (data: any, itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = itemsPerPage;
    const paginateData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const totalPage = Math.ceil(data.length / ITEMS_PER_PAGE);

    const [windowStart, setWindowStart] = useState(2);
    const windowSize = 8;

    const handlePageClick = (page: number) => {
        setCurrentPage(page);

        if (page === 1) {
            setWindowStart(2);
            return;
        }

        if (page === totalPage) {
            setWindowStart(totalPage - windowSize);
            return;
        }

        // shift forward when clicking last in window
        if (page === windowStart + windowSize - 1 && page < totalPage) setWindowStart(Math.min(page, totalPage - windowSize));

        // shift backward when clicking first in window
        if (page === windowStart && page > 2) setWindowStart(Math.max(2, page - windowSize + 1));
    };

    useEffect(() => {
        setCurrentPage(1);
        setWindowStart(2);
    }, [data.length]);

    const calculatePages = Array.from({ length: totalPage }, (_, i) => i + 1).filter(
        (page) => page === 1 || page === totalPage || (page >= windowStart && page <= windowStart + windowSize - 1),
    );

    return { paginateData, handlePageClick, calculatePages, totalPage, currentPage };
};

export default usePagination;
