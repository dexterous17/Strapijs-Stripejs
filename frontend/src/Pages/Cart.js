import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "../Compenent/Cartitem";
import '../Style/Cart.css'
export default function Cart() {

    const Cartitems = useSelector(state => state.itemId)

    async function checkout() {
        await axios.post('https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/createorder', {
            Cartitems
        })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.open(url)
            })
    }

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
                            return (<Cartitem key={_}  Product_Id={item} />)
                        })
                    }
                </div>
                <div onClick={checkout} className="cartitem-button">
                    Check out box
                </div>

            </div>
        )
    }
}