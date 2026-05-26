// ============ React Icon ============ //
import { IoCaretForwardSharp } from "react-icons/io5";

// ========== Filter Options ========== //
import { genre, categories, platform, rating } from "../constants/filter";

const Filter = () => {
    return (
        <aside className="--filter">
            <div className="--filter-categories">
                <summary>
                    <IoCaretForwardSharp />
                    <h4>categories</h4>
                </summary>
                <ul>
                    {categories.map((filter, _) => (
                        <li key={_}>
                            <span>{filter}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="--filter-price">
                <summary>
                    <IoCaretForwardSharp />
                    <h4>price range</h4>
                </summary>
                <input type="range" />

                <div className="min-max-price">
                    <input type="number" placeholder="min $0" />
                    <input type="number" placeholder="max $9999" />
                </div>
            </div>

            <div className="--filter-platform">
                <summary>
                    <IoCaretForwardSharp />
                    <h4>platform</h4>
                </summary>
                <ul>
                    {platform.map((filter, _) => (
                        <label htmlFor={filter} key={_}>
                            <li className={`${false}`}>
                                <input type="checkbox" id={filter} name={filter} />
                                <span>{filter}</span>
                            </li>
                        </label>
                    ))}
                </ul>
            </div>

            <div className="--filter-genre">
                <summary>
                    <IoCaretForwardSharp />
                    <h4>genre</h4>
                </summary>
                <ul>
                    {genre.map((filter, _) => (
                        <label htmlFor={filter} key={_}>
                            <li className={`${false}`}>
                                <input type="checkbox" id={filter} name={filter} />
                                <span>{filter}</span>
                            </li>
                        </label>
                    ))}
                </ul>
            </div>

            <div className="--filter-genre">
                <summary>
                    <IoCaretForwardSharp />
                    <h4>rating</h4>
                </summary>
                <ul>
                    {rating.map((filter, _) => (
                        <label htmlFor={filter} key={_}>
                            <li className={`${false}`}>
                                <input type="checkbox" id={filter} name={filter} />
                                <span>{filter}</span>
                            </li>
                        </label>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Filter;
