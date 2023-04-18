
import Grid from '@mui/material/Grid';


import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';

import Image from 'next/image';
import soluciones from '../assets/Soluciones.jpg'
import i2 from '../assets/2.png'
import i3 from '../assets/3.png'
import i5 from '../assets/5.png'
import i1 from '../assets/1.png'
import selloSiigo from '../assets/selloSiigo.png'
import Rating from '@mui/material/Rating';



export const S1 = ()=> {
    const imaServices = [
      <Image style={{width:'100%', height:'70%'}} src={i3} />,
      <Image style={{width:'100%', height:'70%'}} src={i2} />,
      <Image style={{width:'100%', height:'70%'}} src={i5} />,
      <Image style={{width:'100%', height:'70%'}} src={i1} />,
      // Usamos % en lugar de em o vh
      <Image style={{width:'100%', height:'70%'}} src={selloSiigo} /> // Usamos % en lugar de em o vh
    ];
  
    
    return (
      <>
         <Grid container   xl={12} lg={12} md={12} sm={12} xs={12}   direction="row"  justifyContent="center" alignItems="center"   sx={{  width: 2000,
        height: 500 }}>
           
           <Grid item xl={6} lg={6} md={6} sm={6} xs={6}  sx={{pt:15, }}  >
  <Grid container direction={'column'} justifyContent={"center"} alignItems={'center'}>
  <Grid item> <Rating name="read-only" value='5' readOnly size="large" /></Grid>
       <Grid item>
       <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Expertos en soluciones de negocios
              </Typography>
       </Grid>
       
           
      
              
             
  <Grid item>            <button id='help'>
      ¿Necesitas ayuda?
  </button>
  </Grid>
              
              </Grid>
  
  
             
  
   
           </Grid>
           <Grid item xl={6} lg={6} md={12} sm={12} xs={12} /* sx={{pt:0}} */ style={{ width: '30em', height: '30em'}}>
  <Grid  container xl={12} lg={12} md={12} sm={12} xs={12} alignItems="center"  justifyContent="center"   > 
 <div style={{width:'100%', height:'70%', position: 'relative'}}> 
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
           
             
            </Grid>
      </>
    )
  }
  