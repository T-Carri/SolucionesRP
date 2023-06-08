import React from 'react'
import { Container, Grid } from '@mui/material'
import Carousel from './Carousel'
export const Servicios = () => {
  return (
    <Grid  container  direction="row"
    justifyContent="center"
    alignItems="center"  xl={12} lg={12} md={12} sm={12} xs={12} style={{backgroundColor:'#19376D', marginTop:50, height:700 }} disableGutters>

<Grid item style={{backgroundColor:'black',  height:'70%', width:'100%' }} >
<Carousel/>
</Grid>
    </Grid>
  )
}
