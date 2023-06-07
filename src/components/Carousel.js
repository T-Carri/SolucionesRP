/* import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; */
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import 'swiper/swiper-bundle.css';
//import 'swiper/components/effect-coverflow/effect-coverflow.scss';

import { Card, Grid, CardContent } from '@mui/material';
import React, { useEffect } from 'react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const MyComponent = () => {
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
    <div className="swiper mySwiper" style={{width:'100%', top:'-20%'}}>
      <div className="swiper-wrapper">
        <div className="swiper-slide"  style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
<CardContent> 

</CardContent>

      </Card>
        </div>
        <div className="swiper-slide"  style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
<CardContent> 
<img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
</CardContent>

      </Card>
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
<CardContent> 
<img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
</CardContent>

      </Card>
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}  >
<CardContent> 
<img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
</CardContent>

      </Card>
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
<CardContent> 
<img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
</CardContent>

      </Card>
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
<CardContent> 
<img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
</CardContent>

      </Card>
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
<CardContent> 
<img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
</CardContent>

      </Card>
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}  >
<CardContent> 
<img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
</CardContent>

      </Card>
        </div>
        <div className="swiper-slide" style={{width:'30%'}}>
        <Card elevation={0} sx={{height:380, width:450, backgroundColor: 'red'}} style={{display:'fixed'}}   >
<CardContent> 
<img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
</CardContent>

      </Card>
        </div>
      </div>
     
    </div>
  );
};

export default MyComponent;