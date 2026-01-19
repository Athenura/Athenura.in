import React from 'react'
import CustomSoftwareHero from './CustomeHero'
import ServiceBreakdown from './CustomeWeOffers'
import TechAndProcess from './TechAndProcces'
import IndustriesServed from './CustomIndustries'
import FinalCTA from './FinalCustom'

const CustomMain = () => {
  return (
    <div>
        <CustomSoftwareHero />
        <ServiceBreakdown />
        <TechAndProcess />
        <IndustriesServed />
        <FinalCTA />     
    </div>
  )
}

export default CustomMain