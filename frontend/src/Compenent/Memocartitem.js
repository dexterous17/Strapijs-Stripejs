import React, { memo } from "react";
import '../Style/Cartitem.css'
import Skeleton from "./Skeleton";
import { useDispatch } from 'react-redux'
import { removefromcart, addquantity, removequantity } from "../reducers/rootReducer";
import { Button, Card } from "@blueprintjs/core";


export const Memocartitem = memo(function Cartitem({ itemid, name, price, information, quantity, image }) {

    if (itemid && name && price && information && quantity && image) {
        return (
            <Card className="cartitem">
                <img className="cartitem-image" alt={name} src={`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${image}`} />
                <div className="cartitem-container">
                    <div className="cartitem-information-1">
                        <div className="cartitem-name">
                            {
                                name
                            }
                        </div>
                        <div className="cartitem-price">
                            ${
                                (price / 100)
                            }
                        </div>
                    </div>
                    <div className="cartitem-information-2">
                        {
                            information
                        }
                    </div>
                </div>
                <Cartproduct itemid={itemid} quantity={quantity} />
            </Card>
        )
    } else {
        return <Skeleton />
    }
})


const Cartproduct = memo(function cartproduct({ itemid, quantity }) {
    const dispatch = useDispatch()
    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
            <Button onClick={() => dispatch(removefromcart(itemid))}>Remove from Cart</Button>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button onClick={() => dispatch(removequantity(itemid))}> - </Button>
                {
                    quantity
                }
                <Button onClick={() => dispatch(addquantity(itemid))}> + </Button>
            </div>
        </div >
    )
})