import { Box } from '@chakra-ui/react';
import React from 'react';

const Habilidad
 = () => {
    return(
      <Box display={"flex"} color={'#00C296'} fontFamily="Ubuntu" 
        fontSize={{ "base":"2em",  md: '3em', xl: '2.5em',}} 
        mb={{ "base":"2em",  md: '2em', xl: '1.5em',}}
        id='HabilidadID' 
        >

           <Box className='ski'>&lt;</Box>
                <Box color={'white'} >
            <p color='white'>Habilidades</p>
            </Box>

            <Box className='hab'>  &gt;</Box>
            
            </Box>
    )
}

export { Habilidad
 }