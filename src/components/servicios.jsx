
import {forwardRef, useState} from 'react'
import Box from '@mui/material/Box';
//import Button from '@mui/material-next/Button';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import InsightsIcon from '@mui/icons-material/Insights';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LoopIcon from '@mui/icons-material/Loop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Container from '@mui/material/Container';
import Image from 'next/image';
import selloSiigo from '../assets/selloSiigo.png'
import Collapse from '@mui/material/Collapse';
import i6 from '../assets/6.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const tiers = [ {
  title: 'Capacitaciones',
  icon: <Diversity2Icon  fontSize="large" />,
  description: [
    '¿Desea aprender alguna técnica o habilidad nueva? Nosotros le ayudaremos en la enseñanza de múltiples herramientas de acuerdo a sus requerimientos.'
    
  ],
  buttonText: 'Contact us',
  buttonVariant: 'outlined',
},  
    {
      title: 'Soluciones administrables',
      icon: <InsightsIcon fontSize="large"/>,
      description: [
        'Cuenta con nosotros para el diseño de la mejor estrategia que te permita la correcta administración de tus procesos o recursos.'
       
      ],
      buttonText: 'Ver mas',
      buttonVariant: 'outlined',
    },   {
        title: 'Soluciones Aspel',
        icon: <LoopIcon fontSize="large"/>,
        description: [
          'Contamos con el conocimiento y la experiencia necesaria para poder guiarle en las mejores prácticas relacionadas con el software ASPEL y de esta manera pueda aprovecharlo al máximo.'
       
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
      }, 
        {
        title: 'Soporte tecnico',
        icon: <MiscellaneousServicesIcon fontSize="large" />,
        description: [
          'Solicite soporte tecnico inmediato:',
          <ul>
            <li>Mantenimiento correctivo</li>
            <li>Mantenimiento preventivo</li>
            <li>Implementacion de correos empresariales</li>
            <li>Respaldo de correos</li>
            </ul>
  
         
        ],
        buttonText: 'Contacto',
        buttonVariant: 'outlined',
      }, 
      {
        title: 'Licencias',
        icon: <ShoppingCartIcon fontSize="large"/>,
        description: [
          <Image src={i6}  style={{width: '100%', height: '100%'}}/>
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
      },  {
        title: 'Soluciones de desarrollo',
        icon: <LogoDevIcon  fontSize="large"/>,
        description: [
          'Contamos con el equipo necesario para ayudarte a desarrollar ese Software que necesitas, incluso para trabajar en conjunto y generar tu propio sitio web organizacional.'
          
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
      }, 
  ];
  
  

  const themeContact = createTheme({
    typography: {
      fontFamily: [
      '"Poppins"', 'sans-serif'   
      ].join(','),
    },
  });





  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  

export const Servicio = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <>
          
         
     
          {/* Hero unit */}
        
          {/* End hero unit */}
          <Container maxWidth="xl" component="main" sx={
            {pt: 25}
          }>
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
                       {tier.icon}
                    
                      
                      </Box>
                      
                        {tier.description.map((line) => (
                        <Typography
                            component="text"
                            variant="h5"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                         
                        ))}
                     
                    </CardContent>
                    <CardActions align="center" >
                      <Button id='servicios'      align="center" fullWidth onClick={handleClickOpen} variant={tier.buttonVariant}>
                      <ThemeProvider theme={themeContact}> {tier.buttonText}</ThemeProvider>    
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


          <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
        </>
      );
}


 
  export default function Servicios() {
    return <Servicio/>;
  }