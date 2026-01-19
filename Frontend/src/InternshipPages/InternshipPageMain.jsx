import React from 'react'
import InternshipPageHero from './InternshipPageHero'
import InternshipDetails from "./DetailsPage"
import IntershipLink from "./InternshipLink"
import InternshipDomains from './InternshipDomain'
import InternshipSEO from '../SEO/IntershipSEO'

const InternshipPageMain = () => {
  return (
    <div>
      <InternshipSEO />
      <InternshipPageHero />
      <InternshipDetails />
      <InternshipDomains />
      <IntershipLink />
    </div>
  )
}

export default InternshipPageMain