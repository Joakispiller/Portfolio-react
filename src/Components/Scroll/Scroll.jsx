import React from 'react';
import"./Scroll.css"
import { Box } from '@chakra-ui/react';




const Scroll = () => {
    return(
        <Box className="texto-rotado" fontSize={{ "base":"1em",  md: '0.5em', xl: '1em',}}
        ml={{ "base":"1em",  md: '5em', xl: '8em',}}
        mr={{ "base":"1em",  md: '-5em', xl: '0em',}}
        mt={{ "base":"1em",  md: '32em', xl: '40em',}}
         >
             <p>Desplazarse hacia abajo</p>
        <img src="Flechaa.svg"  className='flechita'/>
        </Box>
       
      

    )
}

export { Scroll }