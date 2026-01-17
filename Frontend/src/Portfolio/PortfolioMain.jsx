import React from 'react'
import AdvancedPortfolio from './AdvancedPortfolio'
import PortfolioHero from './PortfolioHero'
import ArchitectureSection from './Architecture'
import Roadmap from "./Roadmap"

const PortfolioMain = () => {
  return (
    <div>
        <PortfolioHero />
        <AdvancedPortfolio />
        <ArchitectureSection />
        <Roadmap />
    </div>
  )
}

export default PortfolioMain