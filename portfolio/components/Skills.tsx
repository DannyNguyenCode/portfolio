'use client'
import { Box,Button,CircularProgress,Skeleton } from '@mui/material'
import React, {useEffect,useState} from 'react'
import { getElementHeights } from '@utils/getElementHeights'
import { common } from '@mui/material/colors'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Skills = () => {
    const [contentHeight,setContentHeight]=useState<number>(0)
    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
    useEffect(()=>{
        timer.current = setTimeout(() => {
            const navHeight:any = getElementHeights('nav');
            const footerHeight:any = getElementHeights('footer')
            const mainHeight = window.innerHeight
      
            setContentHeight(mainHeight - navHeight-footerHeight)
            const windowSizeHandler = () => {
              setContentHeight(mainHeight - navHeight-footerHeight)
            };
            window.addEventListener("resize", windowSizeHandler);
      
            return () => {
              window.removeEventListener("resize", windowSizeHandler);
      
            };
          }, 2000);


      
      
    },[contentHeight])
    const handleButtonClick=()=>{
        setLoading(true)
       
      }
  return (
    <>
    {contentHeight?    
    <Box id='skills' display={'flex'} textAlign={'center'}alignItems={'center'} justifyContent={'center'} width={'100%'} height={contentHeight} >
        <Box sx={{ m: 1,height:'fit-content',position:'relative' }}>
            <Button
              variant="contained"
              disabled={loading}
              onClick={handleButtonClick}
              endIcon={<ArrowForwardIcon />}
            >
              Load up skills
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
    </Box>: 
    <Skeleton sx={{ bgcolor: 'grey.600' }} variant="rectangular" width={'100vw'} height={'100vh'} />}
</>
  )
}

export default Skills