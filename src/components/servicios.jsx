import * as React from 'react';

import Box from '@mui/material/Box';
//import Button from '@mui/material-next/Button';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';

import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';

import Container from '@mui/material/Container';
import Image from 'next/image';
import soluciones from '../assets/Soluciones.jpg'
import selloSiigo from '../assets/selloSiigo.png'

import image1 from '../assets/1.jpg'
import image5 from '../assets/5.jpg'
const tiers = [
    {
      title: 'Soluciones administrables',
      price: '0',
      description: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support',
      ],
      buttonText: 'Boton',
      buttonVariant: 'outlined',
    },   {
        title: 'Soluciones Aspel',
        price: '0',
        description: [
          '10 users included',
          '2 GB of storage',
          'Help center access',
          'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
      }, 
    {
      title: 'Capacitaciones',
      price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },     {
        title: 'Soluciones de desarrollo',
        price: '0',
        description: [
          '10 users included',
          '2 GB of storage',
          'Help center access',
          'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
      },    {
        title: 'Ecomerce',
        price: '0',
        description: [
          '10 users included',
          '2 GB of storage',
          'Help center access',
          'Email support',
        ],
        buttonText: 'Quieres vender por internet?',
        buttonVariant: 'contained',
      }, 
      {
        title: 'Licencias',
        price: '30',
        description: [
          '50 users included',
          '30 GB of storage',
          'Help center access',
          'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
      }
  ];
  
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];



export const S1 = ()=> {
  const imaServices = [
    <Image style={{width:'100%', height:'100%'}} src={soluciones} />, // Usamos % en lugar de em o vh
    <Image style={{width:'100%', height:'100%'}} src={selloSiigo} /> // Usamos % en lugar de em o vh
  ];

  
  return (
    <>
       <Grid container   xl={12} lg={12} md={12} sm={12} xs={12}    direction="row"  justifyContent="center" alignItems="center"   sx={{ pt: 8, pb: 13 }}>
         
         <Grid item xl={6} lg={6} md={12} sm={12} xs={12} sx={{pt:0}} style={{ width: '30em', height: '30em'}}>
<Grid container xl={12} lg={12} md={12} sm={12} xs={12} alignItems="center"  justifyContent="center"   > 
<div style={{width:'100%', height:'15vh', position: 'relative'}}>
  <Carousel indicators={false}>
    {imaServices.map((image, index) => (
      <div key={index} style={{position: 'relative'}}>
        {image}
      </div>
    ))}
  </Carousel>
</div>

  </Grid>

         </Grid>
         
         <Grid item xl={6} lg={6} md={6} sm={6} xs={6} sx={{p:5, pt:5}} >

         <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Expertos en soluciones de negocios
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
            Somos un proyecto mexicano que brinda soluciones tecnológicas a las pequeñas y medianas empresas, especializados en la automatización de procesos administrativos con las mejores alternativas para el cliente.

Nuestras soluciones tecnológicas se apegan a estándares de calidad y facilitan el cumplimiento de las reformas fiscales actuales.
            </Typography>

            <Button
            style={{background:'#2979ff'}}
  
  disabled={false}
  size="large"
  variant="filled">
      <Typography variant="h5" align="center" color="text.secondary" component="p" style={{color:'black'}} >Necesitas ayuda?</Typography></Button>

         </Grid>

           
          </Grid>
    </>
  )
}

  

export const Servicio = () => {
    return (
        <>
          
         
     
          {/* Hero unit */}
          <S1/>
          {/* End hero unit */}
          <Container maxWidth="xl" component="main">
            <Grid container spacing={5} alignItems="flex-end">
              {tiers.map((tier) => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === 'Enterprise' ? 12 : 6}
                  md={4}
                >
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: 'center',
                      }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'baseline',
                          mb: 2,
                        }}
                      >
                        <Typography component="h2" variant="h3" color="text.primary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /mo
                        </Typography>
                      </Box>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant}>
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* Footer */}
          <Container
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              mt: 8,
              py: [3, 6],
            }}
          >
            <Grid container spacing={2}  xl={12} lg={12} md={12} sm={12} xs={12} direction='row' justifyContent="space-evenly">
            <Grid item xl={6} lg={6} md={6} xs={6}  sm={3} >
                         <Image src={selloSiigo}  style={{width: '20em', height: '15em'}}/>
                </Grid>

             <Grid item xl={6} lg={6} md={6} xs={6} sm={3} >
                         <Image src={selloSiigo}  style={{width: '20em', height: '15em'}}/>
                </Grid>
            </Grid>
            
          </Container>
          {/* End footer */}
        </>
      );
}


 
  export default function Servicios() {
    return <Servicio/>;
  }