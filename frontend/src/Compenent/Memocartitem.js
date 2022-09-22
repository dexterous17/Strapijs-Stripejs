import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Style/Cartitem.css'
import { useDispatch } from 'react-redux'
import { removefromcart, addquantity, removequantity } from "../reducers/rootReducer";


export function Cartitem({ itemid, quantity }) {

    const dispatch = useDispatch()
    const [product, setProduct] = useState()

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/products/${itemid}?populate=*`)
                setProduct(response.data.data)
            } catch (error) {
                throw Error(error)
            }
        }
        fetch()
    }, [])

    if (product) {
        return (
            <div className="cartitem">
                <img className="cartitem-image" alt={product?.attributes.Product_name} src={`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${product?.attributes.Product_Image.data.attributes.formats.large.url}`} />
                <div className="cartitem-container">
                    <div className="cartitem-information-1">
                        <div className="cartitem-name">
                            {
                                product?.attributes.Product_name
                            }
                        </div>
                        <div className="cartitem-price">
                            ${
                                (product?.attributes.Product_price / 100)
                            }
                        </div>
                    </div>
                    <div className="cartitem-information-2">
                        {
                            product?.attributes.Product_information
                        }
                    </div>
                </div>
                <div >
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
            </div>
        )
    } else {
        return (
            <div className="cartitem">
                <div className="cartitem-image skeleton">

                </div>
                <div className="cartitem-information-container">
                    <div className="cartitem-information-1">
                        <div className="cartitem-name skeleton">

                        </div>
                        <div className="cartitem-price skeleton">

                        </div>
                    </div>
                    <div className="cartitem-information-2 skeleton">

                    </div>
                </div>
            </div>
        )
    }
}

export const Memocartitem = React.memo(Cartitem)