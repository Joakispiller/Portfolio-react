import { Box } from '@chakra-ui/react';
import React from 'react';

const Experiencia = () => {
    return(
        
        <Box display={"flex"} color={'#00C296'} fontFamily="Ubuntu" 
        fontSize={{ "base":"2em",  md: '4.2em', xl: '2.5em',}}
        id='ExperienciaID'
        >

           <Box>&lt;</Box>
                <Box color={'white'} >
            <p color='white'>Experiencia de trabajo</p>
            </Box>

            <Box> &gt;</Box>
            
            </Box>
    )
}

export { Experiencia }