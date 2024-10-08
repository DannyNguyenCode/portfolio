'use client'
import React from 'react'
import { Box,Container,Typography } from '@mui/material'
import EducationTable from './EducationTable'
import EducationAccordian from './EducationAccordian'
const Education = () => {
  return (
    <Box sx={{minHeight:'inherit', justifyContent:'center',alignItems:'center',display:'flex'}}  bgcolor={'primary.main'}>
        <Container maxWidth='xl'>
            <Typography
              sx={{ flex: '1 1 100%', margin:'1.5rem' }}
              variant="h6"
              id="tableTitle"
              textAlign={'center'}
              color='white'
            >
              Education
            </Typography>
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