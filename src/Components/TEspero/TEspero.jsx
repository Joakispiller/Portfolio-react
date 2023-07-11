import { Box } from '@chakra-ui/react';
import React from 'react';

const TEspero = () => {
    return(
        <Box display="flex" 
        mt={{ "base":"1em",  md: '1em', xl: '10em',}} 
        mb={{ "base":"1em",  md: '1em', xl: '2.2em',}} 
        >

         <Box width="1.1em" 
          mr={{ "base":"1em",  md: '1em', xl: '1em',}} 
          mt={{ "base":"1em",  md: '1em', xl: '0.3em',}} 
         >
            <img src="left.svg"  />
        </Box>
            <Box fontSize={{ "base":"1em",  md: '1em', xl: '1em',}} color="#dfdfdf"
            fontWeight={100}
        
        
         >
             <p>Te estoy esperando</p>
        
        </Box>
      
         </Box>
    )
}

export { TEspero}