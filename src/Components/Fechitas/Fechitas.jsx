import { Box } from '@chakra-ui/react';
import React from 'react';

const Fechitas = () => {
    return(
        <Box display="flex" mt={{ "base":"2em",  md: '2em', xl: '2em',}}
        fontSize={{ "base":"0.9em",  md: '1.1em', }}
        ml={{ "base":"2.5em",  md: '3.7em', xl: '0em',}}
        >

        
         {/* fecha */}
         <Box color={'whiteAlpha.700'} fontWeight={100}
         mr={{ "base":"1em",  md: '2em', xl: '1.5em',}}
         
          >
              <p>Oct 2020 - Sep 2021</p>
          </Box>
          

  <Box>
      {/* cargo */}
     <Box color={'whiteAlpha.900'} fontWeight={100}>
              <p>Atencion al cliente</p>
          </Box>
          </Box>
          </Box>
    )
}

export { Fechitas }