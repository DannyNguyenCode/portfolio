'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {Typography,Grid2,List,ListItem,ListItemText} from '@mui/material/';

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

export default function EducationAccordian() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Web Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid2 container spacing={2}>
                <Grid2 size={{xs:12, md:6}}> 
                    <List >

                        <ListItem>
                          <ListItemText
                            primary="Web Programming Principles"

                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Web Programming Tools and Frameworks"

                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Web Programming for Apps and Services"

                          />
                        </ListItem>

                    </List>
       
                </Grid2>
            </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Project Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid2 container spacing={2}>
                <Grid2 size={{xs:12, md:6}}> 
                    <List >
                        <ListItem>
                          <ListItemText
                            primary="Requirements Gathering using Object Oriented Models"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Analysis and Design using Object Oriented Models"

                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Project Planning and Management"

                          />
                        </ListItem>
                    </List>
                </Grid2>
            </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Database Systems</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid2 container spacing={2}>
                <Grid2 size={{xs:12, md:6}}> 
                    <List >
                        <ListItem>
                          <ListItemText
                            primary='Database Services'
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary='Data Structures and Algorithms'

                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary='Stored Procedures Using Oracles PL/SQL'

                          />
                        </ListItem>
                    </List>
                </Grid2>
            </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Object Oriented Programming</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid2 container spacing={2}>
                <Grid2 size={{xs:12, md:6}}> 
                    <List >
                        <ListItem>
                          <ListItemText
                            primary='Object-Oriented Software Development Using C++'
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary='Open Source Development'

                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary='Open Source Development Project'

                          />
                        </ListItem>
                    </List>
                </Grid2>
            </Grid2>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}