// ============ React Hook ============ //
import { Fragment, useState } from "react";

// ============ Component ============ //
import Button from "../components/Button";
import Card from "../components/Card";
import Filter from "../components/Filter";

// ============ React Icon ============ //
import { PiCaretDoubleLeft } from "react-icons/pi";
import { PiCaretDoubleRight } from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";

// ============ Custom Hook ============ //
import usePagination from "../hooks/usePagination";

// remove after implementation
const tempProduct = Array.from({ length: 306 });

const ProductList = () => {
    const [displayFlexSetter, setDisplayFlexSetter] = useState(() => {
        return localStorage.getItem("displayMode") === "flex";
    });

    const ITEM_PER_PAGE = displayFlexSetter ? 8 : 18;
    const { calculatePages, handlePageClick, paginateData, totalPage, currentPage } = usePagination(
        tempProduct,
        ITEM_PER_PAGE,
    );

    const handleFlexDisplay = () => {
        setDisplayFlexSetter(true);
        localStorage.setItem("displayMode", "flex");
    };

    const handleGridDisplay = () => {
        setDisplayFlexSetter(false);
        localStorage.setItem("displayMode", "grid");
    };

    return (
        <article className="pages--product-list">
            <section>
                <div className="container">
                    {/* ============ filter ============ */}
                    <Filter />

                    <div className="container--product-listing">
                        <div className="container--product-listing--list-sort">
                            <Button btnFunc={handleFlexDisplay}>
                                <CiBoxList />
                                <p>flex view</p>
                            </Button>
                            <Button btnFunc={handleGridDisplay}>
                                <CiGrid41 />
                                <p>grid view</p>
                            </Button>
                        </div>
                        <hr />

                        <div
                            className={`container--product-listing--list-grid ${displayFlexSetter ? "container--product-listing--list-flex" : ""}`}
                        >
                            {paginateData.map((_: any, i: number) => (
                                <Card displayFLexSetter={displayFlexSetter} key={i} />
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
