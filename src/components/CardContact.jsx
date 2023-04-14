import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

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
     <Typography component="h2" variant="h3" >
                          Solicita hoy más información
                        </Typography>  
    </CardContent>
    <CardActions>
  
    </CardActions>
        </Card>
        </>
  )
}
