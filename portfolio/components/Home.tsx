'use client'
import { Box,Button,CircularProgress } from '@mui/material'
import React,{useState} from 'react'
import { common } from '@mui/material/colors'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Home = () => {

    const [loading, setLoading] = useState(false);
    const handleButtonClick=()=>{
        setLoading(true)
        const element = document.getElementById("skills") as HTMLElement;
        element.scrollIntoView({behavior: "smooth"});
        setLoading(false)
       
      }
  return (  
    <Box id='home' display={'flex'} textAlign={'center'}alignItems={'center'} justifyContent={'center'} width={'100%'} height={'inherit'} bgcolor={'primary.main'}>
        <Box sx={{ m: 1,height:'fit-content', position:'relative' }}>
            <Button
              variant="contained"
              disabled={loading}
              onClick={handleButtonClick}
              endIcon={<ArrowForwardIcon />}
            >
              Click to See next
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                color: common.white,
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
                }}
              />
            )}
        </Box>
    </Box>
  )
}

export default Home