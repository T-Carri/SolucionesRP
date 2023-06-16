import { Box, Grid } from '@mui/material'
import React, {useState, useEffect}  from 'react'
const url = 'https://www.solucionesrp.com.mx/sae-post-distmanual.jpg'
const sae = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        setImageLoaded(true);
      };
    }, []);
  
  return (
    <Box>
    <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'} height={750}>
    {imageLoaded ? (
          <>
            <Grid
              item 
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              height={750}
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 0%',
                backgroundImage: `url(${url})`,
              }}
            />
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              test
            </Grid>
          </>
        ) : null}
        </Grid>
    </Box>
  )
}

export default sae