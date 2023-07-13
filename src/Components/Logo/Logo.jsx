import { Box } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
    return(
        <Box ml={{ "base":"2em",  md: '4.2em', xl: '2.5em',}}
        mt={{ "base":"2em",  md: '4.2em', xl: '2em',}}
        width={{ "base":"1em",  md: '4.2em', xl: '9em',}}>
        <img src="Loguito.png" alt="logo joaquin" 
         />
            
         </Box>

            
    )
}

export { Logo }