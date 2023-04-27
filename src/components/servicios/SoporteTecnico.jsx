import { Grid } from '@mui/material'
import React, {useState} from 'react'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import st1 from '../../assets/soportetec.png'
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



export const SoporteTecnico = () => {

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
<Image alt='st1' style={{width:'100%', height:'65vh'}} src={st1}></Image>

          </Grid>
<Grid item xl={7} lg={7} sm={8}
          md={8} xs={12}> 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Solicite soporte técnico correctivo </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Div>
          El soporte técnico correctivo es el servicio que ofrecemos para solucionar problemas y errores en los sistemas informáticos de nuestros clientes. Nuestro objetivo es garantizar que sus equipos funcionen sin problemas y que puedan seguir trabajando sin interrupciones.
Nuestros servicios incluyen:
<ul>
  <li> 1. Diagnóstico y resolución de problemas: nuestro equipo de técnicos altamente capacitados está disponible para resolver cualquier problema que puedan tener nuestros clientes. Desde problemas de hardware hasta problemas de software, podemos solucionarlos todos.</li>
  <li>2. Mantenimiento preventivo: también ofrecemos servicios de mantenimiento preventivo para evitar problemas antes de que ocurran. Realizamos mantenimiento regular en los equipos de nuestros clientes para garantizar su correcto funcionamiento.</li>
  <li>3. Actualizaciones de software y hardware: si los equipos de nuestros clientes necesitan actualizaciones, podemos proporcionarlas. Ya sea que necesiten una actualización de software o hardware, podemos hacerlo de manera rápida y eficiente.</li>
  <li>4. Servicios de recuperación de datos: si algún cliente pierde datos importantes, estamos aquí para ayudar. Podemos recuperar datos perdidos debido a fallas de hardware o software.</li>
  <li>5 . Consultoría y asesoramiento: además de nuestros servicios de soporte técnico correctivo, también ofrecemos consultoría y asesoramiento para ayudar a nuestros clientes a tomar decisiones informadas sobre sus sistemas informáticos.</li>

</ul>

</Div>



          </Typography>
        </AccordionDetails>
      </Accordion>

    </Grid>


    </Grid>
  )
}


