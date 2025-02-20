import { Box } from '@mui/material'
import React from 'react'
import '@styles/typewritter.css'
const TypeWritter = ({children}:{children: React.ReactNode}) => {
  return (
    <Box className='typewritter' width={'fit-content'} >
       {children}
    </Box>
  )
}

export default TypeWritter