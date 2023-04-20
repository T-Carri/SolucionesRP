import { Box } from "@mui/material"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Contacto = () => {
  return (
    <Button 
      variant="contained"
      color="success"
      align="center"
      startIcon={<WhatsAppIcon sx={{pl:1}}  style={{height:'3em', width:'3em'}} />}
      style={{ 
        border:'',
        position: 'fixed',
        bottom: '15px', // Puedes ajustar la posición vertical del botón
        right: '100px', // Puedes ajustar la posición horizontal del botón
        zIndex: 9999 // Asegurarse de que el botón esté por delante de otros elementos
      }}
      /* onClick={handleWhatsAppClick} */
    >
     
    </Button >
   
  )
}
