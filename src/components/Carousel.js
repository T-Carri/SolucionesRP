/* import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; */

import 'swiper/css/effect-coverflow';


import 'swiper/swiper-bundle.css';
//import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




import { Card, Grid, CardContent } from '@mui/material';
import React, { useEffect } from 'react';
import SwiperCore, { EffectCoverflow} from 'swiper';
import 'swiper/swiper-bundle.min.css';

import { Swiper, SwiperSlide, autoplay } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { Pagination } from "swiper";




const MyComponent = () =>{

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
      >


        <SwiperSlide>
        <Card elevation={0} sx={{height:180, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://swiperjs.com/demos/images/nature-3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card elevation={0} sx={{height:180, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://swiperjs.com/demos/images/nature-3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      </Card>
     
   
   
        </SwiperSlide>
        <SwiperSlide>

        <Card elevation={0} sx={{height:180, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://swiperjs.com/demos/images/nature-3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      </Card>
        </SwiperSlide>
    
        <SwiperSlide>
        <Card elevation={0} sx={{height:180, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://swiperjs.com/demos/images/nature-3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card elevation={0} sx={{height:180, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://swiperjs.com/demos/images/nature-3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      </Card>
     
   
   
        </SwiperSlide>
        <SwiperSlide>

        <Card elevation={0} sx={{height:180, width:450, backgroundColor: 'white'}} style={{display:'fixed'}}   >
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://swiperjs.com/demos/images/nature-3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      </Card>
        </SwiperSlide>
    
      </Swiper>
    </>
  );
}

export default MyComponent;




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
