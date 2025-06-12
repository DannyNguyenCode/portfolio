'use client'
import { Box, Grid2, Stack, ThemeProvider, Typography, responsiveFontSizes, createTheme, Button, useMediaQuery } from '@mui/material'
import React from 'react'

import TypeWritter from './TypeWritter';
import HomeDialog from './HomeDialog';
import dancingScript from '@styles/dancingScript'
const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box marginY={matches ? '' : '2rem'} display={'flex'} textAlign={'center'} alignItems={'center'} justifyContent={'center'} width={'100%'} minHeight={'inherit'} bgcolor={''}>
      <Grid2 width={'inherit'} container>
        <Grid2 display={'flex'} justifyContent={'center'} size={{ xs: 12, md: 12 }}>
          <Stack alignItems={'center'} textAlign={'center'} direction={'column'} spacing={2}>
            <TypeWritter>
              <ThemeProvider theme={dancingScript}>
                <Typography textAlign={'center'} color='black' variant='h3'>Gia Bao Nguyen</Typography>
              </ThemeProvider>
            </TypeWritter>

            <Box sx={{ padding: { xs: '1em' }, maxWidth: matches ? '55%' : '90%' }}>
              <ThemeProvider theme={theme}>
                <Typography sx={{ textAlign: 'left', fontSize: '1.5rem' }} color='black'>
                  I'm a Junior Web Developer with 1 year of hands-on experience building full-stack applications using React, Node.js, Supabase, and Flask. I specialize in creating responsive front-ends and scalable back-end APIs that prioritize user experience and clean architecture. With a background in computer programming and a passion for solving real-world problems, I’ve contributed to projects ranging from e-commerce sites to custom database-driven tools. I'm currently focused on mastering modern back-end workflows and eager to join a team where I can continue learning, shipping quality code, and delivering real value.
                </Typography>
              </ThemeProvider>
            </Box>

            <Box sx={{ height: 'fit-content', position: 'relative', width: '100%', padding: { xs: 0, md: '1em' } }}  >
              <Stack width={'inherit'} direction={'row'} display={'flex'} justifyContent={'space-evenly'} spacing={2}>
                <HomeDialog title='Resume' link='https://res.cloudinary.com/dblayhcrg/image/upload/v1749743542/Resume_iu4keg.pdf' downloadLink={`https://res.cloudinary.com/dblayhcrg/image/upload/fl_attachment:Gia_Bao_Nguyen_Resume/v1749743542/Resume_iu4keg.pdf`} />
                <Button size='large' variant="contained" href='https://github.com/DannyNguyenCode' target='_blank' rel='noopener noreferrer'>Github</Button>
              </Stack>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Home