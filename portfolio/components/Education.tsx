'use client'
import React from 'react'
import { Box,Container,Typography,ThemeProvider } from '@mui/material'
import EducationTable from './EducationTable'
import EducationAccordian from './EducationAccordian'
import TypeWritter from '@components/TypeWritter'

import dancingScript from '@styles/dancingScript'
const Education = () => {
  return (
    <Box sx={{minHeight:'inherit', justifyContent:'center',alignItems:'center',display:'flex'}}  bgcolor={'primary.main'}>
        <Container maxWidth='xl'>

            <Box
              width={'100%'}
              sx={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'1em'}}
            >
              <TypeWritter>
                  <ThemeProvider theme={dancingScript}>
                    <Typography textAlign={'center'} color='white' variant='h4'>Education</Typography>
                  </ThemeProvider>
              </TypeWritter>
            </Box>

            <Box display={{xs:'none',md:'flex'}}>
                <EducationTable/>
            </Box>
            <Box display={{xs:'flex',md:'none'}}>
                <EducationAccordian/>
            </Box>
        </Container>
    </Box>
  )
}

export default Education