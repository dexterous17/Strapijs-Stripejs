import React from "react"
import '../Style/Order.css'
import SuccessProductBulk from "./SucessProductBulk"

export default function Order({ order }) {
    return (
        <div className="Order_container">
            <div className="Order_title">
                <div>
                    ID {order.id}
                </div>
                <div>
                    Date {order.updatedAt}
                </div>
            </div>
            <div className="Order_main">
                {
                    order.ordersfromusers.map(product => { return (<SuccessProductBulk key={product?.id} product={product?.product} quantity={product?.quantity} />) })
                }
            </div>
            <div className="Order_footer">
                <div>
                    Payment amount
                </div>
                <div>
                    $ {order.payment_amount / 100}
                </div>
            </div>
        </div>
    )
}