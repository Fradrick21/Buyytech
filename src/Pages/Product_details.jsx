import React from 'react'
import { useLocation } from "react-router-dom";
import Product from '../Components/Product'
import ReviewForm from '../Components/ReviewForm';

const Product_details = () => {
  const location = useLocation();
  const productId = location.state?.productId ?? null;

  return (
    <div>
        <Product productId={productId}></Product>
        <div className="mx-auto -mt-4 max-w-[1400px] px-2 pt-0 pb-0 sm:px-3 md:px-4 lg:px-5">
          <ReviewForm productId={productId}></ReviewForm>
        </div>
    </div>
  )
}

export default Product_details
