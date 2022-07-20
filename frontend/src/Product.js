import React from 'react'
import './Style/Product.css'

export default function Product({ Product_image, Product_name, Product_information, Product_price }) {
    return (
        <div className="Product">
            <img className="Product_Image" src={`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1337.githubpreview.dev${Product_image}`} />
            <div className='Product_name'>
                <h3>Product name : {
                    Product_name
                }</h3>
            </div>
            <div className='Product_price'>
                <div>Product Price : {
                    Product_price
                }</div>
            </div>
            <div className='Product_information'>
                <div>Product Information : {
                    Product_information
                }</div>
            </div>
            <button>Add to cart</button>
        </div>
    )
}