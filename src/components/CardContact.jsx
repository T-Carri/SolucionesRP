import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Container, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import i2 from '../assets/2.png'
import i3 from '../assets/3.png'
import i5 from '../assets/5.png'
import i1 from '../assets/1.png'
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
const themeContact = createTheme({
  typography: {
    fontFamily: [
    '"Poppins"', 'sans-serif'
    ].join(','),
  },
});






export const CardContact = () => {

  const imaServices = [
    <Image key={'i12'}  alt='i1' style={{width:'100%', height:'70%'}} src={i3} />,
    <Image key={'i22'} alt='i2' style={{width:'100%', height:'70%'}} src={i2} />,
    <Image key={'i32'} alt='i3' style={{width:'100%', height:'70%'}} src={i5} />,
    <Image key={'i42'} alt='i4' style={{width:'100%', height:'70%'}} src={i1} /> 
  ];
  return (
    <>

  <Container>

<Grid  container alignItems="center" xl={7} lg={7} md={12} sm={12} xs={12}   justifyContent="center" sx={
  (theme) => ({
    height:600, width:750, p:0,
    [theme.breakpoints.up("xl")]: {
      position: 'absolute',
      top:1, 
       left:40, 
      zIndex: 8888,
      height:800,
    },
    [theme.breakpoints.up("lg")]: {
      position: 'absolute',
      top:1, 
       left:40, 
      zIndex: 8888,
      height:500
    },
    [theme.breakpoints.up("md")]: {
      position: 'absolute',
      top:100, 
      /* left:100, */
      zIndex: 8888
    },
    [theme.breakpoints.down("md")]: {
      position: 'absolute',
      top: 0, 
      height:900,
       width:1000,
      zIndex: 8888
    },
    [theme.breakpoints.up("sm")]: {
      position: 'absolute',
     /*  top:100,  */
      /* left:35, */
      zIndex: 5555,
      height:900,
      width:1000,
    }, 
    [theme.breakpoints.down("sm")]: {
      position: 'absolute',
     /*  top:150, */ 
      /* left:30, */
      zIndex: 5555,
      height:900,
      width:1000,
    }, 
    [theme.breakpoints.up("xs")]: {
      position: 'absolute',
      /* top:100,  */
      /* left:0, */
      zIndex: 7777,
      height:900,
      width:1000,
     
      
    },
    [theme.breakpoints.down("xs")]: {
      position: 'absolute',
      top:100, 
     /*  left:0, */
      zIndex: 7777,
   
    }, 
  })
  }  > 
 <div style={{width:'100%', height:'70%', zIndex: 9999}}> 
    <Carousel indicators={false}>
      {imaServices.map((image, index) => (
        <div key={index} style={{position: 'relative'}}>
          {image}
        </div>
      ))}
    </Carousel>
  </div>
  
    </Grid>
    </Container>

{/*     <CardContent>
    <ThemeProvider theme={themeContact}>
     <Typography id='1' component="h3" variant="h4" >
     <strong> Solicita hoy más información</strong>     
                        </Typography>   </ThemeProvider>
    </CardContent>
    <CardActions>
      <Grid container direction='column' justifyContent='center' alignItems='center' >
<Grid item>  <div class="input-group">
<Typography component="h5" variant="h6" >

Nombre y apellido
                        </Typography> 
    
    <input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
    </div> </Grid>
<Grid item>

<div class="input-group">

<Typography component="h5" variant="h6" >
Email address
                        </Typography> 

<input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
</div>
</Grid>

<Grid item>

<div class="input-group">

<Typography component="h5" variant="h6" >
  Telefono

</Typography> 

<input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
</div>
</Grid>

<Grid item sx={{p:3}}>


<button id='hoverbutton'><span class="text">Enviar</span><span>Gracias!</span></button>
</Grid>

      </Grid>

   




    </CardActions> */}
     
       
        </>
  )
}
