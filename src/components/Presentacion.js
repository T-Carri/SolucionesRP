import React, { useState, useRef, useEffect }  from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import 'animate.css';
import Image from 'next/image';
import SVG from '../assets/sapiens.svg'
//import nubes from '../assets/clouds.svg'
import { Typography, Button, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const test = 'https://images.unsplash.com/photo-1605478185737-99ae313e940c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTU2fHx0ZXh0dXJhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
const backgroundImage = 'https://mui.com/static/themes/onepirate/productCurvyLines.png'
const clouds = 'https://www.solucionesrp.com.mx/clouds.svg'
export const Presentacion = () => {
    const [showImage, setShowImage] = useState(false);


/* 

// Use object destructuring, so you don't need to remember the exact order
const { ref, inView, entry } = useInView(options);

// Or array destructuring, making it easy to customize the field names
const [ref, inView, entry] = useInView(options);

 */






    const [ref, inView, entry] = useInView({
      triggerOnce: true, // Solo activar una vez
    });
  
    useEffect(() => {
      if (inView) {
        setShowImage(true);
      }
    }, [inView]);

    

  return (
    <Grid container xl={12} lg={12} md={12} sm={12} xs={12}  sx={{  backgroundImage:`url(${clouds})`,
    backgroundSize: 'cover' }} >
         <Grid item height={800} /* sx={{ backgroundColor: '#FFFFFF', backgroundImage: `url(${test})`,
          backgroundSize: 'cover' }} */ xl={5} lg={5} md={5} sm={12} xs={12}>
         
            <div ref={ref} className={showImage ? 'svgi animate__animated animate__fadeInLeft animate__swing' : 'ok'}>
          {showImage && (
            <Image src={SVG} alt="imag" style={{ height: '100vh', width: '50em', position: 'relative', marginTop: 80 }} />
          )}
        </div>
    
    
      </Grid>

      <Grid item height={800} xl={7} lg={7} md={7} sm={12} xs={12} 
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  bgcolor: '#ECF9FF', overflow: 'hidden', backgroundImage: `url(${backgroundImage})` }}>
       
        <Typography color="inherit" align="center" variant="h2" marked="center" >
          Toma el control de tu negocio
        </Typography>
        <Typography color="inherit" align="center" variant="h5" sx={{ mb: 0, mt: { xs: 2, sm: 3 } }}>
          Ofrecemos soluciones tecnológicas para tu empresa
        </Typography>
        <Button color="primary" variant="contained" size="large" component="a" href="/registro" sx={{ mt: 3 }}>
          Conocer mas
        </Button>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          Descubre cómo podemos ayudarte
        </Typography>
      </Grid>

        
    </Grid>
  )
}


