import React from 'react'
import { Card, Grid } from '@mui/material'
import { Height } from '@mui/icons-material'
export const Popover = () => {
  return (
   
        <div class="cardi"  style={{ 
       
       height:'15em', width:'11em',
       position: 'fixed',
       bottom: '100px', // Puedes ajustar la posición vertical del botón
       right: '20px', // Puedes ajustar la posición horizontal del botón
       zIndex: 9999 // Asegurarse de que el botón esté por delante de otros elementos
     }}>
    <div class="cardi-img"></div>
      <div class="cardi-info">
        <div class="cardi-text">
          <p class="text-title">Chat</p>
      
        </div>
     
        <div class="cardi-icon">
        <svg viewBox="0 0 28 25" class="icon">
  <path d="M2.13 14.855l1.867 1.94L12 4.963l12 12-1.867 1.94L14.8 9.934v18.266H10.93V9.934z"></path>
</svg>
        </div>
      </div>
    </div>
    
   
  )
}
