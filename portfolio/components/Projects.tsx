
import React from 'react'
import { Container, Box, Typography, ThemeProvider } from '@mui/material'
import TypeWritter from '@components/TypeWritter'

import dancingScript from '@styles/dancingScript'
import ProjectCard from './ProjectCard'
const Projects = () => {
  const projects =
    [
      {
        title: 'Portfolio',
        desc: 'Visualize resume for desktop and mobile',
        features: [
          {
            primary: 'Material UI',
            secondary: 'Responsive design components for each page'
          },
          {
            primary: 'React and Material UI',
            secondary: 'Progress bar to show percent label inside bar - createPortal'
          },
          {
            primary: 'Javascript',
            secondary: 'Height for each page set on resize'
          },
          {
            primary: 'NextJS',
            secondary: 'Layout and routing optimized'
          }
        ],
        link: 'https://github.com/DannyNguyenCode/portfolio',
        hostLink: 'https://portfolio-pyepmszhp-dannynguyencodes-projects.vercel.app/'
      },
      {
        title: 'Pet200',
        desc: `Centralized place for pet caretakers to upload pet's profile`,
        features: [
          {
            primary: 'AuthJS',
            secondary: 'User authorization and authentication'
          },
          {
            primary: 'Create, Read, Update, and Delete',
            secondary: 'CRUD operations for user'
          },
          {
            primary: 'AI smartcrop - https://github.com/jwagner/smartcrop.js',
            secondary: 'Crop uploaded images using AI'
          },
          {
            primary: 'Cloudinary',
            secondary: 'Store uploaded image on Cloudinary and save URL link to MongoDB database'
          },
          {
            primary: 'Resend - https://resend.com/',
            secondary: 'Generate passcode and send email'
          },
          {
            primary: 'NextJS',
            secondary: 'Routing/dynamic routing and server side rendering'
          },

        ],
        link: "https://github.com/DannyNguyenCode/pet200",
        hostLink: ''
      },
      {
        title: 'API',
        desc: 'CRUD operations on products and users, utilizing Python',
        features: [
          {
            primary: 'Python',
            secondary: 'Programming language'
          },
          {
            primary: 'Flask',
            secondary: 'Used to create routes/endpoints to enable requests and responses'
          },
          {
            primary: 'SQLAlchemy',
            secondary: 'ORM package to execute statements to database utilizing insert, update, select, and delete'
          },
          {
            primary: 'Flask-RestX',
            secondary: 'Integrate Swagger UI into the project for documentation and testing'
          },
          {
            primary: 'Supabase',
            secondary: 'Database website utilizing Postgres to store, read, and write'
          }
        ],
        link: "https://github.com/DannyNguyenCode/shoppingcart_api",
        hostLink: ''
      },
      {
        title: 'Snake Game',
        desc: `Basic Arcade Snake Game on Android`,
        features: [
          {
            primary: 'Flutter',
            secondary: 'Built-in widgets to create layouts and present data'
          },
          {
            primary: 'Dart',
            secondary: 'Programming language used to integrate movement, determine state of game, and create classes'
          },
          {
            primary: 'Flame Engine',
            secondary: 'Ready to ship widgets which include controlling character, collision logic, and create the board'
          },
          {
            primary: 'Firebase',
            secondary: 'Authentication, Authorization, and database integration'
          },

        ],
        link: "https://github.com/DannyNguyenCode/flutter_snake",
        hostLink: ''
      },

    ]
  return (
    <Box minHeight={'inherit'} bgcolor={''}>
      <Container sx={{ padding: '1em', minHeight: 'inherit' }} maxWidth='xl'>
        <Box
          width={'100%'}
          sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginY: '1rem' }}
        >
          <TypeWritter>
            <ThemeProvider theme={dancingScript}>
              <Typography textAlign={'center'} color='black' variant='h3'>Projects</Typography>
            </ThemeProvider>
          </TypeWritter>
        </Box>
        <ProjectCard projects={projects} />
      </Container>
    </Box>
  )
}

export default Projects