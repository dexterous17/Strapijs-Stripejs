import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cartitem from "../Compenent/Cartitem";
import '../Style/Cart.css'
export default function Cart() {

    const Cartitems = useSelector(state => state.cartItems)

    if (Cartitems.length === 0) {
        return (
            <div>No Item in Cart</div>
        )
    } else {
        return (
            <div className="cart-container">
                <div className="cartitem-container">
                    {
                        Cartitems.map((item, _) => {
                            return (<Cartitem key={_} Product_Id={item} />)
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