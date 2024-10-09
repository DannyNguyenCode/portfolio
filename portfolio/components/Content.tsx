'use client'
import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Education from './Education'
import { ContentWrapper } from './ContentWrapper'
import Employment from './Employment'

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
      <ContentWrapper pageText={'employment'}>
        <Employment/>
      </ContentWrapper>
    </>

  )
}

export default Content