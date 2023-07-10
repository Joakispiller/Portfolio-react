import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const BtnCv = () => {
    return(
        
      <a  href="https://www.linkedin.com/in/joaqu%C3%ADn-spiller-31937727a/" target="_blank"  > 
           <Button colorScheme='purple' variant='outline' 
           color={"#9F5DFF"} fontWeight={350} bg={"#212023"}
           w={{ "base":"100",  md: '100', xl: '10em',}}
           h={{ "base":"100",  md: '100', xl: '3em',}}
           mt={{ "base":"100",  md: '100', xl: '2.3em',}}
           ml={{ "base":"100",  md: '100', xl: '1.8em',}}
           _hover={{
            borderColor:"#151515", bg:"none"
          }}
           >
              Descargar CV
           </Button>
       
         </a>
    )
}

export { BtnCv}