import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import image1 from '../assets/1.jpg'
import image5 from '../assets/5.jpg'
import image3 from '../assets/3.jpg'
import { Box, Container } from '@mui/material';
export const Carrousel = () => {
    const anArrayOfNumbers = [
        <Image key={'1'} alt='1' style={{width: '100%', height: '100vh',  opacity: 1}} src={image1}/>, 
        <Image  key={'2'} alt='2' style={{width: '100%', height: '100vh', objectFit: 'cover'}} src={image5}/> 

                         ];
  return (
    
  <Box xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: { xs: 'none', md: 'none', sm:'none', lg:'block' } }}   >
  
  <div id='carousel' style={{width:'100%'}}>
    <Carousel 
  indicators={false}>
      {anArrayOfNumbers.map((image, index) => (
        <div key={index} style={{position: 'relative', height:'100vh'}}>
  {image}
        </div>
      ))}
    </Carousel>
  </div></Box>
    
 
    
 )
}



