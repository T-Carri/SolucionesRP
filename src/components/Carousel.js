/* import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; */

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";


const c0 = 'https://www.solucionesrp.com.mx/cliente0.JPG'
const c1 = 'https://www.solucionesrp.com.mx/cliente1.JPG'
const c2 = 'https://www.solucionesrp.com.mx/cliente2.JPG'
const c3 = 'https://www.solucionesrp.com.mx/cliente3.JPG'
const c4 = 'https://www.solucionesrp.com.mx/cliente4.JPG'
const c5 = 'https://www.solucionesrp.com.mx/cliente5.JPG'
const c6 = 'https://www.solucionesrp.com.mx/cliente6.JPG'
const c7 = 'https://www.solucionesrp.com.mx/cliente7.JPG'
const c8 = 'https://www.solucionesrp.com.mx/cliente8.JPG'
const c9 = 'https://www.solucionesrp.com.mx/cliente9.JPG'
const c10 = 'https://www.solucionesrp.com.mx/cliente10.JPG'
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
      
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={c0} width={10} height={10}/>
        </SwiperSlide>
        <SwiperSlide><Image src={c0} width={200} height={120}/></SwiperSlide>
        <SwiperSlide><Image src={c1} width={200} height={120}/></SwiperSlide>
        <SwiperSlide><Image src={c2} width={200} height={120}/></SwiperSlide>
        <SwiperSlide><Image src={c3} width={200} height={120}/></SwiperSlide>
        <SwiperSlide><Image src={c4} width={200} height={120}/></SwiperSlide>
        <SwiperSlide><Image src={c5} width={200} height={120}/></SwiperSlide>
        <SwiperSlide><Image src={c6} width={200} height={120}/></SwiperSlide>
        <SwiperSlide><Image src={c7} width={200} height={120}/></SwiperSlide>
      </Swiper>
    </>
  );
}


//Este whisper carousel es interesante 

/* const MyComponent = () => {
  useEffect(() => {
    SwiperCore.use([EffectCoverflow, Pagination]);

    const swiper = new SwiperCore('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      
      spaceBetween: 1,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }, []);

  return (
    <div className="swiper mySwiper" style={{width:'100%', margin:40}}>
      <div className="swiper-wrapper">
        <div className="swiper-slide"  style={{width:'30%'}}>
       
        </div>
        <div className="swiper-slide"  style={{width:'30%'}}>
      
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
      
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
       
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
       
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
      
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
       
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
       
        </div>
      </div>
     
    </div>
  );
};

export default MyComponent; */ 
