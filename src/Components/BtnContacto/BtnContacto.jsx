import"./BtnContacto"
import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const BtnContacto = () => {
    return(
        
         
           <Button colorScheme='teal' variant='outline' 
           color={"#00C296"} fontWeight={350} bg={"#212023"}
           w={{ "base":"100",  md: '100', xl: '10em',}}
           h={{ "base":"100",  md: '100', xl: '3em',}}
           ml={{ "base":"100",  md: '100', xl: '7em',}}
           mt={{ "base":"100",  md: '100', xl: '2.3em',}}
           _hover={{
            bg: '#00C296', color:"Black",
          }}
           >
              Contactáme
           </Button>
       
         
    )
}

export { BtnContacto }