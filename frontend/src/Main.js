import React, { useEffect, useState } from "react";
import './Style/Main.css'
import axios from 'axios'
import Product from './Compenent/Product'
import { Spinner } from '@blueprintjs/core'


export default function Main() {
    const [Products, setProducts] = useState();


    const fetch = async () => {
        try {
            const response = await axios.get('https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/products?populate=*')
            setProducts(response.data.data)
        } catch (error) {
            throw Error(error)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <main>
            {
                Products
                    ? Products.map((element) => (
                        <Product key={element.id} id={element.id} name={element.attributes.Product_name} information={element.attributes.Product_information} price={element.attributes.Product_price} image={element.attributes.Product_Image.data.attributes.formats.large.url} />
                    ))
                    :
                    <Spinner size={100} />
            }
        </main>
    )
}