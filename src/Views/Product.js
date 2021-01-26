

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Product() {
    // const url = "https://shopee.p.rapidapi.com/shopee.com.br/shipping-locations"

    const url = 'http://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/3'
    const [product, setProduct] = useState(null);

    let content = null
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])

    if(product) {
        content =
        <div>
            <h1>
                {product.name}
            </h1>
        </div>
        
    }

    return (
        <div>
            {content}
        </div>
    )
}


export default Product;   