import React, { useEffect, useState } from "react";
import axios from 'axios'
import Order from "../Compenent/Order";
import MoonLoader from "react-spinners/MoonLoader";
import '../Style/Orders.css'
import token from "../Utils/Token";


export default function Orders() {
    const [orders, setOrders] = useState()
    useEffect(() => {
        let headersList = {
            "Authorization": `Bearer  ${token}`,
            "Content-Type": "application/json"
        }
        let reqOptions = {
            url: "https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/getmutipleorder",
            method: "POST",
            headers: headersList
        }
        async function fetch() {
            await axios.request(reqOptions)
                .then((data) => {
                    setOrders(data.data.data)
                });
        }
        fetch()
    }, [])

    if (orders) {
        if (orders.length === 0) {
            return (
                <div className="no_order">
                    No Order till now
                </div>
            )
        } else {
            return (

                <div className="Orders_container">
                    {
                        orders.map(order => { return (<Order order={order} />) })
                    }
                </div>
            )
        }
    } else return (<MoonLoader
        color="#008cff"
        cssOverride={{}}
        loading
        size={100}
        speedMultiplier={1}
    />)

}