'use client'
import React from 'react'
import { Box,Toolbar,IconButton,AppBar,Container,MenuItem,Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const settings = ['Skills', 'Education', 'Experiences','Contact'];
const Nav = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
 
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleLinkClick = () => {
        setAnchorElNav(null);
    };
    const collapseNavigation = ()=>{
        // collapse navigation links into menu icon
        return(
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  <MenuItem onClick={handleLinkClick} component={'a'} sx={{ textAlign: 'center' }} href={`#top`}>
                     Home
                  </MenuItem>
                  {settings.map((setting) => (
                        <MenuItem onClick={handleLinkClick} component={'a'} sx={{ textAlign: 'center' }} key={setting} href={`#${setting.toLowerCase()}`}>
                            {setting}
                        </MenuItem>
                  ))}
                </Menu>
          </Box>
        )
    }
    const navigationMenu=()=>{
        return (
        <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
                <MenuItem onClick={handleLinkClick} component={'a'} sx={{ textAlign: 'center' }} href={`#top`}>
                   Home
                </MenuItem>
              {settings.map((setting) => (
                <MenuItem component={'a'} sx={{ textAlign: 'center' }} key={setting} href={`#${setting.toLowerCase()}`}>
                    {setting}
                </MenuItem>
              ))}
        </Box>
        )
    }

  return (
    <AppBar id='nav' className='app_bar_' position="sticky">
      <Container maxWidth="xl">
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}} disableGutters>

            {navigationMenu()}

            {collapseNavigation()}
            <MenuItem component={'a'} sx={{ textAlign: 'center' }} href='/login'>
                Admin Login
            </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav