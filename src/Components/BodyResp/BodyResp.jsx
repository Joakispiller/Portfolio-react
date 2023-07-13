import { Box } from '@chakra-ui/react';
import React from 'react';
import"./BodyResp.css"
import { Saludar } from '../Saludar/Saludar';
import { Presentacion } from '../Presentacion/Presentacion';
import { BtnContacto } from '../BtnContacto/BtnContacto';
import { BtnCv } from '../BtnCv/BtnCv';
import { FotoMia } from '../FotoMia/FotoMia';
import { InfoMas } from '../InfoMas/InfoMas';

const BodyResp = () => {
    return(
        <Box  className='toBodyRes'>
{/* hero */}
            <Box className='fotoSalud'>
             <Saludar/>
             <FotoMia/>
              </Box>
           <Presentacion/> 
           <Box display="flex">
             <BtnContacto/>
           <BtnCv/>
           </Box>
           <InfoMas/>
         
           

        </Box>
    )
}

export { BodyResp }