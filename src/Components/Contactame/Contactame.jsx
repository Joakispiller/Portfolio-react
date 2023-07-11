import { Box } from '@chakra-ui/react';
import React from 'react';

const Contactame = () => {
    return(
        
           <Box display={"flex"} color={'#00C296'} fontFamily="Ubuntu" 
        fontSize={{ "base":"2em",  md: '4.2em', xl: '2.5em',}} 
        mb={{ "base":"2em",  md: '4.2em', xl: '0.6em',}}
        id='ContactoID'
        >

           <Box>&lt;</Box>
                <Box color={'white'} >
            <p color='white'>Contactáme</p>
            </Box>

            <Box> &gt;</Box>
            
            </Box> 
        
    )
}

export { Contactame }