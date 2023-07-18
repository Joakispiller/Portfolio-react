import"./BtnContacto.css"
import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const BtnContacto = () => {
    return(
        <>
       
         <a className="btnUno" href="#ContactID">
           <Button  colorScheme='teal' variant='outline' 
           color={"#00C296"} fontWeight={350} bg={"#212023"}
           w={{ "base":"8em",  md: '12em', xl: '10em',}}
           h={{ "base":"2.5em",  md: '4em', xl: '3em',}}
           ml={{ "base":"4em",  md: '7em', xl: '7em',}}
           mt={{ "base":"3em",  md: '9em', xl: '2.3em',}}
           fontSize={{ "base":"0.8em",  md: '1em', xl: '1em',}} 
           _hover={{
            bg: '#00C296', color:"Black",
          }}
           >
              Contactáme
           </Button>
       </a>



<a className="btnDos" href="#IDContacto">
<Button  colorScheme='teal' variant='outline' 
color={"#00C296"} fontWeight={350} bg={"#212023"}
w={{ "base":"8em",  md: '12em', xl: '10em',}}
h={{ "base":"2.5em",  md: '4em', xl: '3em',}}
ml={{ "base":"4em",  md: '7em', xl: '7em',}}
mt={{ "base":"3em",  md: '9em', xl: '2.3em',}}
fontSize={{ "base":"0.8em",  md: '1em', xl: '1em',}} 
_hover={{
 bg: '#00C296', color:"Black",
}}
>
   Contactáme
</Button>
</a>
        </>  
    )
}

export { BtnContacto }