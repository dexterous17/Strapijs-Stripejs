import { Button, Card } from "@blueprintjs/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Memocartitem } from "../Compenent/Memocartitem";
import '../Style/Cart.css'
export default function Cart() {
    const Cartitems = useSelector(state => state.cartItems)

    if (Cartitems.length === 0) {
        return (
            <Card className="no_cart_item">No Item in Cart</Card>
        )
    } else {
        return (
            <div className="cart-container">
                <div className="cartitem-container">
                    {
                        Cartitems.map((item, _) => {
                            return (<Memocartitem key={_} itemid={item.itemid} name={item.productName} price={item.price} information={item.information} quantity={item.quantity} image={item.image} />)
                        })
                    }
                </div>
                <Button className="cartitem-button" href="/Checkout">
                    <Link to={'/Checkout'} >
                        Check out box
                    </Link>
                </Button>
            </div >
        )
    }
}

