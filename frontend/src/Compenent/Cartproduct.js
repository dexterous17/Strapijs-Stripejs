import React from "react";
import { useDispatch } from 'react-redux'
import { removefromcart, addquantity, removequantity } from "../reducers/rootReducer";
import { Button } from "@blueprintjs/core";


const Cartproduct = ({ itemid, quantity }) => {
    const dispatch = useDispatch()
    return (
        <div className="cart-product">
            <div>
                <Button onClick={() => dispatch(removefromcart(itemid))}>Remove from Cart</Button>
            </div>
            <div className="Cart_product_button">
                <Button onClick={() => dispatch(removequantity(itemid))}> - </Button>
                {
                    quantity
                }
                <Button onClick={() => dispatch(addquantity(itemid))}> + </Button>
            </div>
        </div>
    )
}

export default React.memo(Cartproduct)