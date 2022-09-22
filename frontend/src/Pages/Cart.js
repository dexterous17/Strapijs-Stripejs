import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Memocartitem } from "../Compenent/Memocartitem";
import '../Style/Cart.css'
export default function Cart() {

    const Cartitems = useSelector(state => state.cartItems)

    if (Cartitems.length === 0) {
        return (
            <div className="no_cart_item">No Item in Cart</div>
        )
    } else {
        return (
            <div className="cart-container">
                <div className="cartitem-container">
                    {
                        Cartitems.map((item, _) => {
                            return (<Memocartitem key={_} Product_Id={item.itemid} quantity={item.quantity} />)
                        })
                    }
                </div>
                <div className="cartitem-button" href="/Checkout">
                    <Link to={'/Checkout'} >
                        Check out box
                    </Link>
                </div>
            </div >
        )
    }
}