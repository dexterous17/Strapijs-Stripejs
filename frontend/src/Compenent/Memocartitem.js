import React from "react";
import '../Style/Cartitem.css'
import Cartproduct from "./Cartproduct";
import Skeleton from "./Skeleton";

export function Cartitem({ itemid, name, price, information, quantity, image }) {

    if (itemid && name && price && information && quantity && image) {
        return (
            <div className="cartitem">
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
            </div>
        )
    } else {
        return <Skeleton />
    }
}

export const Memocartitem = React.memo(Cartitem)