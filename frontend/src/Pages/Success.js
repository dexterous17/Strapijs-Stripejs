import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import '../Style/Sucess.css'
import { useLocalStorage } from '@rehooks/local-storage';
import { Card, Spinner } from '@blueprintjs/core'
import { authreceive } from "../Utils/Requestoptions";
import { Datefunction } from "../Utils/Date";
export default function Sucesss() {
    const search = useLocation().search;
    const payment_intent = new URLSearchParams(search).get("payment_intent");
    const [order, setOrder] = useState()
    const [token] = useLocalStorage('jwt')

    useEffect(() => {
        const fetch = async () => {
            console.log(payment_intent)
            const data = JSON.stringify({ data: payment_intent })
            await axios.request(authreceive({ url: '/api/findoneorder', data: data, token: token })).then(function (response) {
                setOrder(response.data.data)
            })
        }
        fetch()
    }, [])

    if (order) {
        return (
            <Card style={{ display: "flex", flexDirection: "column", alignItem: "center" }}>
                <div className="success_order_container" style={{ width: "400px" }}>
                    <div className="success_order_title">
                        <div>
                            Order Id {order?.id}
                        </div>
                        <div>
                            Order Created at {Datefunction(order?.updatedAt)}
                        </div>
                    </div>
                    <div className="Success_product">
                        {
                            order?.ordersfromusers.map(product => <Successproduct key={product?.id} product={product?.product} quantity={product?.quantity} />)
                        }
                    </div>
                    <div className="success_order_footer">
                        <div>
                            Total Different Product {order.ordersfromusers.length}
                        </div>
                        <div>
                            Payment Amount : $ {(order.payment_amount / 100)}
                        </div>
                    </div>
                </div>
            </Card >
        )
    } else {
        return <Spinner size={100} value={0.5} />
    }
}


export function Successproduct({ product, quantity }) {

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div>
                <img style={{ width: "125px", height: "125px", objectFit: "contain" }} src={`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${product.Product_Image.formats.large.url}`} alt={product.Product_Image.formats.large.url} />
            </div>
            <div style={{ width: "250px", height: "120px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Product name</div>
                    <div>{product.Product_name}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Product price</div>
                    <div>$ {product.Product_price / 100}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Product quanity</div>
                    <div>{quantity}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Total Price</div>
                    <div>{quantity * (product.Product_price / 100)}</div>
                </div>
            </div>
        </div>
    )
}