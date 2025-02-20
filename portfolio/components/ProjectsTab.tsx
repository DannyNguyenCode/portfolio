'use client'
import * as React from 'react';
import {Tabs,Tab,Typography,Box,styled} from '@mui/material/';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface Projects{
    title:string,
    desc:string,
    features:Features[],
    link:string,
    hostLink:string
}
interface Features{
    primary:string,
    secondary:string
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ProjectsTab(
    {
        projects
    }:{
        projects:Projects[]
    }
) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
interface StyledTabProps {
    label: string;
  }
  
  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    maxWidth:130,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: 'black',
        backgroundColor:'white',
        marginRight:0
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'white',
    
    },
  }));

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: 'inherit' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        TabIndicatorProps={{style:{ backgroundColor:'white'} }}
        sx={{ borderRight: 1, borderColor: 'divider', backgroundColor:'primary.main' }}
      >
        {projects.map((project,i)=>{
            return <StyledTab label={project.title}{...a11yProps(i)}/>
        })}
      </Tabs>
      {projects.map((project,i)=>{
        return <TabPanel value={value} index={i}>{project.desc}</TabPanel>
      })}
    </Box>
  );
}
