import React, { useEffect, useState } from "react";
import axios from 'axios'
import Order from "../Compenent/Order";
import '../Style/Orders.css'
import { useLocalStorage } from '@rehooks/local-storage';
import { authget } from "../Utils/Requestoptions";
import { Spinner } from "@blueprintjs/core";
export default function Orders() {
    const [orders, setOrders] = useState()
    const [token] = useLocalStorage('jwt')
    useEffect(() => {
        async function fetch() {
            await axios.request(authget({ url: '/api/getmutipleorder', token: token }))
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
                        orders.map((order, _) => { return (<Order order={order} key={_} />) })
                    }
                </div>
            )
        }
    } else return <Spinner intent="primary" />

}