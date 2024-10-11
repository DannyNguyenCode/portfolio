'use client'
import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Education from './Education'
import { ContentWrapper } from './ContentWrapper'
import Employment from './Employment'
import Projects from './Projects'
import ProgressDivider from './ProgressDivider'

const Content = () => {
  return (
    <>
      <ContentWrapper pageText={'home'}>
        <Home/>
      </ContentWrapper>
      <ProgressDivider/>
      <ContentWrapper pageText={'skills'}>
        <Skills/>
      </ContentWrapper>
      <ProgressDivider/>
      <ContentWrapper pageText={'education'}>
        <Education/>
      </ContentWrapper>
      <ProgressDivider/>
      <ContentWrapper pageText={'employment'}>
        <Employment/>
      </ContentWrapper>
      <ProgressDivider/>
      <ContentWrapper pageText='projects'>
        <Projects/>
      </ContentWrapper>
    </>

  )
}

export default Content