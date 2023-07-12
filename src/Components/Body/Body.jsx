import React from 'react';
import { Box, Flex, color, flexbox } from '@chakra-ui/react'
import "./Body.css"
import { Saludar } from '../Saludar/Saludar';
import { FotoMia } from '../FotoMia/FotoMia';
import { Presentacion } from '../Presentacion/Presentacion';
import { Scroll } from '../Scroll/Scroll';
import { BtnContacto } from '../BtnContacto/BtnContacto';
import { BtnCv } from '../BtnCv/BtnCv';
import { InfoMas } from '../InfoMas/InfoMas';
import { FraseProyecto } from '../FraseProyecto/FraseProyecto';
import { AllProyect } from '../AllProyect/AllProyect';
import { Proyectos } from '../Proyectos/Proyectos';
import { Habilidad } from '../Habilidad/Habilidad';
import { IconSkill } from '../IconSkill/IconSkill';
import { Contactame } from '../Contactame/Contactame';
import { InfoContact } from '../InfoContact/InfoContact';
import { Mail } from '../Mail/Mail';
import { Formulario } from '../Formulario/Formulario';
import { BtnEnviar } from '../BtnEnviar/BtnEnviar';
import { TEspero } from '../TEspero/TEspero';
import { Experiencia } from '../Experiencia/Experiencia';
import { Laburos } from '../Laburos/Laburos';
import { Fechas } from '../Fechas/Fechas';
import { Laburito } from '../Laburito/Laburito';
import { Fechitas } from '../Fechitas/Fechitas';


const Body = () => {

    return(
      
    <Box className='toBody' ml={240} >
      {/* fleeeex inicio*/}
      <div>

    
      <div className='plex'>
        <div>
           <Saludar/>
           <Presentacion/> 
           <BtnContacto/>
           <BtnCv/>
        </div>
        <div>
          <FotoMia/>
        
        </div>
        <div>
          <Scroll/>
        </div>
      </div>

      {/* info+ */}
      <InfoMas/>

       </div>

                   {/* Proyectos */}
       <Box ml={{ "base":"2em",  md: '4.2em', xl: '6.2em',}}
       mt={{ "base":"2em",  md: '4.2em', xl: '18em',}}
       display={"Flex"}
       > 

          <div>
            <FraseProyecto/>
            <AllProyect/>
          </div>
          <div>
            <Proyectos/>
          </div>

       </Box >
       

       
       <Box ml={{ "base":"2em",  md: '4.2em', xl: '6.2em',}}
       mt={{ "base":"2em",  md: '4.2em', xl: '18em',}}>
        <Habilidad/>
       <IconSkill />
       </Box>

       <Box ml={{ "base":"2em",  md: '4.2em', xl: '6.2em',}}
        mt={{ "base":"2em",  md: '4.2em', xl: '18em',}}
        mr={{ "base":"2em",  md: '4.2em', xl: '15em',}}>
        <Experiencia/>
        <Fechitas/>
        <Laburito/>
        <Fechas/>
        <Laburos/>
        
        

       </Box>




        
       <Box ml={{ "base":"2em",  md: '4.2em', xl: '6.2em',}}
       mt={{ "base":"2em",  md: '4.2em', xl: '18em',}}>
       <Contactame/>
       <Box display="flex">
       <InfoContact/>
       <Mail/>
       </Box>
      <Formulario/>
      <BtnEnviar/>
      <TEspero/>
       </Box>


  

      

    </Box>
       
    )
}

export { Body }


