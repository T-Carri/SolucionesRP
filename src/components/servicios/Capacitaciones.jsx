import { Grid } from '@mui/material'
import React, {useState} from 'react'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import c1 from '../../assets/capacit.png'
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



export const Capacitaciones = () => {

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
<Image alt='c1'  style={{width:'100%', height:'65vh', opacity: '0.7'}} src={c1}></Image>

          </Grid>
<Grid item xl={7} lg={7} sm={8}
          md={8} xs={12}> 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6" gutterBottom><strong>Sistemas Aspel</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> 
            <Div>
          Somos una empresa líder en el mercado de servicios de capacitación en sistemas Aspel, dedicados a ayudar a las empresas a alcanzar su máximo potencial. Nos enfocamos en analizar las necesidades de cada empresa y crear planes y soluciones personalizados para satisfacer sus necesidades específicas. 
Nuestro enfoque principal es la capacitación en sistemas Aspel. Ofrecemos cursos completos y personalizados para que su empresa pueda utilizar estos sistemas de manera efectiva. Además, ofrecemos soporte y asistencia técnica para ayudar a su empresa a implementar estos sistemas de manera eficiente y con éxito.
Entendemos que cada empresa es única y tiene necesidades diferentes. Por eso, ofrecemos un análisis gratuito de las necesidades de su empresa para asegurarnos de que nuestras soluciones sean adecuadas para usted. Si está interesado en aprender más sobre nuestros servicios, por favor contáctenos para obtener más información.
</Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6" gutterBottom> <strong>Microsoft Office</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Div>
          En la actualidad, el uso de tecnología es una parte fundamental del mundo empresarial. Microsoft Office es uno de los programas más utilizados en el mundo para la gestión de información y comunicación empresarial. Por esta razón, hemos desarrollado un equipo de capacitadores altamente calificados para ofrecer una experiencia única y personalizada de aprendizaje en Microsoft Office.
Ofrecemos una amplia variedad de cursos diseñados para adaptarse a las necesidades de cada empresa. Desde cursos básicos hasta cursos avanzados, nos aseguramos de que cada uno de nuestros estudiantes tenga la capacidad de aplicar lo aprendido en su trabajo diario. Además, nos aseguramos de que nuestros cursos sean interactivos y prácticos, para que los estudiantes puedan aprender a través de la experiencia práctica.
Nuestros instructores son expertos en Microsoft Office y tienen experiencia en la enseñanza. Su pasión por compartir su conocimiento con otros hace que nuestras clases sean amenas y fáciles de entender. Todos nuestros cursos están diseñados para ayudar a nuestros estudiantes a mejorar sus habilidades en Microsoft Office, aumentar su productividad y hacer su trabajo más eficiente.
En nuestra empresa, también entendemos la importancia de la flexibilidad. Ofrecemos opciones de capacitación en persona y en línea para adaptarnos a las necesidades de cada empresa. Además, trabajamos con horarios flexibles para garantizar que nuestros cursos se adapten a su agenda.

</Div>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
   
    </Grid>


    </Grid>
  )
}
