import React from 'react'
import { useDispatch } from 'react-redux'
import '../Style/Product.css'
import { addtocart } from '../reducers/rootReducer'

const Product = ({ id, image, name, information, price }) => {
    const dispatch = useDispatch()
    return (
        <div className="Product">
            <img className="Product_Image" alt={name} src={`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${image}`} />
            <div className='Product_name'>
                <h3>Product name : {
                    name
                }</h3>
            </div>
            <div className='Product_price'>
                <div>Product Price : $ {
                    (price / 100)
                }</div>
            </div>
            <div className='Product_information'>
                <div>Product Information : {
                    information
                }</div>
            </div>
            <button className="Product_button" onClick={() => dispatch(addtocart({ itemid: id, productName: name, price: price, information: information }))}>Add to cart</button>
        </div>
    )
}

export default Product