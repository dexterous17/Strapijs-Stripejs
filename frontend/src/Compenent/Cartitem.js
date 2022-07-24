import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Cartitem({ Product_Id }) {

    const [product, setProduct] = useState()

    const fetch = async () => {
        try {
            const response = await axios.get(`https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/products/${Product_Id}?populate=*`)
            console.log(response.data.data)
            setProduct(response.data.data)
        } catch (error) {
            throw Error(error)
        }
    }


    useEffect(() => {
        fetch()
    }, [])

    return (  
        <div>
            {
              console.log(product ? product.attributes.Product_name : null)
            }
        </div>
    )
}