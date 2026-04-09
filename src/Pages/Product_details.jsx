import React from 'react'
import { useLocation } from "react-router-dom";
import Product from '../Components/Product'

const Product_details = () => {
  const location = useLocation();
  const productId = location.state?.productId ?? null;

  return (
    <div>
        <Product productId={productId}></Product>
    </div>
  )
}

export default Product_details
