import React from 'react'
import Cartdetail from '../Components/Cartdetail'
import FeaturesSection from '../Components/FeaturesSection'
import DealsSection from '../Components/DealSection'

const CartPage = () => {
  return (
    <div>
        <Cartdetail></Cartdetail>
        <FeaturesSection></FeaturesSection>
        <div className="mt-10">
          <DealsSection></DealsSection>
        </div>
    </div>
  )
}

export default CartPage
