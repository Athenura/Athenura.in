import React from 'react'
import InternshipPageHero from './InternshipPageHero'
import InternshipDetails from "./DetailsPage"
import IntershipLink from "./InternshipLink"
import InternshipDomains from './InternshipDomain'

const InternshipPageMain = () => {
  return (
    <div>
      <InternshipPageHero />
      <InternshipDetails />
      <InternshipDomains />
      <IntershipLink />
    </div>
  )
}

export default InternshipPageMain