import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Typography, TextField  } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://mui.com/">
        SolucionesRP
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#EDEDED',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#EDEDED' }}
    >
      <Container sx={{ display: 'flex' }}>
        <Grid container  direction="column"  justifyContent="center" spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                <FacebookIcon />
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                <InstagramIcon/>
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                <LinkedInIcon/>
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Datos
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
              <Typography 
                            component="text"
                            variant="h5"
                            align="center"
                          
                          >
                          Tel: +52 55-5362-0004
                          </Typography>

              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
              <Typography 
                            component="text"
                            variant="h5"
                            align="center"
                          
                          >
                         Lunes a Viernes (9am-6pm)
                          </Typography> 
              </Box>
            </Box>
          </Grid>
  
          <Grid item>
            <Typography variant="caption">
              {'Icons made by '}
              <Link href="https://www.freepik.com" rel="sponsored" title="Freepik">
                Freepik
              </Link>
              {' from '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
          <Grid item xl={7} lg={7} md={6} xs={12}  sm={12} sx={{height:600, pt:10, p:5}}   >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3757.9554146372557!2d-99.3241631!3d19.6292038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2191e6a1a801f%3A0xf759d47ce52d8660!2sSoluciones%20RP!5e0!3m2!1ses-419!2smx!4v1606688515176!5m2!1ses-419!2smx" style={{ width:"100%", height:"100%" }} ></iframe>
                </Grid>

        </Grid>
      </Container>
    </Typography>
  );
}