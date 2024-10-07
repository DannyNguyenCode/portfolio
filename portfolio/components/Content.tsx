'use client'
import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Education from './Education'
import { ContentWrapper } from './ContentWrapper'
const Content = () => {
  return (
    <>
      <ContentWrapper>
        <Home/>
      </ContentWrapper>
      <ContentWrapper>
        <Skills/>
      </ContentWrapper>
      <Education/>
    </>

  )
}

export default Content