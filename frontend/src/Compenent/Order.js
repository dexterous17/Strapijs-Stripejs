import { Card, Label } from "@blueprintjs/core"
import React from "react"
import { Datefunction } from "../Utils/Date"

export default function Order({ order }) {
    return (
        <Card style={{ marginBottom: "5px", width: "300px" }}>
            <Label style={{ display: "flex", marginBottom: "5px", justifyContent: "space-between" }}>
                <Label style={{ marginBottom: "5px" }}>
                    ID {order.id}
                </Label>
                <Label style={{ marginBottom: "5px" }}>
                    Date {Datefunction(order.updatedAt)}
                </Label>
            </Label>
            <Label style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", marginBottom: "5px" }}>
                {
                    order.ordersfromusers.map(product => { return (<SuccessProductBulk key={product?.id} product={product?.product} quantity={product?.quantity} />) })
                }
            </Label>
            <Label style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <Label style={{ marginBottom: "5px" }}>
                    Payment amount
                </Label>
                <Label style={{ marginBottom: "5px" }}>
                    $ {order.payment_amount / 100}
                </Label>
            </Label>
        </Card>
    )
}

const SuccessProductBulk = ({ product, quantity }) => {
    return (
        <Label style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginBottom: "5px" }}>
            <Label style={{ marginBottom: "5px" }}>Product Name : {product.Product_name}</Label>
            <Label style={{ marginBottom: "5px" }}>X  {quantity}</Label>
        </Label>
    )
}