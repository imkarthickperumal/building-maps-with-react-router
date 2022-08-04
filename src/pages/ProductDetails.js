import React from 'react'
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
  const parms = useParams();
  console.log(parms);
  return (
    <section>
        <h1>Product Details</h1>
        <p>{parms.productId}</p>
    </section>
  )
}

export default ProductDetails