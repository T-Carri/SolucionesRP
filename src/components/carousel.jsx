import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import image1 from '../assets/1.jpg'
import image5 from '../assets/5.jpg'
import image3 from '../assets/3.jpg'
import { Box } from '@mui/material';
export const Carrousel = () => {
    const anArrayOfNumbers = [
        <Image style={{width: '100%', height: '100vh',  opacity: 1}} src={image1}/>, 
        <Image style={{width: '100%', height: '100vh', objectFit: 'cover', opacity: 0.8}} src={image5}/> 

                         ];
  return (
   <Box >
    Aquí está el código ajustado para que el componente de Carousel tenga una imagen responsiva con opacidad:

jsx
Copy code
<div id='carousel' style={{width:'100%', height:'100vh'}}>
  <Carousel 
indicators={false}>
    {anArrayOfNumbers.map((image, index) => (
      <div key={index} style={{position: 'relative'}}>
{image}
      </div>
    ))}
  </Carousel>
</div></Box>
    
 )
}



