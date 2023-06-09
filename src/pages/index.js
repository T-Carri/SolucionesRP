import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import ResponsiveAppBar from '@/components/navbar'
import { Carrousel } from '@/components/carousel'
import Servicios from '@/components/servicios'
import { Contacto } from '@/components/contacto'
import { CardContact } from '@/components/CardContact'
import {S1} from '@/components/Propaganda'
import CssBaseline from '@mui/material/CssBaseline';
import ChatWidget from '@/components/ChatWidget'
import { Popover } from '@/components/Popover'
const inter = Inter({ subsets: ['latin'] })

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

<main>
<CssBaseline />

   <ResponsiveAppBar/>
   <Carrousel/>
    <S1/> 
{/*   <Popover/> */}
  {/*  <CardContact/> */}
   <Contacto/>
   <Servicios/>
   
<ChatWidget/>

</main>    

    </>
  )
}
