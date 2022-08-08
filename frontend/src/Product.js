import React from 'react'
import { useDispatch } from 'react-redux'
import './Style/Product.css'
import { addtocart } from './reducers/rootReducer'

export default function Product({ Product_id, Product_image, Product_name, Product_information, Product_price }) {

    const dispatch = useDispatch()
    return (
        <div className="Product">
            <img className="Product_Image" src={`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${Product_image}`} />
            <div className='Product_name'>
                <h3>Product name : {
                    Product_name
                }</h3>
            </div>
            <div className='Product_price'>
                <div>Product Price : $ {
                    (Product_price/100)
                }</div>
            </div>
            <div className='Product_information'>
                <div>Product Information : {
                    Product_information
                }</div>
            </div>
            <button onClick={() => dispatch(addtocart(Product_id))}>Add to cart</button>
        </div>
    )
}