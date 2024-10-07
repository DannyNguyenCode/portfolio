// credit to Audrey
// https://stackoverflow.com/a/70612763/27080552
// https://react.dev/reference/react-dom/createPortal
import React,{useState} from 'react'
import { createPortal } from 'react-dom'
import {LinearProgress,Typography } from '@mui/material'

const ProgressBarWithLabel = ({value}:{value:string}) => {
    const [progressRef,setProgressRef]=useState<HTMLElement | undefined>();
    
    const ProgressBarLabel = ({el,extraLabel}:{el:Element,extraLabel:string}) => {
      return (
        <>
            {el &&createPortal(
                <Typography marginRight={'10px'} textAlign={'end'} fontSize={'0.85rem'} lineHeight={'1'} color='white' component={'p'} className='spanLabel'>{extraLabel}%</Typography>,
                el
            )}
        </>
      )
    }
  return (
    <>
        <LinearProgress sx={{height:15}} ref={(el:HTMLElement)=>{setProgressRef(el)}} variant="determinate" value={Number(value)}/>
        <ProgressBarLabel el={progressRef?.firstElementChild as Element} extraLabel={value.toString()}/>    
    </>
  )
}

export default ProgressBarWithLabel