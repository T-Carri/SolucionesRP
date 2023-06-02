import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import { TopNav } from '@/components/top-nav';
import { styled } from '@mui/material/styles';

const inter = Inter({ subsets: ['latin'] })


const SIDE_NAV_WIDTH = 280;
const LayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  marginTop:'4em'
/*   [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  } */
}));
const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});




export default function Home() {
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

      <LayoutRoot>
        <LayoutContainer>
        <main>

<TopNav/>


</main> 
</LayoutContainer>
      </LayoutRoot>

   

    </>
  )
}
