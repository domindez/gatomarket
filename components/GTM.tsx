'use client'

import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const GTagManager = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-KDFWVBD'
    }
    TagManager.initialize(tagManagerArgs)
  }, [])
  return (
    <></>
  )
}

export default GTagManager
