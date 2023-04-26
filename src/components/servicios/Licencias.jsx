import { Grid } from '@mui/material'
import React, {useState} from 'react'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import l1 from '../../assets/licencias.png'
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



export const Licencias = () => {

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
<Image  style={{width:'100%', height:'65vh'}} src={l1}></Image>
          </Grid>
<Grid item xl={7} lg={7} sm={8}
          md={8} xs={12}> 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Licencias Aspel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Div>
          Mejora tu productividad y lleva el control de tu negocio al siguiente nivel con Aspel. Un software fácil de usar, confiable y seguro, que se adapta a tus necesidades y te ayuda a administrar tus operaciones de manera más eficiente. Con Aspel, puedes automatizar tareas clave como facturación, contabilidad y nómina, ahorrando tiempo y evitando errores costosos. Además, nuestra amplia variedad de productos te permite elegir la solución que mejor se adapte a tu empresa, desde pequeñas hasta grandes corporaciones. No esperes más, adquiere hoy mismo tu licencia Aspel y comienza a disfrutar de los beneficios de una gestión empresarial eficiente y efectiva.
          </Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
  
    </Grid>


    </Grid>
  )
}






