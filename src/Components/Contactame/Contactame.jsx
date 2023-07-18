import { Box } from '@chakra-ui/react';
import React from 'react';

const Contactame = () => {
    return(
        
           <Box display={"flex"} color={'#00C296'} fontFamily="Ubuntu" 
        fontSize={{ "base":"2em",  md: '3.5em', xl: '2.5em',}} 
        mb={{ "base":"1em",  md: '1em', xl: '0.6em',}}
        mt={{ "base":"3em",  md: '4.2em', }}
       
        >

           <Box  id='IDContact' className='inp'>&lt;</Box>
                <Box color={'white'} >
            <p color='white'>Contactáme</p>
            </Box>

            <Box className='forr'> &gt;</Box>
            
            </Box> 
        
    )
}

export { Contactame }