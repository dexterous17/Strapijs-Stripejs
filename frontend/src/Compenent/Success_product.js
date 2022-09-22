import React from "react";
import '../Style/Success_product.css'

export default function Success_product({ product, quantity }) {

    return (
        <div className="Success_product_container">
            <img className="Success_product_container_image" src={`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${product.Product_Image.formats.large.url}`} />
            <div className="Success_product_container_Product_name">
                <div>Product name</div>
                <div>{product.Product_name}</div>
            </div>
            <div className="Success_product_container_Product_price">
                <div>Product price</div>
                <div>$ {product.Product_price / 100}</div>
            </div>
            <div className="Success_product_container_Product_quanity">
                <div>Product quanity</div>
                <div>{quantity}</div>
            </div>
            <div className="Success_product_container_Total_price">
                <div>Total Price</div>
                <div>{quantity * (product.Product_price / 100)}</div>
            </div>
        </div>
    )
}