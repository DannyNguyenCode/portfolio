
import React from 'react'
import { Container, Box, Typography, ThemeProvider } from '@mui/material'
import TypeWritter from '@components/TypeWritter'

import dancingScript from '@styles/dancingScript'
import ProjectCard from './ProjectCard'
const Projects = () => {
  const projects =
    [
      {
        title: 'Python API',
        desc: 'CRUD operations on products and users, utilizing Python',
        features: [
          {
            primary: 'Flask',
            secondary: 'Used to create routes/endpoints to enable requests and responses'
          },
          {
            primary: 'SQLAlchemy',
            secondary: 'ORM package to execute statements to database utilizing insert, update, select, and delete'
          },
          {
            primary: 'Flask-Smorest/Marshmallow',
            secondary: 'Integrate Swagger UI into the project for documentation and testing'
          },
          {
            primary: 'Supabase',
            secondary: 'Database SQL utilizing Postgres to store, read, and write'
          }
        ],
        link: "https://github.com/DannyNguyenCode/shoppingcart_api",
        hostLink: 'https://shoppingcart-api.vercel.app/docs'
      },
      {
        title: 'Pokedex',
        desc: `View the first 150 Pokemons and add them to your collection`,
        features: [

          {
            primary: 'Angular 20+',
            secondary: 'Utilizing the framework to build components and services and making use of signal, input, and injections to manage data'
          },
          {
            primary: 'Angular Material',
            secondary: 'Implemented components (Grid List, Cards, Menu, Snackbar and Buttons) and themes for responsive design'
          },
          {
            primary: 'Angular Services',
            secondary: 'Injected services into components to make calls to third party API and my Pokedex API and authenticate users'
          },
          {
            primary: 'Data Binding',
            secondary: 'Bind data to components using signal and input'
          }

        ],
        link: "https://github.com/DannyNguyenCode/pokedex",
        hostLink: 'https://pokedex-beige-alpha-86.vercel.app/'
      },
      {
        title: 'Pokedex API',
        desc: 'CRUD operations on users and Pokemons, utilizing Python',
        features: [
          {
            primary: 'Flask',
            secondary: 'Used to create routes/endpoints to enable requests and responses'
          },
          {
            primary: 'Firebase',
            secondary: 'Utilizing Cloud Firestore Admin SDK to store, read, and write to the NoSQL database'
          }
        ],
        link: "https://github.com/DannyNguyenCode/pokedexapi",
        hostLink: 'https://pokedexapi-seven.vercel.app/'
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
        hostLink: 'https://pet200.vercel.app/'
      },
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