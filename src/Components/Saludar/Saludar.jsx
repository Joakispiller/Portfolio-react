import { Box } from '@chakra-ui/react';
import React from 'react';
import"./Saludar.css"

const Saludar = () => {
    return(
        <Box className='salud' fontSize={{ "base":"1.9em",  md: '3em', xl: '4.6em',}}
        fontFamily="Ubuntu" ml={{ "base":"0em",  md: '0em', xl: '1.5em',}}
        pt={{ "base":"3em",  md: '2.5em', xl: '1.8em',}}
        >


            <h1 className='hola'> Hola, <br /> Soy Joaquín</h1>
            <h1 className='puntito'>.</h1>
        </Box>
    )
}

export { Saludar }