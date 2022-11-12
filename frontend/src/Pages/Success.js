import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import MoonLoader from "react-spinners/MoonLoader";
import Success_product from "../Compenent/Success_product";
import '../Style/Sucess.css'
import token from "../Utils/Token";

export default function Sucesss() {
    const search = useLocation().search;
    const payment_intent = new URLSearchParams(search).get("payment_intent");
    const [order, setOrder] = useState()

    let headersList = {
        "Authorization": `Bearer  ${token}`,
        "Content-Type": "application/json"
    }

    let reqOptions = {
        url: "https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/findoneorder",
        method: "POST",
        headers: headersList,
        data: { payment_intent },
    }

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.request(reqOptions)
            setOrder(response.data.data)

        }

        fetch()
    }, [])

    if (order) {
        return (
            <div className="success_order">
                <div className="success_order_container">
                    <div className="success_order_title">
                        <div>
                            Order Id {order?.id}
                        </div>
                        <div>
                            Order Created at {order?.updatedAt}
                        </div>
                    </div>
                    <div className="Success_product">
                        {
                            order?.ordersfromusers.map(product => <Success_product key={product?.id} product={product?.product} quantity={product?.quantity} />)
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
            </div>
        )
    } else {
        return (
            <MoonLoader
                color="#008cff"
                cssOverride={{}}
                loading
                size={100}
                speedMultiplier={1}
            />
        )
    }
} 