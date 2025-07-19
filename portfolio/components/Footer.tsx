'use client'
import React from 'react'
import { AppBar, Toolbar, Box, Container, Grid2, IconButton, useTheme, useMediaQuery, Stack, Typography, Link } from '@mui/material'
import HomeDialog from './HomeDialog';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <AppBar id='footer' className='app_bar_' position="sticky" sx={{ top: 'auto', bottom: 0 }}>
      <Container sx={{ marginBottom: '0.35em' }} maxWidth={matches ? 'lg' : 'xl'}>
        <Toolbar>

          <Box sx={{ flexGrow: 1 }}>
            <Grid2 sx={{ marginTop: '0.35em' }} container spacing={2}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Stack textAlign={matches ? 'center' : 'left'} direction={'column'} spacing={2}>
                  <Typography sx={{ padding: '8px' }}>Gia Bao Nguyen</Typography>
                  <Typography sx={{ padding: '8px' }}>Email: gbnguyenw@gmail.com</Typography>
                  <Typography sx={{ padding: '8px' }}>Phone: (647) 760-3458</Typography>
                </Stack>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Stack justifyContent={'center'} alignItems={'center'} spacing={2} direction={{ xs: 'row', md: 'column' }}>
                  <Typography sx={{ padding: { xs: '8px', md: '0' }, display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: { xs: 'none', md: "flex" }, minWidth: 100 }} component={'span'}><Link aria-label='Github link opens on new tab' color='common.white' underline='none' href='https://github.com/DannyNguyenCode' target='_blank' rel='noopener noreferrer'>Github</Link></Box>
                    <IconButton href='https://github.com/DannyNguyenCode' target='_blank' rel='noopener noreferrer' edge="end">
                      <GitHubIcon />
                    </IconButton>
                  </Typography>
                  <Typography sx={{ padding: { xs: '8px', md: '0' }, display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: { xs: 'none', md: "flex" }, minWidth: 100 }} component={'span'}><Link aria-label='LinkedIn profile opens on new tab' color='common.white' underline='none' href='https://www.linkedin.com/in/gia-bao-danny-nguyen/' target='_blank' rel='noopener noreferrer'>LinkedIn</Link></Box>
                    <IconButton href='https://www.linkedin.com/in/gia-bao-danny-nguyen/' target='_blank' rel='noopener noreferrer' edge="end">
                      <LinkedInIcon />
                    </IconButton>
                  </Typography>
                  <Typography sx={{ padding: { xs: '8px', md: '0' }, display: "flex", alignItems: "center" }}>
                    <Box sx={{ minWidth: 100 }} component={'span'}>
                      <HomeDialog isButton={false} title='View Resume' link='https://res.cloudinary.com/dblayhcrg/image/upload/v1749743542/Resume_iu4keg.pdf' downloadLink={`https://res.cloudinary.com/dblayhcrg/image/upload/fl_attachment:Gia_Bao_Nguyen_Resume/v1749743542/Resume_iu4keg.pdf`} />
                    </Box>
                    <IconButton sx={{ display: matches ? 'inline-flex' : 'none' }} href='https://res.cloudinary.com/dblayhcrg/image/upload/v1749743542/Resume_iu4keg.pdf' target='_blank' rel='noopener noreferrer' edge="end">
                      <ArticleIcon />
                    </IconButton>
                  </Typography>
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