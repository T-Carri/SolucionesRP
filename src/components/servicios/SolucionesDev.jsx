import { Grid } from '@mui/material'
import React, {useState} from 'react'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import dev from '../../assets/dev.png'
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



export const SolucionesDev = () => {

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
<Image  style={{width:'100%', height:'65vh'}} src={dev}></Image>

          </Grid>
<Grid item xl={7} lg={7} sm={8}
          md={8} xs={12}> 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>paginas web</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Div>
          Somos una empresa líder en el mercado que se dedica a brindar soluciones de diseño y desarrollo web personalizadas para empresas y particulares. Nuestro objetivo es ofrecer una experiencia única y satisfactoria a nuestros clientes, adaptándonos a sus necesidades y requerimientos.
Nuestros servicios incluyen la creación de sitios web desde cero, la optimización y mejora de sitios web existentes, el diseño de tiendas en línea, la integración de sistemas de pago en línea, la optimización de motores de búsqueda (SEO), la creación de contenido web, la integración de redes sociales y mucho más.
Contamos con un equipo altamente capacitado de diseñadores y desarrolladores web, quienes utilizan las últimas tecnologías y herramientas para crear sitios web atractivos y funcionales. Nos enfocamos en la experiencia del usuario, la facilidad de navegación y la rapidez de carga del sitio web.
Nuestros clientes son nuestra principal prioridad y nos aseguramos de que estén satisfechos en todo momento. Ofrecemos un servicio de soporte técnico y asesoramiento en línea para ayudarlos en todo lo que necesiten.
En resumen, somos la empresa ideal para aquellas personas que desean una página web profesional, elegante y personalizada. ¡No dude en contactarnos para solicitar una cotización!
</Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>web apps</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Div>
          ¡Descubre el poder de las Web Apps con nuestra empresa!
Ofrecemos soluciones innovadoras de Web Apps que ayudarán a tu negocio a alcanzar nuevos niveles de eficiencia y productividad. Nuestras aplicaciones están diseñadas para adaptarse a tus necesidades y requerimientos específicos, brindando una experiencia única y satisfactoria a tus usuarios.
Nos enfocamos en la creación de aplicaciones web rápidas, intuitivas y fáciles de usar, que pueden ser accedidas desde cualquier dispositivo con conexión a Internet. Nos aseguramos de que tu aplicación web se vea y se sienta como una aplicación nativa, ofreciendo una experiencia de usuario excepcional.
Contamos con un equipo altamente capacitado de desarrolladores web que utilizan las últimas tecnologías y herramientas para crear aplicaciones web de calidad superior. Desde aplicaciones de gestión empresarial hasta aplicaciones de comercio electrónico, podemos ayudarte a crear la aplicación perfecta para tu negocio.
Nos enorgullece ofrecer un servicio de soporte técnico y asesoramiento personalizado a cada uno de nuestros clientes. Nos aseguramos de que estés satisfecho con nuestra solución de Web App en todo momento y estamos disponibles para ayudarte en cualquier momento.
</Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>apps nativas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Div>
          ¡Bienvenidos a la era de las apps nativas! ¿Quieres llevar tu negocio al siguiente nivel? ¿Necesitas una aplicación móvil que te permita conectarte con tus clientes de manera más efectiva? ¡Tenemos la solución perfecta para ti!
En nuestra empresa ofrecemos apps nativas, diseñadas a medida para satisfacer las necesidades específicas de tu negocio. Nuestras apps se integran perfectamente con los sistemas operativos móviles más populares, como iOS y Android, lo que significa que tus clientes pueden acceder a ellas sin importar qué tipo de dispositivo estén usando.
Nuestras apps nativas ofrecen una experiencia de usuario sin igual. Son rápidas, confiables y están diseñadas para funcionar en línea y fuera de línea. Además, cuentan con una amplia gama de características personalizables, como la integración con las redes sociales, la geolocalización y la notificación push, lo que te permitirá mantener a tus clientes siempre informados sobre tus últimas novedades.
En nuestra empresa, entendemos que cada negocio es único, y por eso ofrecemos un servicio personalizado de desarrollo de apps nativas. Trabajamos estrechamente contigo para entender tus necesidades y objetivos específicos, y creamos una aplicación móvil que te ayudará a lograrlos.
Así que si estás buscando una manera efectiva de conectar con tus clientes, ¡contáctanos hoy mismo! Nuestras apps nativas te llevarán al siguiente nivel y te ayudarán a hacer crecer tu negocio. ¡No esperes más para empezar!
</Div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>


    </Grid>
  )
}





