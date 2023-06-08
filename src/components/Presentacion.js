import React, { useState, useRef, useEffect }  from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import 'animate.css';
import Image from 'next/image';
import SVG from '../assets/sapiens.svg'
import { Typography, Button } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const nubes= '../assets/clouds.svg'
const backgroundImage = 'https://mui.com/static/themes/onepirate/productCurvyLines.png'

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
    <Grid container xl={12} lg={12} md={12} sm={12} xs={12}  sx={{  backgroundImage: `url(${nubes})` }}  >
         <Grid item height={600} sx={{ backgroundColor: '#FFFFFF' }} xl={5} lg={5} md={5} sm={12} xs={12}>
        <div ref={ref} className={showImage ? 'svgi animate__animated animate__fadeInLeft animate__swing' : 'ok'}>
          {showImage && (
            <Image src={SVG} alt="imag" style={{ height: '100vh', width: '50em', position: 'relative', marginTop: 80 }} />
          )}
        </div>
      </Grid>

      <Grid item height={700} xl={7} lg={7} md={7} sm={12} xs={12} 
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


