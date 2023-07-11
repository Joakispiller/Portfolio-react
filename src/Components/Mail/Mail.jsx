import { Box } from '@chakra-ui/react';
import React from 'react';

const Mail = () => {
    return(
        <Box display="flex" >
            <Box   w={{ "base":"1em",  md: '1em', xl: '1.7em',}}
              ml={{ "base":"1em",  md: '1em', xl: '27em',}}
              mt={{ "base":"1em",  md: '1em', xl: '0.3em',}}
            >
                 <img src="mailicon.svg" alt="" />
            </Box>

            <Box color="#9A5BFF"   fontSize={{ "base":"1em",  md: '1em', xl: '1.5em',}}
            ml={{ "base":"1em",  md: '1em', xl: '0.5em',}}
            >
            <a href="mailto:Joakispiller22@gmail.com">Joakispiller22@gmail.com</a>
            </Box>
           
     
            
        </Box>
    )
}

export { Mail }