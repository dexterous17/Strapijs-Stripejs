import React from "react";
import '../Style/Sucess_product_bulk.css'
const SuccessProductBulk = ({ product, quantity }) => {
    return (
        <div className="Sucess_product_bulk_container">
            <div>Product Name :</div>
            <div>
                {product.Product_name}
            </div>
        </div>
    )
}

export default SuccessProductBulk