import React from 'react'
import ProjectCard from './ProjectCard'
import { Container,Box,Typography } from '@mui/material'

const Projects = () => {
  const projects = 
  [
    {
      title:'Portfolio',
      desc:'Visualize resume for desktop and mobile',
      features:[
        {
          primary:'Material UI',
          secondary:'Responsive design components for each page'
        },
        {
          primary:'React and Material UI',
          secondary:'Progress bar to show percent label inside bar - createPortal'
        },
        {
          primary:'Javascript',
          secondary:'Height for each page set on resize'
        },
        {
          primary:'NextJS',
          secondary:'Layout and routing optimized'
        }
      ],
      link:'https://github.com/DannyNguyenCode/portfolio',
      hostLink:'https://portfolio-pyepmszhp-dannynguyencodes-projects.vercel.app/'
    },
    {
      title:'Pet200',
      desc:`Centralized place for pet caretakers to upload pet's profile`,
      features:[
        {
          primary:'AuthJS',
          secondary:'User authorization and authentication'
        },
        {
          primary:'Create, Read, Update, and Delete',
          secondary:'CRUD operations for user'
        },
        {
          primary:'AI smartcrop - https://github.com/jwagner/smartcrop.js',
          secondary:'Crop uploaded images using AI'
        },
        {
          primary:'Cloudinary',
          secondary:'Store uploaded image on Cloudinary and save URL link to MongoDB database'
        },
        {
          primary:'Resend - https://resend.com/',
          secondary:'Generate passcode and send email'
        },
        {
          primary:'NextJS',
          secondary:'Routing/dynamic routing and server side rendering'
        },
       
      ],
      link:"https://github.com/DannyNguyenCode/pet200",
      hostLink:''
    },

  ]
  return (
    <Box bgcolor={'primary.main'}>
      <Container sx={{padding:'1em'}} maxWidth='xl'>
        <Typography color='white' gutterBottom textAlign={'center'} variant="h5" component="div">
          Projects
        </Typography>
        <ProjectCard projects={projects}/>
      </Container>
    </Box>
  )
}

export default Projects