import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import { addItemToList,removeItemFromList } from "./helper/WishlistHelper";
// import Cart from "./Cart";

const Card = ({ product, addtoCart = true, removeFromCart = false,removeFromList= false, whislist = true, setReload = f => f,
    //   function(f){return f}
    reload = undefined }) => {

    const [redirect, setRedirect] = useState(false);
    const [wishredirect, setWishRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const CardTitle = product ? product.name : "A Photo from Pixel"
    //   const CardDescription = product ?product.description : "Deafult Desciption"
    const CardPrice = product ? product.price : "Deafult"

    const addToCart = () => {
        
        addItemToCart(product, () => setRedirect(true));
    };

    const addToWhislist = () => {
        addItemToList(product, () => setWishRedirect(true))
    }

    const getBRedirect = wishredirect => {
        if (wishredirect) {
            return <Redirect to="/wishlist" />;
        }
    };


    const getARedirect = redirect => {
        if (redirect) {
            return <Redirect to="/Cart" />;
        }
    };

    const showWhishList = addToWhislist => {
        return (
            addToWhislist && (
                <div
                    onClick={addToWhislist}
                    className="whislist-product"
                >
                    <i class="far fa-heart"></i>
                </div>
            )
        );
    };

    const showAddToCart = addToCart => {
        return (
            addToCart && (
                <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                >
                    Add to Cart
                </button>
            )
        );
    };


    const showRemoveFromCart = removeFromCart => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        removeItemFromCart(product._id)
                        setReload(!reload);
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                >
                    Remove from cart
                </button>
            )
        );
    };

    const showRemoveFromList = removeFromList => {
        return (
            removeFromList && (
                <button
                    onClick={() => {
                        removeItemFromList(product._id)
                        setReload(!reload);
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                >
                    Remove from List
                </button>
            )
        );
    };
    return (
        <div className="productCardBox  ">
            {getARedirect(redirect)}

            <div className="productCardImg false">
                <div className="productImg" >
                    <ImageHelper product={product} />
                </div>
            </div>
            <div className="productStatusBox">
                {getBRedirect(wishredirect)}
                <span className="wishProduct">
                    {showWhishList(addToWhislist)}
                </span>
            </div>
            <div className="bottomTag">
                <div className="productTypeBox">
                    <p>DESIGN OF THE DAY</p>
                </div>
            </div>
            <div className="product-cradDeatils">
                <div>
                    <h3 className="card-title">  {CardTitle}</h3>
                </div>
                <div className="productPriceBox clearfix">
                    <span className="discountedPriceText ">₹ </span> <b>{CardPrice}</b>
                </div>
                <div className="rows d-flex">
                    <div className="col-" >{showAddToCart(addToCart)}</div>
                    {/* <div className="col-12">{showWhishList(whislist)}</div> */}
                    <div className="col- ">{showRemoveFromCart(removeFromCart)}</div>
                    <div className="col- ">{showRemoveFromList(removeFromList)}</div>
                </div>
            </div>




        </div>
    );
};

export default Card;
