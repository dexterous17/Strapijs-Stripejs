import React, { useEffect, useState } from "react";
import './Style/Main.css'
import axios from 'axios'
import Product from './Product'
import MoonLoader from "react-spinners/MoonLoader";


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
                            <Product key={element.id} Product_id={element.id} Product_name={element.attributes.Product_name} Product_information={element.attributes.Product_information} Product_price={element.attributes.Product_price} Product_image={element.attributes.Product_Image.data.attributes.formats.large.url} />
                        ))
                        :
                        <MoonLoader
                            color="#008cff"
                            cssOverride={{}}
                            loading
                            size={100}
                            speedMultiplier={1}
                        />
                }
            </main>
    )
}