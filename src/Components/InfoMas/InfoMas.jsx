import { Box } from '@chakra-ui/react';
import React from 'react';
import"./InfoMas.css"

const InfoMas = () => {
    return(
        <>
       <Box color="#00C296" display="flex"
       fontSize={{ "base":"1.8em",  md: '2.4em', xl: '2.7em',}}
       ml={{ "base":"3em",  md: '5Em', xl: '2.4em',}}
       mt={{ "base":"0.7em",  md: '1.5em', xl: '3em',}}
        >
        <h1 >5+</h1>
        <h1 className='hDos'>6+</h1>
       </Box>
       <Box color={'white'} display="flex" 
       ml={{ "base":"4em",  md: '7em', xl: '6.5em',}}
       fontSize={{ "base":"1em",  md: '1.1em', }}
       >
        <p>proyectos completados </p>
        <p className='pDos'>meses de experiencia</p>
       </Box>
        </>
    )
}

export { InfoMas }