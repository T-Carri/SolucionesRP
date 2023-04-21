import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';

import Image from 'next/image';
import Flayer from '../assets/flayerSRP.png'


import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';


export const S1 = ()=> {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  }; 

/*   useEffect(()=>{
    setOpen(true)
  },[]) */
    
    return (
      <>
         <Container       maxWidth="xl"  >
           <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="row"  justifyContent="center" alignItems="center"   sx={{  width: 2000,
        height: 500 }}>
           <Grid item xl={6} lg={6} md={6} sm={6} xs={6}  sx={{pt:15 }}  >
  <Grid container direction={'column'} justifyContent={"center"} alignItems={'center'}>
  <Grid item> <Rating name="read-only" value='5' readOnly size="large" /></Grid>
       <Grid item>
       <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Expertos en soluciones de negocios
              </Typography>
       </Grid>
       
           
      
              
             
  <Grid item>            <button id='help'>
      ¿Necesitas ayuda?
  </button>
  </Grid>
              
              </Grid>
  
  
             
  
   
           </Grid>
  <Grid item xl={6} lg={6} md={12} sm={12} xs={12}   style={{ width: '30em', height: '40em'}} sx={{pl:15, display: { sm:'none', md:'none', xs:'none' }}}>
     <Grid  container xl={12} lg={12} md={12} sm={12} xs={12} direction={'row'} alignItems="center"  justifyContent="center" style={{ width: '30em', height: '40em'}}  >  
     <Grid item align="center">
     <Image src={Flayer}  style={{height:'100%', width:'100%'}}/>
     </Grid>

    </Grid>
  
           </Grid>


           </Grid>
        
           <Dialog  fullWidth="md"
      maxWidth="sm" sx={{ zIndex:99999,
  /*  display: { lg:'none', xl:'none'  } */
}} 
      /* fullScreen={fullScreen} */
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
          <Image src={Flayer}  style={{height:'95vh', width:'100%'}}/>
  
        <Button onClick={handleClose} autoFocus>
          ok
        </Button>
      
    </Dialog>    
             
            </Container>
      </>
    )
  }
  