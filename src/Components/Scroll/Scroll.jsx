import React from 'react';
import"./Scroll.css"
import { Box } from '@chakra-ui/react';




const Scroll = () => {
    return(
        <Box className="texto-rotado" fontSize={{ "base":"0.6em",  md: '0.5em', xl: '1em',}}
        ml={{ "base":"0em",  md: '0em', xl: '8em',}}
        mr={{ "base":"0em",  md: '0em', xl: '0em',}}
        mt={{ "base":"1em",  md: '3em', xl: '40em',}}
         >
             <p>Desplazarse hacia abajo</p>
        <img src="Flechaa.svg"  className='flechita'/>
        </Box>
       
      

    )
}

export { Scroll }