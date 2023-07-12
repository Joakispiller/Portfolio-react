import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import"./Formulario.css"
 
    
    


const Formulario= () => {
    
    return(

        // todoo
        <form action="https://formsubmit.co/joakispiller22@gmail.com" method="POST" >

      <Box    mr={{ "base":"2em",  md: '4.2em', xl: '15em',}} 
      mt={{ "base":"2em",  md: '4.2em', xl: '2.3em',}}
      >
        
{/* nameemai */}
        <Box display="flex">
{/* nombre */}
            <Box  w={{ "base":"2em",  md: '4.2em', xl: '41em',}}>
                <input type="name" name='Nombre'
                className='Forms' placeholder='Nombre' maxlength="60"/>

           </Box>

           {/* email */}

           <Box  ml={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
           w={{ "base":"2em",  md: '4.2em', xl: '40.6em',}}
           >
           <input type="email" name='Email'
             className='Forms' placeholder='Email' maxlength="60"/>
           </Box>

        </Box>
        {/* tema */}
        <Box    mt={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>
        <input type="text" name='Asunto'
        className='Forms' placeholder="Asunto" maxlength="700"/>
        </Box>

        {/* mensjae */}
        <Box mt={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>
          <textarea className='msj' name='Comentarios'
          cols="30" rows="10" placeholder='Mensaje' maxlength="10000">

          </textarea>


        </Box>
     
   
      </Box>
         <Box >
         <Button colorScheme='teal' variant='outline' 
           color={"#00C296"} fontWeight={350} 
           w={{ "base":"100",  md: '100', xl: '11em',}}
           h={{ "base":"100",  md: '100', xl: '3em',}}
           mt={{ "base":"100",  md: '100', xl: '2.1em',}}
           _hover={{
            bg: '#00C296', color:"Black",  
          }}
           >
               <input className='btnn' type="submit" value="Enviar mensaje" />
           </Button>
             
          
       
        </Box>

        <input type="hidden" name="_next" value="https://joakispiller.github.io/Portfolio-react/"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        
      </form>
      
    )
}

export { Formulario}

