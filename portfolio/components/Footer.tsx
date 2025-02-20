'use client'
import React from 'react'
import { AppBar,Toolbar, Box,Container, Grid2, IconButton, useTheme,useMediaQuery,Stack, Typography, Link} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <AppBar id='footer' className='app_bar_' position="sticky" sx={{ top: 'auto', bottom: 0 }}>
      <Container sx={{marginBottom:'0.35em'}} maxWidth={matches ? 'lg' : 'xl'}>
        <Toolbar>
          
          <Box sx={{ flexGrow: 1 }}>
            <Grid2 sx={{marginTop:'0.35em'}}   container spacing={2}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Stack textAlign={matches?'center':'left'} direction={'column'} spacing={2}>
                    <Typography sx={{padding:'8px'}}>Gia Bao Nguyen</Typography>
                    <Typography sx={{padding:'8px'}}>Email: gbnguyenw@gmail.com</Typography>
                    <Typography sx={{padding:'8px'}}>Phone: (647) 760-3458</Typography>
                </Stack>
              </Grid2>
              <Grid2  size={{ xs: 12, md: 6 }}>
                <Stack justifyContent={'center'} alignItems={'center'} spacing={2} direction={{xs:'row', md:'column'}}>
                  <Typography sx={{padding:{xs:'8px',md:'0'}, display:"flex", alignItems: "center" }}>
                    <Box sx={{display: {xs:'none',md:"flex"},minWidth:75}} component={'span'}><Link color='common.white' underline='none'href='https://github.com/DannyNguyenCode' target='_blank' rel='noopener noreferrer'>Github</Link></Box>
                    <IconButton href='https://github.com/DannyNguyenCode' target='_blank' rel='noopener noreferrer' edge="end">
                      <GitHubIcon/>
                    </IconButton>
                  </Typography>
                  <Typography sx={{padding:{xs:'8px',md:'0'}, display: "flex", alignItems: "center" }}>
                  <Box sx={{display: {xs:'none',md:"flex"},minWidth:75}} component={'span'}><Link color='common.white' underline='none'href='https://www.linkedin.com/in/gia-bao-danny-nguyen/' target='_blank' rel='noopener noreferrer'>LinkedIn</Link></Box> 
                    <IconButton href='https://www.linkedin.com/in/gia-bao-danny-nguyen/' target='_blank' rel='noopener noreferrer' edge="end">
                      <LinkedInIcon/>
                    </IconButton>
                  </Typography>
                  {/* <Typography sx={{padding:{xs:'8px',md:'0'}, display: "flex", alignItems: "center" }}>
                    <Box sx={{display: {xs:'none',md:"flex"},minWidth:75}} component={'span'}><Link color='common.white' underline='none'href=''>Github</Link></Box>
                    <IconButton href='https://github.com/DannyNguyenCode' target='_blank' rel='noopener noreferrer' edge="end">
                    <GitHubIcon/>
                    </IconButton>
                  </Typography> */}
                </Stack>
    
              </Grid2>
            </Grid2>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer