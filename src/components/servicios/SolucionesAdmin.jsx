import { Grid } from '@mui/material'
import React, {useState} from 'react'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import i1 from '../../assets/1.png'
import Image from 'next/image'
import Imagetest from './Imagetest';




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



export const SolucionesAdmin = () => {

  const [expanded, setExpanded] = useState('panel1');


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <Grid container lg={12} xl={12} direction="row">
<Grid item     xs={false}
          sm={4}
          md={4} 
          lg={5}      sx={{
           /*  backgroundImage:  <Image key={'i12'}  alt='i1' style={{width:'100%', height:'90vh'}} src={i1} />,
            backgroundRepeat: 'no-repeat', */
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:450
          }}>
<Imagetest/>

          </Grid>
<Grid item xl={7} lg={7} sm={8}
          md={8} xs={12}> 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6" gutterBottom><strong>Dominios</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
<Div>
          <strong>¿Estás buscando dónde montar tu sitio web, o las mejores opciones de alojamiento?</strong> 
          <br />
          ¡Nosotros podemos ayudarte!
          <br />
Contamos con las mejores opciones en HOSTING para que puedas maximizar tu productividad y comenzar a ganar visitas en tu sitio online. Ademas podemos asesorarte para que estes online.
</Div>  </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6" gutterBottom><strong>Respaldos en la nube</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
    
          <Div>{"En la actualidad, el almacenamiento en la nube es una opción cada vez más popular para guardar información y datos importantes. Sin embargo, la gestión de respaldos en la nube puede resultar complicada y en ocasiones, confusa para aquellos que no están familiarizados con la tecnología. Es por eso que nuestra empresa ofrece servicios de asesoría y apoyo en respaldos en la nube, para ayudar a nuestros clientes a garantizar la seguridad y protección de sus datos."}</Div>
<br />
<Div>
<strong>¿Qué ofrecemos? </strong>
<br />

<ul>
  <li><strong>Evaluación de necesidades:</strong> realizamos una evaluación personalizada para determinar las necesidades de nuestros clientes y recomendar soluciones que se ajusten a su presupuesto y requerimientos.</li>
  <li><strong>Implementación de respaldos en la nube:</strong>  una vez que se ha determinado la mejor opción para el cliente, llevamos a cabo la implementación de los respaldos en la nube.</li>
  <li><strong>Monitoreo y mantenimiento:</strong> nos aseguramos de que los respaldos en la nube funcionen correctamente y de que la información esté protegida en todo momento. También ofrecemos mantenimiento y actualizaciones regulares para garantizar la seguridad y estabilidad del sistema.</li>
<li> <strong>Soporte técnico:</strong> nuestro equipo de soporte técnico está disponible para responder cualquier pregunta o resolver cualquier problema que pueda surgir.</li>
</ul>
<br/>
<strong>Beneficios de trabajar con nosotros </strong>
<br />
<ul>
  <li>
    <strong>Experiencia: </strong> nuestro equipo cuenta con amplia experiencia en la implementación y gestión de respaldos en la nube.</li>
  <li>
 <strong>Personalización: </strong>  cada cliente es único, por lo que ofrecemos soluciones personalizadas que se ajusten a sus necesidades.
  </li>
  <li>
    <strong>Ahorro de tiempo y dinero:</strong>
   al trabajar con nosotros, nuestros clientes pueden dedicar más tiempo a su negocio y reducir costos al no tener que contratar personal especializado en la gestión de respaldos en la nube.
  </li>
  <li>
    <strong>  Seguridad:</strong>
  nos aseguramos de que los respaldos en la nube estén protegidos y sean seguros en todo momento.
  </li>

</ul>
</Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6" gutterBottom><strong>Hosting</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Div>
          En un mundo cada vez más digital, es esencial tener una presencia en línea sólida y confiable. Sin embargo, para muchas empresas, elegir y gestionar un servicio de hosting puede ser un desafío abrumador. 
          
           Es por eso que estamos aquí para ayudar.
           <br />
Nuestra empresa ofrece servicios de asesoramiento y apoyo para hosting a empresas de todos los tamaños. 
           <br />
Nuestro equipo de expertos está aquí para <strong>ayudarlo</strong> a elegir el proveedor de <strong>hosting </strong> adecuado para sus necesidades y presupuesto.
Ofrecemos asesoramiento personalizado en cuanto a los diferentes tipos de hosting disponibles, desde hosting compartido hasta hosting dedicado. Además, trabajamos en colaboración con los proveedores de hosting para garantizar que nuestros clientes reciban el mejor servicio posible.
También ofrecemos apoyo continuo para asegurarnos de que su sitio web se mantenga en línea y funcione sin problemas. Esto incluye la monitorización del rendimiento, el mantenimiento y las actualizaciones necesarias.
En resumen, nuestra empresa ofrece un servicio completo de asesoramiento y apoyo para hosting para garantizar que su presencia en línea sea confiable y eficiente. Contáctenos hoy mismo para obtener más información sobre cómo podemos ayudarlo a elegir y administrar su servicio de hosting. ¡Gracias por su atención!
            </Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>


    </Grid>
  )
}