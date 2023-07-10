import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const FraseProyecto
 = () => {

    return(
        <Box display={"flex"} color={'#00C296'} fontFamily="Ubuntu" 
        fontSize={{ "base":"2em",  md: '4.2em', xl: '2.5em',}}
        >

           <Box>&lt;</Box>
                <Box color={'white'} >
            <p color='white'>Proyectos</p>
            </Box>

            <Box> &gt;</Box>
            
            </Box>
    
    )
}

export { FraseProyecto
 }