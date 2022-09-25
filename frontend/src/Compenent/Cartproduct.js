import React from "react";
import { useDispatch } from 'react-redux'
import { removefromcart, addquantity, removequantity } from "../reducers/rootReducer";

const Cartproduct = ({ itemid, quantity }) => {
    const dispatch = useDispatch()
    return (
        <div className="cart-product">
            <div>
                <button onClick={() => dispatch(removefromcart(itemid))}>Remove from Cart</button>
            </div>
            <div className="Cart_product_button">
                <button onClick={() => dispatch(removequantity(itemid))}> - </button>
                {
                    quantity
                }
                <button onClick={() => dispatch(addquantity(itemid))}> + </button>
            </div>
        </div>
    )
}

export default React.memo(Cartproduct)