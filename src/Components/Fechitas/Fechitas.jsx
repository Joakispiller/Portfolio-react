import { Box } from '@chakra-ui/react';
import React from 'react';

const Fechitas = () => {
    return(
        <Box display="flex" mt={{ "base":"2em",  md: '4.2em', xl: '2em',}}>

        
         {/* fecha */}
         <Box color={'whiteAlpha.700'} fontWeight={100}
         mr={{ "base":"2em",  md: '4.2em', xl: '1.5em',}}
         
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