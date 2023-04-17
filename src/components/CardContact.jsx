import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const themeContact = createTheme({
  typography: {
    fontFamily: [
    '"Poppins"', 'sans-serif'
    ].join(','),
  },
});




export const CardContact = () => {
  return (
    <>

    <Card xl={8} lg={8} md={8} sm={8} xs={8}  style={{
         position: 'absolute',
         top: '20%', // Puedes ajustar la posición vertical del botón
         left: '6%', // Puedes ajustar la posición horizontal del botón
         padding: '2em',
         zIndex: 8888
    }}>
    <CardContent>
    <ThemeProvider theme={themeContact}>
     <Typography id='1' component="h3" variant="h4" >
     <strong> Solicita hoy más información</strong>     
                        </Typography>   </ThemeProvider>
    </CardContent>
    <CardActions>
      <Grid container direction='column' justifyContent='center' alignItems='center' >
<Grid item>  <div class="input-group">
<Typography component="h5" variant="h6" >

Nombre y apellido
                        </Typography> 
    
    <input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
    </div> </Grid>
<Grid item>

<div class="input-group">

<Typography component="h5" variant="h6" >
Email address
                        </Typography> 

<input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
</div>
</Grid>

<Grid item>

<div class="input-group">

<Typography component="h5" variant="h6" >
  Telefono

</Typography> 

<input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
</div>
</Grid>

<Grid item sx={{p:3}}>


<button id='hoverbutton'><span class="text">Enviar</span><span>Gracias!</span></button>
</Grid>

      </Grid>

   




    </CardActions>
        </Card>
       
        </>
  )
}
