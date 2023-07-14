import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const FraseProyecto
 = () => {

    return(
        <Box display={"flex"} color={'#00C296'} fontFamily="Ubuntu" 
        fontSize={{ "base":"2em",  md: '3.5em', xl: '2.5em',}}
        id='ProyectosID' className='Project'  mt={{ "base":"2em",  md: '2em', xl: '0em',}}
        mb={{ "base":"1em",  md: '0.5em', xl: '0em',}}
        >

           <Box className='pro' >&lt;</Box>
                <Box color={'white'} >
            <p className='proo' color='white'>Proyectos</p>
            </Box>

            <Box className='prooo'> &gt;</Box>
            
            </Box>
    
    )
}

export { FraseProyecto
 }