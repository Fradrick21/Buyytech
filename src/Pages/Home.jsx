import React from 'react'
import HeroSlider from '../Components/HeroSlider'
import CategoryGrid from '../Components/CategoryGrid'
import DealSection from '../Components/DealSection'
import HeroDealsBanner from '../Components/HeroDealsBanner'
import Reviews from '../Components/Reviews'

const Home = () => {
  return (
    <div>
        <HeroSlider></HeroSlider>
        <CategoryGrid></CategoryGrid>
        <DealSection></DealSection>
        <HeroDealsBanner></HeroDealsBanner>
        <Reviews></Reviews>
    </div>
  )
}

export default Home;