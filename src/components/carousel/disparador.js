import React from "react";
import Carousel from "./carousel";

const images = [
 
 'https://www.solucionesrp.com.mx/cliente0.JPG',
 'https://www.solucionesrp.com.mx/cliente1.JPG',
 'https://www.solucionesrp.com.mx/cliente2.JPG',
 'https://www.solucionesrp.com.mx/cliente3.JPG',
 'https://www.solucionesrp.com.mx/cliente4.JPG',
 'https://www.solucionesrp.com.mx/cliente5.JPG',
 'https://www.solucionesrp.com.mx/cliente6.JPG',
 'https://www.solucionesrp.com.mx/cliente7.JPG',
 'https://www.solucionesrp.com.mx/cliente8.JPG',
 'https://www.solucionesrp.com.mx/cliente9.JPG',
 'https://www.solucionesrp.com.mx/cliente10.JPG'
  // Agrega más URLs de imágenes aquí
];

const disparador = () => {
  return (
    <div>
      <h1>My Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default disparador;