import React from 'react'
import WebAppHero from './WebHero'
import WhatWeOffer from './WebWeOffer'
import TargetIndustries from './WebIndustries'
import WebProcess from "./WebProccess" 

const WebMain = () => {
  return (
    <div>
        <WebAppHero />
        <WhatWeOffer />
        <TargetIndustries />
        <WebProcess />
    </div>
  )
}

export default WebMain