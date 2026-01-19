import React from 'react'
import HomeHero from './HomeHero'
import HomeService from './HomeService'
import WhoWeAreSection from './WhoWeAre'
import HomeWhyUs from './HomeWhyUs'
import CareersSection from "./AnimImage"
import AwardsSection from "./ScrollingCard"
import HomeSEO from '../SEO/HomeSEO'

const HomeMain = () => {
  return (
    <div>
      <HomeSEO />
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