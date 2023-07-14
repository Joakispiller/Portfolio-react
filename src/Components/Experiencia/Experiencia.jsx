import { Box } from '@chakra-ui/react';
import React from 'react';

const Experiencia = () => {
    return(
        
        <Box display={"flex"} color={'#00C296'} fontFamily="Ubuntu" 
        fontSize={{ "base":"1.6em",  md: '3em', xl: '2.5em',}}
        mt={{ "base":"2em",  md: '3em',}}
        id='ExperienciaID'
        >

           <Box className='xp'>&lt;</Box>
                <Box color={'white'} >
            <p color='white'>Experiencia de trabajo</p>
            </Box>

            <Box className='px'> &gt;</Box>
            
            </Box>
    )
}

export { Experiencia }