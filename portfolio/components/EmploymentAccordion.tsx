import {  Paper,Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
type Skill={
    title:string,
    desc:string
}
const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
      border: `1px solid ${theme.palette.divider}`,
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&::before': {
        display: 'none',
      },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
    ))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const EmploymentAccordion = (
    {

        skills,
        jobTitle,
        company

    }
    :
    {
        jobTitle:string,
        company:string
        skills:Skill[]
    }
) => {
    const[expandAll,setExpandAll]=useState(false);
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleExpandAll = ()=>{
        setExpandAll(true)
    }
    const handleCollapseAll= ()=>{
        setExpandAll(false)
    }
    const handleChange =(panel: string) => {
        if(panel === expanded){
            setExpanded(false)
        }else if(expandAll){
            setExpandAll(false)
            setExpanded(panel);
        }
        else{
            setExpanded(panel);
        }

    };
  return (
    <Paper elevation={2}>
        <Box component={'div'} sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
            <Typography margin={'1em'} variant='h6'>{company} - {jobTitle}</Typography>
            <Box display={{xs:'none',md:'flex'}} textAlign={'center'} padding={'1em'} component={'div'}>
                {!expandAll?  
                    <Button size='small' variant="contained" onClick={handleExpandAll}><Typography  textTransform={'none'} fontSize={"0.85rem"}>Expand All</Typography></Button>: 
                    <Button size='small' variant="contained" onClick={handleCollapseAll}><Typography  textTransform={'none'}  fontSize={"0.85rem"}>Collapse All</Typography></Button>
                }
            </Box>
        </Box>
        <Box display={{xs:'flex',md:'none'}} textAlign={'center'} padding={'1em'} component={'div'}>
                {!expandAll?  
                    <Button size='small' variant="contained" onClick={handleExpandAll}><Typography  textTransform={'none'} fontSize={"0.85rem"}>Expand All</Typography></Button>: 
                    <Button size='small' variant="contained" onClick={handleCollapseAll}><Typography  textTransform={'none'}  fontSize={"0.85rem"}>Collapse All</Typography></Button>
                }
        </Box>
        <Box component='div'>
            {skills.map((skill,i)=>{
                return(
                    <Accordion key={i} expanded={expanded === `panel${i+1}` || expandAll} onChange={()=>handleChange(`panel${i+1}`)}>
                        <AccordionSummary aria-controls={`panel${i+1}d-content`} id={`panel${i+1}d-header`}>
                            <Typography>{skill.title}</Typography>
                        </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {skill.desc}
                                </Typography>
                            </AccordionDetails>
                    </Accordion>
                )
            })}
        </Box>
    </Paper>
  )
}

export default EmploymentAccordion