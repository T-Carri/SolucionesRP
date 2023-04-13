import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';



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
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
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
  

export const Servicio = () => {
    return (
        <React.Fragment>
          
          <CssBaseline />
     
          {/* Hero unit */}
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
         <Grid></Grid>
         <Grid>

         <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Servicios
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
            Somos un proyecto mexicano que brinda soluciones tecnológicas a las pequeñas y medianas empresas, especializados en la automatización de procesos administrativos con las mejores alternativas para el cliente.

Nuestras soluciones tecnológicas se apegan a estándares de calidad y facilitan el cumplimiento de las reformas fiscales actuales.
            </Typography>
         </Grid>

           
          </Container>
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
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item) => (
                      <li key={item}>
                        <Link href="#" variant="subtitle1" color="text.secondary">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
            
          </Container>
          {/* End footer */}
        </React.Fragment>
      );
}


 
  export default function Servicios() {
    return <Servicio/>;
  }