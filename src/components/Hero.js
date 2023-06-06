import * as React from 'react';
//import Button from '../components/Button';
//import Typography from '../components/Typography';
import ProductHeroLayout from './HeroLayout';
import { Typography, Card } from '@mui/material';
import { TopNav } from './top-nav';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const backgroundImage = 'https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?auto=format&fit=crop&w=1400';
  
  
  //'https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?auto=format&fit=crop&w=1400'
export default function Hero() {
    const theme = useTheme()

  return (
  
    

    <ProductHeroLayout 
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
        
      {/* Increase the network loading priority of the background image. */}
      <img  
       
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Toma el control de tu negocio
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        {/* Enjoy secret offers up to -70% off the best luxury hotels every Sunday. */}
      </Typography>
     {/*  <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button> */}
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
    
    
  );
}