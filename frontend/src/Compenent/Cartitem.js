import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Style/Cartitem.css'
import { useDispatch } from 'react-redux'
import { removefromcart } from "../reducers/rootReducer";
import { useSelector } from "react-redux";

export default function Cartitem({ Product_Id }) {

    const Cartitems = useSelector(state => state.itemId)

    const dispatch = useDispatch()
    const [product, setProduct] = useState()

    const fetch = async () => {
        try {
            const response = await axios.get(`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/products/${Product_Id}?populate=*`)
            setProduct(response.data.data)
        } catch (error) {
            throw Error(error)
        }
    }


    useEffect(() => {
        fetch()
    }, [Cartitems.length])

    if (product) {
        return (
            <div className="cartitem">
                <img className="cartitem-image" src={`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${product?.attributes.Product_Image.data.attributes.formats.large.url}`} />
                <div className="cartitem-container">
                    <div className="cartitem-information-1">
                        <div className="cartitem-name">
                            {
                                product?.attributes.Product_name
                            }
                        </div>
                        <div className="cartitem-price">
                            ${
                                 (product?.attributes.Product_price/100)
                            }
                        </div>
                    </div>
                    <div className="cartitem-information-2">
                        {
                            product?.attributes.Product_information
                        }
                    </div>
                </div>
                <button onClick={() => dispatch(removefromcart(Product_Id))} />
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