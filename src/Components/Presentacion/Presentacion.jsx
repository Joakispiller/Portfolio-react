import { Box } from '@chakra-ui/react';
import React from 'react';
import"./Presentacion.css"

const Presentacion = () => {

    return(

      <Box color={'whiteAlpha.900'} 
      fontSize={{ "base":"0.9em",  md: '1.03em', xl: '1.2em',}}
      fontWeight={{ "base":"100",  md: '100', xl: '400',}}
      ml={{ "base":"3em",  md: '10em', xl: '6em',}}
      mr={{ "base":"3em",  md: '10em', xl: '0em',}}
      mt={{ "base":"2em",  md: '1em', xl: '3em',}}
      className='etc'
      >

        &lt;Desarrolador Full Stack&gt;
        <p>Apasionado por el Frontend </p>
        <p className='descripcion'> Estoy en busqueda de
        nuevas experiencias para poner en practica  mis
        conocimientos y habilidades. Soy una persona creativa, con  rápido aprendizaje
        y gran capacidad de adaptación. Me gustaría trabajar y hacer
        muchos proyectos para poder desempeñarme en lo que me gusta.</p>

      </Box>
    )
}

export { Presentacion }