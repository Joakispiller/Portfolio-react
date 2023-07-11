import { Box,Button } from '@chakra-ui/react';
import React from 'react';

const BtnEnviar = () => {
    return(
        
             <Button colorScheme='teal' variant='outline' 
           color={"#00C296"} fontWeight={350} 
           w={{ "base":"100",  md: '100', xl: '11em',}}
           h={{ "base":"100",  md: '100', xl: '3em',}}
           mt={{ "base":"100",  md: '100', xl: '2.1em',}}
           _hover={{
            bg: '#00C296', color:"Black",  
          }}
           >
              Enviar Mensaje
           </Button>
       
            
        
    )
}

export { BtnEnviar }