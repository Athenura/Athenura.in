import React from 'react'
import HomeHero from './HomeHero'
import HomeService from './HomeService'
import WhoWeAreSection from './WhoWeAre'
import HomeWhyUs from './HomeWhyUs'
import CareersSection from "./AnimImage"
import AwardsSection from "./ScrollingCard"

const HomeMain = () => {
  return (
    <div>
        <HomeHero />
        <HomeService />
        <WhoWeAreSection />
        <AwardsSection />
        <CareersSection />
        <HomeWhyUs />
    </div>
  )
}

export default HomeMain