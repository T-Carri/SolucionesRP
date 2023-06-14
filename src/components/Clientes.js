import React from 'react'
import {  Grid } from '@mui/material'
import Carousel from './Carousel'
export const Clientes = () => {
  return (
    <Grid  container  direction="row"
    justifyContent="center"
    alignItems="center"  xl={8} lg={8} md={12} sm={12} xs={12} style={{backgroundColor:'#B7B7B7',  height:200 }} disableGutters>
 <Carousel/> 

    </Grid>
  )
}
