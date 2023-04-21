import Image from 'next/image'
import React from 'react'
import i2 from '../../assets/2.png'
import i3 from '../../assets/3.png'
import i5 from '../../assets/5.png'
import i1 from '../../assets/1.png'
import Carousel from 'react-material-ui-carousel';

const Imagetest = () => {
    const imaServices = [
        <Image key={'i12'}  alt='i1' style={{width:'100%', height:'50vh'}} src={i3} />,
        <Image key={'i22'} alt='i2' style={{width:'100%', height:'50vh'}} src={i2} />,
        <Image key={'i32'} alt='i3' style={{width:'100%', height:'50vh'}} src={i5} />,
        <Image key={'i42'} alt='i4' style={{width:'100%', height:'50vh'}} src={i1} /> 
      ];


  return (
<div style={{width:'100%', height:'50vh', zIndex: 9999}}> 
    <Carousel indicators={false}>
      {imaServices.map((image, index) => (
        <div key={index} style={{position: 'relative'}}>
          {image}
        </div>
      ))}
    </Carousel>
  </div>
  )
}

export default Imagetest