import React from 'react'
import Product_list from "../Components/Product_list";
import { Toaster } from "react-hot-toast";
import ShowOfferToast from "../Components/showOfferToast";
const Home = () => {
  return (
    <div>
        <Product_list></Product_list>
        <Toaster position="bottom-right" />
        <ShowOfferToast />
    </div>
  )
}

export default Home