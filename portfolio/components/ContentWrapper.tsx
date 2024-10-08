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
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const [contentHeight,setContentHeight]=useState<number>(0)
    useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
    useEffect(()=>{
        timer.current = setTimeout(() => {
            const navHeight:number = getElementHeights('nav') as number;
            const footerHeight:number = getElementHeights('footer')as number
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
    <>{contentHeight?<Box minHeight={contentHeight} id={pageText.toLowerCase()}> {children}</Box>:<Skeleton sx={{ bgcolor: 'grey.600' }} variant="rectangular" width={'100vw'} height={'100vh'} />}</>
  )
}
