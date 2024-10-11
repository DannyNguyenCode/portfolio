'use client'
import React from 'react'
import { Box,Container,Divider,Grid2,Paper,Stack,Typography } from '@mui/material'
import EmploymentAccordion from './EmploymentAccordion'
const Employment = () => {
  const shipvistaSkills = 
  [
    {
      title:'CRUD',
      desc: 'Knowledge of RESTful API and CRUD was required to create functions to render data obtained from the back-end with the help of libaries (Axios and object-mapper).',
    },
    {
      title:'Front-End',
      desc:'Created mock-ups and gathered requirements for features for an e-commerce website. (AdobeXD, React, and Axios)'
    },
    {
      title:'Agile Environment',
      desc:'Worked in an Agile environment where discussion took place to improve all stages of development (planning, implementing, testing, and deploying).',
    },
    {
      title:'Back-End',
      desc:'Worked in Visual Studio to implement C# functions with a structured code base (Model, Service, and Controllers).',
    },
    {
      title:'DevOps',
      desc: 'An understanding of DevOps was required to implement continuous development with different stages of testing (Alpha and Beta testing) before final deployment.'
    },
  ]
  const senecaCollegeSkills=
  [
    {
      title:'Customer Service',
      desc: 'First point of contact for clients who are looking for inqueries for either general, student, hardware, software, or financial.',
    },
    {
      title:'Project Management',
      desc:'Implemented new features/projects, such as kiosks, within deadline while keeping up with the day-to-day tasks at the service desk.'
    },
    {
      title:'Requirements Gathering',
      desc:'Preparing report was required on the progress and potential features to be added from requirements gathering on a weekly basis.',
    },
    {
      title:'Communication',
      desc:'Worked in an environment that required communication between multiple departments across all four major campuses of Seneca College.',
    },
    {
      title:'Research and Problem-Solving',
      desc: 'Research and analytical skills were required for problem-solving to keep clients satisfied who had a problem, whether it is for information, hardware, or software.'
    },
  ]
  return (
    <Box sx={{minHeight:'inherit', justifyContent:'center',alignItems:'center',display:'flex'}}>
      <Stack direction={'column'} marginY={'1em'}>
  
        <Typography gutterBottom textAlign={'center'} variant="h5" component="div">
          Employment History
        </Typography>


        <Container  maxWidth={'xl'}>
          <Grid2 spacing={2} container>
            <Grid2 size={12}>
              <EmploymentAccordion skills={shipvistaSkills} company={'Shipvista'} jobTitle={'Junior Developer'}/>
            </Grid2>
            <Grid2 size={12}>
              <EmploymentAccordion skills={senecaCollegeSkills} company={'Seneca College'} jobTitle={'IT Service Desk Technologist'}/>
            </Grid2>
          </Grid2>
        </Container>
      </Stack>
    </Box>
  )
}

export default Employment