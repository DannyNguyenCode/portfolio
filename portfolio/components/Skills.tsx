'use client'
import { Box,Container,Grid2,Skeleton,Typography } from '@mui/material'
import React, {useEffect,useState} from 'react'
import { getElementHeights } from '@utils/getElementHeights'
import ProgressBarWithLabel from './ProgressBarWithLabel';


const skillSets = [
    {name:'JavaScript',value:85},
    {name:'React',value:85},
    {name:'Axios',value:75},
    {name:'Mongoose',value:75},
    {name:'Material UI',value:80},
    {name:'NodeJS',value:75},
    {name:'NextJS',value:70},
    {name:'AuthJS',value:70},
    {name:'Git',value:70}
]
const Skills = () => {
    const [contentHeight,setContentHeight]=useState<number>(0)

    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);


    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
    useEffect(()=>{
        timer.current = setTimeout(() => {
            const navHeight:number = getElementHeights('nav') as number;
            const footerHeight:number = getElementHeights('footer') as number
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

  return (
    <>
    {contentHeight?
    <Container maxWidth='xl'>    
        <Box id='skills' display={'flex'} width={'100%'} height={contentHeight}>
            <Grid2 alignItems="center" justifyContent="center" width={'inherit'} spacing={2} container>

                {skillSets.map((skill)=>{
                    return(
                        <Grid2 className="" size={{xs:12,md:3}}>
                            <Box marginLeft={'8px'}>
                                <Typography
                                  variant="subtitle1"
                                  sx={{ color: 'text.secondary' }}
                                >{skill.name}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mx: 1 }}>
                                    <ProgressBarWithLabel value={skill.value.toString()}/>
                                </Box>
                            </Box>
                        </Grid2>
                    )
                
                })}
    
            </Grid2>
        </Box>
    </Container>: 
    <Skeleton sx={{ bgcolor: 'grey.600' }} variant="rectangular" width={'100vw'} height={'100vh'} />}
</>
  )
}

export default Skills