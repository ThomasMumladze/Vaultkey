const ProductDetails = () => {
    return (
        <article id="product-details">
            <div className="product-details">
                {/* // ===== Hero section ===== // */}
                <div className="product-details--hero">
                    <div className="cover">
                        <img src="https://upload.wikimedia.org/wikipedia/ka/a/a5/Grand_Theft_Auto_V.png" alt="" />
                    </div>
                    <div className="info">
                        <div className="info--genre">Action · Open World · Crime</div>
                        <div className="info--title">Grand Theft Auto V</div>
                        <div className="info--sub">Digital Deluxe Edition · Rockstar Games · 2013</div>
                        <div className="info--stars-row">
                            <div className="stars">
                                <span className="star on">★</span>
                                <span className="star on">★</span>
                                <span className="star on">★</span>
                                <span className="star on">★</span>
                                <span className="star ">★</span>
                            </div>
                            <div className="rating-value">4.54</div>
                            <div className="rating-cnt">(1,234 reviews)</div>
                        </div>
                        <div className="info--platforms">
                            <span className="platform">PC</span>
                            <span className="platform">PlayStation 5</span>
                            <span className="platform">Xbox series</span>
                        </div>
                        <div className="info--stock-row">
                            <span className="stock-dot"></span>
                            <span className="stock-text">In stock — instant digital delivery</span>
                        </div>
                        <div className="info--price-block">
                            <span className="price-old">$14.90</span>
                            <span className="price-new">$12.90</span>
                            <span className="price-disc">14% OFF</span>
                        </div>
                        <div className="info--actions">
                            <button className="btn-cart">Add to Cart</button>
                            <button className="btn-wish">wishlist</button>
                        </div>
                        <div className="info--tags">
                            <span className="tag">Open World</span>
                            <span className="tag">Action</span>
                            <span className="tag">Crime</span>
                            <span className="tag">Multiplayer</span>
                            <span className="tag">Singleplayer</span>
                        </div>
                    </div>
                </div>

                {/* // ===== Description section ===== // */}
                <section className="section  description--section">
                    <div className="section--head">Screenshots & trailer</div>
                    <div className="section--body">
                        <div className="section--trailer-hero">
                            <img src="https://via.placeholder.com/860x480/111/444?text=Official+Trailer" alt="Trailer" />
                            <div className="trailer-play" aria-label="Play trailer">
                                ▶
                            </div>
                        </div>
                        <div className="section--body--gallery">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div className="thumb">
                                    <img
                                        src="https://via.placeholder.com/200x113/1a1a2e/38bdf8?text=SS+1"
                                        alt="Screenshot 1"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* // ===== System requirements section ===== // */}
                <section className="section System--requirement">
                    <div className="section--head"> System requirements</div>
                    <div className="section--sys-grid">
                        <div className="sys-col">
                            <div className="sys-label">Minimum</div>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div className="sys-row" key={index}>
                                    <span className="sys-key">OS</span>
                                    <span className="sys-val">Windows 10 (64-bit)</span>
                                </div>
                            ))}
                        </div>
                        <div className="sys-col">
                            <div className="sys-label">Recommended</div>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div className="sys-row" key={index}>
                                    <span className="sys-key">OS</span>
                                    <span className="sys-val">Windows 10 (64-bit)</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* // ===== DLC & editions ===== // */}
                <section className="section dlc-editions">
                    <div className="section--head"> DLC & editions</div>
                    <div className="section--dlc-list">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div className="dlc-card" key={index}>
                                <div className="dlc-image">
                                    <img
                                        src="https://via.placeholder.com/48x48/1a1a2e/38bdf8?text=DLC"
                                        alt="Criminal Enterprise"
                                    ></img>
                                </div>
                                <div>
                                    <div className="dlc-name">Criminal Enterprise Starter Pack</div>
                                    <div className="dlc-type">DLC · GTA Online</div>
                                    <div className="dlc-price">$4.99</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* // ===== Reviews section ===== // */}
                <section className="section reviews ">
                    <div className="section--head"> Reviews 2,841 total</div>
                    <div className="section--review-list">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div className="review" key={index}>
                                <div className="review-head">
                                    <div className="rev-avatar">TM</div>
                                    <div>
                                        <div className="rev-name">Thomas Mumladze</div>
                                        <div className="rev-date"> october 21 2023</div>
                                    </div>
                                </div>
                                <div className="review-stars">
                                    <div className="rev-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`star ${i < 4 ? "on" : ""}`}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="review-text">
                                    Still one of the best open world games ever made. The story is incredible, the world feels
                                    alive, and GTA Online keeps getting updated. Absolutely worth every penny at this price.
                                </div>
                                <div className="review-helpful">
                                    Was this helpful?
                                    <span>No (3)</span>
                                    <span>Yes (10)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* // ===== Similar games  ===== // */}
                <section className="section similar-games">
                    <div className="section--head"> Similar games</div>
                    <div className="section--similar-product">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="similar-card">
                                <div className="similar-card--img">
                                    <img src="https://via.placeholder.com/140x187/1a0a00/f59e0b?text=RDR2" alt="RDR2" />
                                </div>
                                <div className="similar-card--title">Red Dead Redemption 2</div>
                                <div className="similar-card--price">$24.99</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </article>
    );
};

export default ProductDetails;
