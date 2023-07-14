import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const BtnCv = () => {
    return(
        
      <a  href="https://www.linkedin.com/in/joaqu%C3%ADn-spiller-31937727a/" target="_blank"  > 
           <Button colorScheme='purple' variant='outline' 
           color={"#9F5DFF"} fontWeight={350} bg={"#212023"}
           w={{ "base":"8em",  md: '12em', xl: '10em',}}
           h={{ "base":"2.5em",  md: '4em', xl: '3em',}}
           mt={{ "base":"3em",  md: '9em', xl: '2.3em',}}
           ml={{ "base":"7em",  md: '9em', xl: '1.8em',}} 
           fontSize={{ "base":"0.8em",  md: '1em', xl: '1em',}} 
           _hover={{
            borderColor:"#151515", bg:"none"
          }}
           >
             <p>Descargar CV </p> 
           </Button>
       
         </a>
    )
}

export { BtnCv}