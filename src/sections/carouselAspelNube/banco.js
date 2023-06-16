import React, {useState, useEffect} from 'react'
import { Box, Grid } from '@mui/material'

 const url1 = 'https://www.solucionesrp.com.mx/banco-post-distmanual.jpg'

 const banco = () => {

    const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = url1;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <Box>
    <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'}>
    {imageLoaded ? (
          <>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 0%',
                backgroundImage: `url(${url1})`,
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

export default banco