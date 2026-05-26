// ============ Component ============ //
import Button from "./Button";

// ============ React Icon ============ //
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io"; //after add in favorites

import { PiBookmarksSimpleLight } from "react-icons/pi";
import { PiBookmarksSimpleFill } from "react-icons/pi"; //after add in wishlist

import { BsCartCheck } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs"; //after add in cart

const Card = () => {
    //remove after implementation
    let addItem = true;

    return (
        <figure className={`card`}>
            <a href="#">
                <div className="card--image">
                    <img
                        src="https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png"
                        alt=""
                    />
                </div>

                <figcaption>
                    <div className="card--title">
                        <h3>Smart watch with the sleek and stylish your perfect assistant.</h3>
                    </div>
                    <div className="card--rating">
                        ⭐⭐⭐⭐⭐<span>4.5</span>(12 orders)
                    </div>
                    <div className="card--price">$376.00</div>
                </figcaption>
            </a>

            <div className={`card-btn--action `}>
                {/* ============ add to wish list ============  */}
                <Button btnFunc={() => {}} className={`wishList ${addItem ? "card--item-add" : ""}`}>
                    {addItem ? <PiBookmarksSimpleFill /> : <PiBookmarksSimpleLight />}{" "}
                </Button>

                {/* ============ add to favorite ============  */}
                <Button btnFunc={() => {}} className={`favorite ${addItem ? "card--item-add" : ""}`}>
                    {addItem ? <IoMdHeart /> : <IoIosHeartEmpty />}
                </Button>

                {/* ============ add to cart ============ */}
                <Button btnFunc={() => {}} className="card--btn">
                    {addItem ? (
                        <>
                            <BsCartCheckFill /> remove from cart
                        </>
                    ) : (
                        <>
                            <BsCartCheck /> add to cart
                        </>
                    )}
                </Button>
            </div>
        </figure>
    );
};

export default Card;
