import { Container, Grid } from '@mui/material'
import React, {useEffect, useState} from 'react'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import i1 from '../../assets/1.png'
import Image from 'next/image'
import Imagetest from './Imagetest';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
//import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button';


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}));




const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },   
  '&:before': {
    display: 'none',
  },
}));


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



export const SolucionesAspel = () => {
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = useState('panel1');



 /*  const fullScreen = useMediaQuery(theme.breakpoints.down('md')); */

 const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  useEffect(()=>{
    setOpen(true)
  },[])


  return (
    <Grid container lg={12} xl={12} direction="row" >
<Grid item     xs={false}
          sm={4}
          md={4} 
          lg={5}      sx={{
            /*  backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',  */
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:450
          }}>

<Imagetest/>
          </Grid>
<Grid item xl={7} lg={7} sm={8}
          md={8} xs={12} sx={{pl:3}}> 
 
 
      
      

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong>Asesoria personalizada</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Div>
          Nos enfocamos en sistemas Aspel porque sabemos que son una herramienta esencial para el control de los procesos empresariales.
          <br />
          <br />
    <strong>¿Por qué elegirnos?</strong>
    <br /> 
    Somos un equipo de expertos en sistemas Aspel con años de experiencia en el campo. 
    <br/>
    Nuestro objetivo principal es brindarte una atención personalizada para satisfacer tus necesidades específicas. 
    <br/>
   Trabajamos de manera cercana contigo para entender tus objetivos y brindarte soluciones que se adapten a tus requerimientos. Además, nos enfocamos en brindarte una experiencia de servicio excepcional y nos aseguramos de que te sientas respaldado en todo momento.
         <br />
         <br />

         <strong>   Ofrecemos una amplia gama de servicios de asesoría personalizada en sistemas Aspel, entre los que se incluyen: </strong>
         <br />
         <br />

         <ul>
          <li> <strong> Consultoría especializada: </strong> Brindamos servicios de consultoría especializada en sistemas Aspel para ayudarte a optimizar tus procesos empresariales y maximizar la eficiencia de tu empresa.</li>
     
         </ul>
      
         </Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <strong>Implementaciones</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Div>
        <strong>Nuestros servicios:</strong>  
<br />
<ul>
  <li><strong>Implementación de sistemas Aspel:</strong> Nos encargamos de la instalación y configuración de los sistemas Aspel que necesites para tu empresa, garantizando su correcto funcionamiento.</li>
  <li> <strong>Actualizaciones y mantenimiento:</strong> Mantenemos tus sistemas Aspel actualizados y en óptimas condiciones para asegurar su funcionamiento a largo plazo.</li>
  <li><strong>Capacitación y soporte:</strong> Ofrecemos capacitación para el uso de los sistemas Aspel y soporte técnico en línea y presencial para asegurarnos de que siempre puedas contar con nuestra ayuda.</li>
</ul>



En nuestra empresa nos enfocamos en brindarte una atención personalizada y soluciones a medida para tus necesidades en sistemas Aspel. Nos aseguramos de que siempre cuentes con un servicio de calidad y apoyo técnico en todo momento. Si estás interesado en nuestros servicios, no dudes en contactarnos para más información. ¡Estamos para ayudarte!
</Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> <strong>Personalizacion de formatos</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Div>
          Te ofrecemos nuestros servicios de personalización de formatos o plantillas de Aspel. Sabemos lo importante que es tener una imagen profesional en tus facturas, cotizaciones y demás documentos de venta, por lo que queremos ayudarte a lograrlo.
       
       
         <br />
         Nuestro equipo de expertos en diseño y programación se encargará de personalizar las plantillas de SAE Aspel según tus necesidades y preferencias. Podemos ajustar el diseño de tus facturas, cotizaciones y otros documentos para que se adapten a la identidad visual de tu empresa, incluyendo tu logotipo, colores corporativos, tipografía y demás elementos.
Además, también podemos incorporar información adicional a tus documentos, como sellos digitales, códigos QR, notas y observaciones personalizadas, entre otros elementos.
<br />
{/* Al contratar nuestros servicios, te garantizamos un trabajo de calidad y a la medida de tus necesidades. Nos aseguramos de que la personalización de tus formatos de  Aspel sea funcional, atractiva y fácil de usar.
No pierdas la oportunidad de mejorar la imagen de tu empresa con nuestros servicios de personalización de formatos o plantillas de  Aspel. Contáctanos para obtener más información y solicitar una cotización sin compromiso. ¡Estamos a tu disposición! */}
       </Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />

       
  <Grid item sx={
    {width:550, 
      display: {sm:'none', xs: 'none', lg:'flex', xl:'flex' }
   }
  }>
  <Imagetest/>


  </Grid>

     
    </Grid>

    <Dialog  fullWidth="md"
      maxWidth="sm" sx={{ 
   display: { lg:'none', xl:'none'  }
}}
      /* fullScreen={fullScreen} */
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
        <Imagetest/>
  
        <Button onClick={handleClose} autoFocus>
          ok
        </Button>
      
    </Dialog>

    </Grid>

  )
}







