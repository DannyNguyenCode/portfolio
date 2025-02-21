'use client'
import { Box, Grid2, Stack, ThemeProvider, Typography,responsiveFontSizes,createTheme, Button } from '@mui/material'
import React from 'react'

import TypeWritter from './TypeWritter';
import HomeDialog from './HomeDialog';
import dancingScript from '@styles/dancingScript'
const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (  
    <Box display={'flex'} textAlign={'center'}alignItems={'center'} justifyContent={'center'} width={'100%'} minHeight={'inherit'} bgcolor={'primary.main'}>
      <Grid2 width={'inherit'} container>
        <Grid2 display={'flex'} justifyContent={'center'} size={{xs:12,md:12}}>
          <Stack alignItems={'center'} textAlign={'center'} direction={'column'} spacing={2}>
              <TypeWritter>
                <ThemeProvider theme={dancingScript}>
                  <Typography textAlign={'center'} color='white' variant='h4'>Gia Bao Nguyen</Typography>
                </ThemeProvider>
              </TypeWritter>
             
              <Box sx={{padding:{xs:'1em'}}}>
                <ThemeProvider theme={theme}>
                    <Typography sx={{textAlign:'left'}} maxWidth={800} color='white'>
                          Junior Developer with 1 year experience developing within React and Nodejs for an e-commerce website.
                    </Typography>
                    <Typography sx={{textAlign:'left'}} maxWidth={800} color='white'>
                          An enthusiast for responsive designs, utilizing libraries such as Material UI to enhance user experience.
                    </Typography>
                    <Typography sx={{textAlign:'left'}} maxWidth={800} color='white'>
                          A computer programmer graduate with front-end, back-end, and database skills. 
                    </Typography>
                    <Typography sx={{textAlign:'left'}} maxWidth={800} color='white'>
                          Enjoys creating websites that enhances user engagement.
                    </Typography>
                    <Typography sx={{textAlign:'left'}} maxWidth={800} color='white'>
                          Finding creative solutions to difficult problems.
                    </Typography>
                </ThemeProvider>
              </Box>
       
            <Box sx={{height:'fit-content', position:'relative',width:'100%', padding:{xs:0,md:'1em'} }}  >
              <Stack width={'inherit'} direction={'row'} display={'flex'} justifyContent={'space-evenly'} spacing={2}>
                <HomeDialog title='Resume' link='https://res.cloudinary.com/dblayhcrg/image/upload/v1740109798/Resume_gn4srr.pdf' downloadLink={`https://res.cloudinary.com/dblayhcrg/image/upload/fl_attachment:Gia_Bao_Nguyen_Resume/v1740109798/Resume_gn4srr.pdf`}/>
                <HomeDialog title='Cover Letter' link='https://res.cloudinary.com/dblayhcrg/image/upload/v1728996557/CoverLetter_jr0sxe.pdf' downloadLink={`https://res.cloudinary.com/dblayhcrg/image/upload/fl_attachment:Gia_Bao_Nguyen_CoverLetter/v1728996557/CoverLetter_jr0sxe.pdf`}/>
                <Button variant="contained" href='https://github.com/DannyNguyenCode' target='_blank' rel='noopener noreferrer'>Github</Button>
              </Stack>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Home