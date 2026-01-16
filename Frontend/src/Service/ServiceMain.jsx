import React from 'react'
import HeroService from "./HeroService"
import ServiceCard from "./ServiceCard"
import NonTechService from "./NonTechService"
import TechTools from "./TechTools"
import ServiceCTA from "./ServiceCTA"
import WhyUs from "./WhyUS"

const ServiceMain = () => {
  return (
    <div>
        <HeroService />
        <ServiceCard />
        <NonTechService />
        <TechTools />
        <WhyUs />
        <ServiceCTA />
    </div>
  )
}

export default ServiceMain