import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import { TopNav } from '@/components/top-nav';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Card, Grid, CardContent, Container } from '@mui/material';
import { Presentacion } from '@/components/Presentacion';
import { Servicios } from '@/components/Servicios';
import { Clientes } from '@/components/Clientes';
import nubes from '../assets/clouds.svg'

const inter = Inter({ subsets: ['latin'] })
const backgroundImage = 'https://images.unsplash.com/photo-1541415534056-fad380cd68a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=706&q=80'


const SIDE_NAV_WIDTH = 280;
const LayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  marginTop:'0em',

/*   [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  } */
}));
const LayoutContainer = styled('div')({
   display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
/*   backgroundImage:`url(${backgroundImage})`,  */
 /*  backgroundSize: 'cover' */

});




export default function Home() {

    const handleHover = (event) => {
      event.currentTarget.style.transform = 'scale(1.1)'; // Cambiar el tamaño al 110%
    };
  
    const handleLeave = (event) => {
      event.currentTarget.style.transform = 'scale(.5)'; // Volver al tamaño original
    };


  return (
    <>
      <Head>
        <title>Soluciones RP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icono.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
      </Head>

{/* <TopNav/> */}
    <TopNav/>

      <LayoutRoot>
        <LayoutContainer>
        <main>

<Presentacion/>
    <Servicios/>
   <Clientes/>
        

</main> 
</LayoutContainer>
      </LayoutRoot>

  

    </>
  )
}
