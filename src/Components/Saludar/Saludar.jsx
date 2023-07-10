import { Box } from '@chakra-ui/react';
import React from 'react';
import"./Saludar.css"

const Saludar = () => {
    return(
        <Box className='salud' fontSize={{ "base":"2em",  md: '4.2em', xl: '4.6em',}}
        fontFamily="Ubuntu" ml={{ "base":"1em",  md: '1em', xl: '1.5em',}}
        mt={{ "base":"1em",  md: '1em', xl: '1.8em',}}
        >


            <h1 className='hola'> Hola, <br /> Soy Joaquín</h1>
            <h1 className='puntito'>.</h1>
        </Box>
    )
}

export { Saludar }