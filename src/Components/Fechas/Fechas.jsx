import { Box } from '@chakra-ui/react';
import React from 'react';

const Fechas = () => {
    return(
        <Box display="flex" mt={{ "base":"2em",  md: '4.2em', xl: '2em',}}
       
        >

        
         {/* fecha */}
         <Box color={'whiteAlpha.700'} fontWeight={100}
         mr={{ "base":"2em",  md: '4.2em', xl: '1.5em',}}
         
          >
              <p>Nov 2021 - Ago 2022</p>
          </Box>
          

  <Box>
      {/* cargo */}
     <Box color={'whiteAlpha.900'} fontWeight={100}>
              <p>Desarrollador frontend</p>
          </Box>
          </Box>
          </Box>
    )
}

export { Fechas }