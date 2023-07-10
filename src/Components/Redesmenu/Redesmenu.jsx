import { Box } from '@chakra-ui/react';
import React from 'react';
import "./Redesmenu.css"
const Redesmenu = () => {
    return(
        <Box >
            <a className='linke' href="https://www.linkedin.com/in/joaqu%C3%ADn-spiller-31937727a/" target="_blank"  > <img className='linki' src="public/imagenes/linkedin.svg" alt="" width={40} /> <p className='linkdin'>Linkedin </p></a>
             
            <a className='git' href= "https://github.com/Joakispiller" target="_blank"  >    <img  src="public/imagenes/github.svg" alt="" width={30}  /> <p className='hub'> GitHub</p></a>
          
        </Box>
    )
}

export { Redesmenu }