import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import image1 from '../assets/1.jpg'
import image5 from '../assets/5.jpg'
import image3 from '../assets/3.jpg'
export const Carrousel = () => {
    const anArrayOfNumbers = [
        <Image style={{width:'100%', height:'80vh'}} src={image1}/>, 
        <Image style={{width:'100%', height:'80vh'}} src={image5}/>, 
        <Image style={{width:'100%', height:'80vh'}} src={image3}/>
                         ];
  return (
    <div id='carousel' style={{width:'100%', height:'80vh'}} >
   <Carousel

>
   {anArrayOfNumbers.map((image)=>image)}
</Carousel>
  
    </div>
 )
}



