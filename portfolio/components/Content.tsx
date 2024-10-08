'use client'
import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Education from './Education'
import { ContentWrapper } from './ContentWrapper'
const Content = () => {
  return (
    <>
      <ContentWrapper pageText={'home'}>
        <Home/>
      </ContentWrapper>
      <ContentWrapper pageText={'skills'}>
        <Skills/>
      </ContentWrapper>
      <ContentWrapper pageText={'education'}>
        <Education/>
      </ContentWrapper>
    </>

  )
}

export default Content