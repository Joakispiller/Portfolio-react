import"./BtnContacto"
import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const BtnContacto = () => {
    return(
        
         <a href="#ContactoID">
           <Button colorScheme='teal' variant='outline' 
           color={"#00C296"} fontWeight={350} bg={"#212023"}
           w={{ "base":"8em",  md: '9em', xl: '10em',}}
           h={{ "base":"2.5em",  md: '3em', xl: '3em',}}
           ml={{ "base":"4em",  md: '14em', xl: '7em',}}
           mt={{ "base":"3em",  md: '3em', xl: '2.3em',}}
           fontSize={{ "base":"0.8em",  md: '0.9em', xl: '1em',}} 
           _hover={{
            bg: '#00C296', color:"Black",
          }}
           >
              Contactáme
           </Button>
       </a>
         
    )
}

export { BtnContacto }