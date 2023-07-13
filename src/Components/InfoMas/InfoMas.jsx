import { Box } from '@chakra-ui/react';
import React from 'react';
import"./InfoMas.css"

const InfoMas = () => {
    return(
        <>
       <Box color="#00C296" display="flex"
       fontSize={{ "base":"1em",  md: '1em', xl: '2.7em',}}
       ml={{ "base":"1em",  md: '1em', xl: '2.4em',}}
       mt={{ "base":"1em",  md: '1em', xl: '3em',}}
        >
        <h1 >5+</h1>
        <h1 className='hDos'>6+</h1>
       </Box>
       <Box color={'white'} display="flex"
       ml={{ "base":"1em",  md: '1em', xl: '6.5em',}}
       >
        <p>proyectos completados </p>
        <p className='pDos'>meses de experiencia</p>
       </Box>
        </>
    )
}

export { InfoMas }