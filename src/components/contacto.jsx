import { Box } from "@mui/material"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Contacto = () => {
  return (
    <Button 
      variant="contained"
      color="success"
      startIcon={<WhatsAppIcon  style={{height:'3em', width:'3em'}} />}
      style={{ 
       
        position: 'fixed',
        bottom: '16px', // Puedes ajustar la posición vertical del botón
        right: '16px', // Puedes ajustar la posición horizontal del botón
        zIndex: 9999 // Asegurarse de que el botón esté por delante de otros elementos
      }}
      /* onClick={handleWhatsAppClick} */
    >
     
    </Button >
   
  )
}
