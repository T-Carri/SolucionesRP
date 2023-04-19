import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../assets/logo.png'
import Image from 'next/image';


const pages = ['Inicio', 'Servicios', 'Nosotros',  'Contacto', 'Cotiza ahora mismo'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const darkTheme = createTheme({
    palette: {
      
      primary: {
        main: '#F6F1F1',
      },
    },
  });

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="fixed" st="true" style={{zIndex: 9999}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' },  mr: 4, p:2}}>
  <Image alt='logo' src={logo} style={{width:'15vh', height:'8vh'}}   />   

            </Box>
        
<Box sx={{ flexGrow: 4,  display: { xs: 'flex', md: 'none' }, mr: 18, zIndex: 9999}}>
  <Image src={logo}  alt='logo'  style={{width:'20vh', height:'10vh'}}   />   

            </Box>

 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', zIndex: 9999 } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', zIndex: 9999 }}
              >
                {page}
              </Button>
            ))}
          </Box>


          <Box  sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
              sx={{ zIndex: 9999,
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ zIndex: 9999}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;



{/* <Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  </IconButton>
</Tooltip>
<Menu
  sx={{ mt: '45px' }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
  {settings.map((setting) => (
    <MenuItem key={setting} onClick={handleCloseUserMenu}>
      <Typography textAlign="center">{setting}</Typography>
    </MenuItem>
  ))}
</Menu>
</Box> */}


{/*       <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Soluciones RP
          </Typography>  */}


           {/*  <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> 

         
       <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}  
{/*  <Image src={logo}  style={{width:'15vh', height:'10vh'}}   sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />   */}