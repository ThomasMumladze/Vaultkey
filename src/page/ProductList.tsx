// ============ React Hook ============ //
import { Fragment } from "react";

// ============ Component ============ //
import Button from "../components/Button";
import Card from "../components/Card";

// ============ React Icon ============ //
import { PiCaretDoubleLeft } from "react-icons/pi";
import { PiCaretDoubleRight } from "react-icons/pi";

// ============ Custom Hook ============ //
import usePagination from "../hooks/usePagination";
import Filter from "../components/Filter";

const ProductList = () => {
    // remove after implementation
    const tempProduct = Array.from({ length: 306 });

    const { calculatePages, handlePageClick, paginateData, totalPage, currentPage } = usePagination(tempProduct);

    return (
        <article className="pages--product-list">
            <section>
                <div className="container">
                    {/* ============ filter ============ */}
                    <Filter />

                    <div className="container--product-listing">
                        <div className="container--product-listing--list-sort"></div>
                        <hr />

                        <div className="container--product-listing--list-grid">
                            {paginateData.map((_: any, i: number) => (
                                <Card key={i} />
                            ))}
                        </div>

                        <hr />

                        <div className="container--product-listing--pagination">
                            <Button
                                disabled={currentPage === 1}
                                btnFunc={() => handlePageClick(Math.max(1, currentPage - 1))}
                            >
                                <PiCaretDoubleLeft />
                            </Button>

                            {calculatePages.map((page, i) => (
                                <Fragment key={page}>
                                    {i > 0 && calculatePages[i - 1] !== page - 1 && <span>...</span>}
                                    <Button
                                        className={`${page === currentPage ? "active-page" : ""}`}
                                        btnFunc={() => handlePageClick(page)}
                                    >
                                        {page}
                                    </Button>
                                </Fragment>
                            ))}

                            <Button
                                btnFunc={() => handlePageClick(Math.min(totalPage, currentPage + 1))}
                                disabled={currentPage === totalPage}
                            >
                                <PiCaretDoubleRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default ProductList;
