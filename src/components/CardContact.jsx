import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';

export const CardContact = () => {
  return (
    <>
    <Card style={{
         position: 'absolute',
         top: '150px', // Puedes ajustar la posición vertical del botón
         left: '70px', // Puedes ajustar la posición horizontal del botón
         zIndex: 8888
    }}>
    <CardContent>
     <Typography component="h4" variant="h5" >
     <strong> Solicita hoy más información</strong>     
                        </Typography>  
    </CardContent>
    <CardActions>
      <Grid container direction='column' justifyContent='center'>
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

      </Grid>

   

    </CardActions>
        </Card>
        </>
  )
}
