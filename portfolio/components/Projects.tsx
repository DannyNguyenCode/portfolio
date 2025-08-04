
import React from 'react'
import { Container, Box, Typography, ThemeProvider } from '@mui/material'
import TypeWritter from '@components/TypeWritter'

import dancingScript from '@styles/dancingScript'
import ProjectCard from './ProjectCard'
const Projects = () => {
  const projects =
    [
      {
        title: 'Pokémon Trading Card Game (Full-Stack Multiplayer App)',
        desc: 'A turn-based online battle simulator inspired by the Pokémon TCG, supporting real-time 1v1 gameplay, deck building, and secure role-based access.',
        features: [
          {
            primary: 'Next.js + Framer Motion',
            secondary: 'Built a smooth, interactive UI for selecting, attacking, and evolving cards in real time'
          },
          {
            primary: 'Node.js + Socket.IO',
            secondary: 'Custom multiplayer server with real-time event handling for game turns and state sync'
          },
          {
            primary: 'Python Flask API',
            secondary: 'Syncs PokéAPI data to Supabase and handles backend route logic'
          },
          {
            primary: 'Auth.js + Supabase',
            secondary: 'Implemented secure JWT-based login with protected routes and role validation'
          },
          {
            primary: 'Monorepo Architecture',
            secondary: 'Decoupled game server, UI, and API layers for maintainability and scalability'
          },
          {
            primary: 'Vercel + Render Deployment',
            secondary: 'Frontend hosted on Vercel; backend and WebSocket server deployed on Render with CORS handling'
          }
        ],
        link: 'https://github.com/DannyNguyenCode/pokemon-tradingcardgame',
        hostLink: 'https://pokemon-tradingcardgame.vercel.app'
      },

      {
        title: 'Shopping Cart API',
        desc: 'A RESTful backend built to simulate a full e-commerce system with secure product, user, and order management.',
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
        title: 'Pokédex Angular App',
        desc: `A responsive, searchable Pokédex built with Angular 15, offering dynamic data streams and custom route handling.`,
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
        title: 'Pet200 (Full-Stack Adoption Platform)',
        desc: `A full-stack platform designed to match prospective pet owners with adoptable animals, featuring secure auth and image uploads.`,
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
        desc: 'A fast-loading, mobile-friendly portfolio site to showcase my development work, built with Next.js and deployed via Vercel.',
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
        hostLink: 'https://portfolio-black-two-97.vercel.app/'
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