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
           

       </Box>
    )
}

export { BodyResp }