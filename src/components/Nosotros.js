import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import Image from 'next/image'
import { Typography} from '@mui/material';
export const Nosotros = () => {

    const clouds = 'https://www.solucionesrp.com.mx/shiny.svg'
    const blob = 'https://www.solucionesrp.com.mx/blob1.svg'
     const bussines ='https://www.solucionesrp.com.mx/businesstwo.png' 
    
  return (
    <Grid container direction="column"  justifyContent="center" alignItems="center" 
    height={700} xl={12} lg={12} md={12} sm={12} xs={12} style={{ backgroundImage:`url(${clouds})`,  backgroundSize: 'cover', marginTop:50 }}>

<Grid item m={3} mt={7} p={5} xl={5} lg={5} md={12} sm={12} xs={12}   >
<Typography color="white" align="center" variant="h4" sx={{ mb: 10, mt: { xs: 2, sm: 3 }  }}>
Tenemos más de 18 años ayudando a empresarios a mantener y salvaguardar los interes de sus empresas y/o negocios.
        </Typography>
      {/*   <Typography color="white" align="center" variant="h5" sx={{ mb: 0, mt: { xs: 2, sm: 3 }  }}>
        Somos un proyecto mexicano que brinda soluciones tecnológicas a las pequeñas y medianas empresas, especializados en la automatización de procesos administrativos con las mejores alternativas para el cliente.
Nuestras soluciones tecnológicas se apegan a estándares de calidad y facilitan el cumplimiento de las reformas fiscales actuales.
        </Typography> */}
</Grid>
<Grid item xl={7} lg={7} md={12} sm={12} xs={12} p={3}>

<Image
          src={bussines}
          alt="Imagen de negocio"
          width={500}
          height={560}
          layout="responsive" 
        /> 
      
</Grid>

    </Grid>
  )
}
