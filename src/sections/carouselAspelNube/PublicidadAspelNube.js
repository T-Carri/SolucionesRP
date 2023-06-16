import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Typography, Button, Box } from '@mui/material';
export const PublicidadAspelNube = () => {
    const clouds = 'https://www.solucionesrp.com.mx/clouds.svg'
  return (
    <Grid  container  direction="column"  justifyContent="center" alignItems="center"  xl={12} lg={12} md={12} sm={12} xs={12} height={700} sx={{  backgroundImage:`url(${clouds})`,  backgroundSize: 'cover'}}>

<Grid item height={700} xl={7} lg={7} md={7} sm={12} xs={12} 
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',   overflow: 'hidden' }}>
       
        <Typography color="inherit" align="center" variant="h2" marked="center" >
          Ya conoces siigo aspel Nube?
        </Typography>
        <Typography color="inherit" align="center" variant="h5" sx={{ mb: 0, mt: { xs: 2, sm: 3 } }}>
          Ofrecemos asesoria para adquirir y usar siigo Nube 
        </Typography>
        <Button color="secondary" variant="contained" size="large" component="a" href="/registro" sx={{ mt: 3 }}>
          Necesito asesoria para adquirir siigo Nube
        </Button>
        <Typography variant="body2" color="" sx={{ mt: 2 }}>
          Descubre cómo podemos ayudarte
        </Typography>
      </Grid>
    </Grid>
  )
}
