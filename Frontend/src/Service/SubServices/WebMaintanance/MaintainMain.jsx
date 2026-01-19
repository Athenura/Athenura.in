import React from 'react'
import MaintenanceHero from './MaintainHero'
import MaintenanceFeatures from './MaintenanceFeatures'
import MaintenanceWorkflow from './WorkFlow'
import MaintenanceCTA from './MaintainCTA'

const MaintainMain = () => {
  return (
    <div>
        <MaintenanceHero />
        <MaintenanceWorkflow />
        <MaintenanceFeatures />
        <MaintenanceCTA />
    </div>
  )
}

export default MaintainMain