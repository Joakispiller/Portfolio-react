import React from 'react';
import"./Scroll.css"
import { Box } from '@chakra-ui/react';




const Scroll = () => {
    return(
        <Box className="texto-rotado" fontSize={{ "base":"1em",  md: '1em', xl: '1em',}}
        ml={{ "base":"1em",  md: '1em', xl: '8em',}}
        mt={{ "base":"1em",  md: '1em', xl: '40em',}}
         >
             <p>Desplazarse hacia abajo</p>
        <img src="Flechaa.svg"  className='flechita'/>
        </Box>
       
      

    )
}

export { Scroll }