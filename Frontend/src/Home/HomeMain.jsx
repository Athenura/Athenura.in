import React from 'react'
import HomeHero from './HomeHero'
import HomeService from './HomeService'
import WhoWeAreSection from './WhoWeAre'
import HomeWhyUs from './HomeWhyUs'

const HomeMain = () => {
  return (
    <div>
        <HomeHero />
        <HomeService />
        <WhoWeAreSection />
        <HomeWhyUs />
    </div>
  )
}

export default HomeMain