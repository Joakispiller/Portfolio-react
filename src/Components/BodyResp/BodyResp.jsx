import { Box } from '@chakra-ui/react';
import React from 'react';
import"./BodyResp.css"
import { Saludar } from '../Saludar/Saludar';
import { Presentacion } from '../Presentacion/Presentacion';
import { BtnContacto } from '../BtnContacto/BtnContacto';
import { BtnCv } from '../BtnCv/BtnCv';
import { FotoMia } from '../FotoMia/FotoMia';
import { InfoMas } from '../InfoMas/InfoMas';
import { FelchaBajo } from '../FlechaBajo/FlechaBajo';
import { FraseProyecto } from '../FraseProyecto/FraseProyecto';
import { AllProyect } from '../AllProyect/AllProyect';
import { Proyectos } from '../Proyectos/Proyectos';
import { IconSkill } from '../IconSkill/IconSkill';
import { Habilidad } from '../Habilidad/Habilidad';
import { Experiencia } from '../Experiencia/Experiencia';
import { Fechitas } from '../Fechitas/Fechitas';
import { Laburito } from '../Laburito/Laburito';
import { Fechas } from '../Fechas/Fechas';
import { Laburos } from '../Laburos/Laburos';
import { Contactame } from '../Contactame/Contactame';
import { InfoContact } from '../InfoContact/InfoContact';
import { Mail } from '../Mail/Mail';
import { Formulario } from '../Formulario/Formulario';

const BodyResp = () => {
    return(
        <Box  className='toBodyRes'>
{/* hero */}
{/* celu */}
            <Box className='fotoSalud'>
             <Saludar/>
             <FotoMia/>
              <Presentacion/> 
              </Box>  
          
{/* tablet */}
           <Box className='tabletInit'>
            <Box>
              <Saludar/> 
              <Presentacion/> 
            </Box>
             
             <FotoMia/>
              </Box>  
              {/* ambas */}
         
           <Box display="flex">
             <BtnContacto/>
           <BtnCv/>
           </Box>
           <InfoMas/>
         <FelchaBajo/>

         {/* proyectos */}
         
            <FraseProyecto/>      
            <Proyectos/>
             <AllProyect/>

             {/* habilidades */}
             <Box 
       mt={{ "base":"5em",  md: '8em', xl: '18em',}}>
        <Habilidad/>
       <IconSkill />
       </Box>

       {/*exp  */}
       <Experiencia/>
       <Fechitas/>
        <Laburito/>
        <Fechas/>
        <Laburos/>

        {/* contacto */}
        <Contactame/>
       <InfoContact/>
       <Mail/> 
      <Formulario/>

       </Box>
    )
}

export { BodyResp }