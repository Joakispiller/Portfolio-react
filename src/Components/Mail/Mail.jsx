import { Box } from '@chakra-ui/react';
import React from 'react';

const Mail = () => {
    return(
        <Box display="flex" className='meil' id='ContactoID'>
            <Box   w={{ "base":"0.9em",  md: '1.4em', xl: '1.7em',}}
              ml={{  xl: '27em',}}
              mt={{ "base":"0.8em",  md: '1.4em', xl: '0.3em',}}
              id='ContactID'
            >
                 <img src="mailicon.svg" alt="" />
            </Box>

            <Box color="#9A5BFF"   fontSize={{ "base":"1em",  md: '1.2em', xl: '1.5em',}}
            ml={{ "base":"0.5em",  md: '1em', xl: '0.5em',}}
            mt={{ "base":"0.5em",  md: '1em',xl: '0em', }}
            >
            <a href="mailto:Joakispiller22@gmail.com" target='blank'>Joakispiller22@gmail.com</a>
            </Box>
           
     
            
        </Box>
    )
}

export { Mail }