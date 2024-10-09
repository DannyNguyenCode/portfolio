'use client'
import React,{useEffect,useState} from 'react'
import { getElementHeights } from '@utils/getElementHeights'
import { Skeleton,Box } from '@mui/material'
export const ContentWrapper = (
    {
      children,
      pageText
     
    }:{
      children: React.ReactNode;
      pageText:string
    }
) => {
    const [contentHeight,setContentHeight]=useState<number>(0)
    useEffect(() => {
          const navHeight:number = getElementHeights('nav') as number;
          const footerHeight:number = getElementHeights('footer')as number
          const mainHeight = window.innerHeight
          setContentHeight(mainHeight - navHeight-footerHeight)
 
      }, []);
    useEffect(()=>{
            const windowSizeHandler = () => {
                const navHeight:number = getElementHeights('nav') as number;
                const footerHeight:number = getElementHeights('footer')as number
                const mainHeight = window.innerHeight
                setContentHeight(mainHeight - navHeight-footerHeight)
            };
            window.addEventListener("resize", windowSizeHandler);
      
            return () => {
              window.removeEventListener("resize", windowSizeHandler);
      
            };



      
      
    },[contentHeight])
  return (
    <>{contentHeight?<Box minHeight={contentHeight} id={pageText.toLowerCase()}> {children}</Box>:<Skeleton sx={{ bgcolor: 'grey.600' }} variant="rectangular" width={'100vw'} height={'100vh'} />}</>
  )
}
