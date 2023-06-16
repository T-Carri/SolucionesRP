import React, { useRef, useState, lazy, Suspense } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/system/Unstable_Grid/Grid';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { PublicidadAspelNube } from './PublicidadAspelNube';
import { PublicidadSoporte } from './PublicidadSoporte';

const Adm = lazy(() => import('./Adm'));
const Banco = lazy(() => import('./banco'));
const Caja = lazy(() => import('./caja'));
const Coi = lazy(() => import('./coi'));
const Facture = lazy(() => import('./facture'));
const Noi = lazy(() => import('./noi'));
const Prod = lazy(() => import('./prod'));
const Sae = lazy(() => import('./sae'));
export default function PublicidadCarousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   mt={2} >
      <Suspense fallback={<div>...Cargando</div>}>

     
      <Swiper
        spaceBetween={30}
        centeredSlides={true}    
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><PublicidadAspelNube/></SwiperSlide>
        <SwiperSlide><Adm/></SwiperSlide>
        <SwiperSlide><Banco/></SwiperSlide>
        <SwiperSlide><Caja/></SwiperSlide>
        <SwiperSlide><Coi/></SwiperSlide> 
        <SwiperSlide><Facture/></SwiperSlide>
        <SwiperSlide><Noi/></SwiperSlide>
        <SwiperSlide><Prod/></SwiperSlide>
        <SwiperSlide><Sae/></SwiperSlide>
        <SwiperSlide><PublicidadAspelNube/></SwiperSlide>
      
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </Suspense>
    </Grid>
  );
}
