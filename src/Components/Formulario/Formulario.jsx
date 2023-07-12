import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import"./Formulario.css"
 
    
    

const Formulario= () => {

//   const nombre=document.getElementById("nombre")
//   const email=document.getElementById("email")
//   const btn=document.getElementById("btn")
 
//   function validarFormulario() {
//     let datoNombre= nombre.value
//     let datoEmail= email.value
//     if (datoNombre==="") {
//       alert("Ingrese su nombre")
//        return false
//     }
    
//     if (datoEmail==="") {
//       alert("Ingrese su nombre") 
//        return false
//     }
   
//   }
// btn.addEventListener("click", validarFormulario)

 

   
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
                <input type="name" name='Nombre' id='nombre'
                className='Forms' placeholder='Nombre' maxlength="60" minLength="1"/>

           </Box>

           {/* email */}

           <Box  ml={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
           w={{ "base":"2em",  md: '4.2em', xl: '40.6em',}}
           >
           <input type="email" name='Email' id='email'
             className='Forms' placeholder='Email' maxlength="60"/>
           </Box>

        </Box>
        {/* tema */}
        <Box    mt={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>
        <input type="text" name='Asunto' id='asunto'
        className='Forms' placeholder="Asunto" maxlength="700"/>
        </Box>

        {/* mensjae */}
        <Box mt={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>
          <textarea className='msj' name='Comentarios' id='comentarios'
          cols="30" rows="10" placeholder='Mensaje' maxlength="10000">

          </textarea>


        </Box>
     
   
      </Box>
         <Box >
         <Button colorScheme='teal' variant='outline' id='btn' type='submit'
           color={"#00C296"} fontWeight={350} 
           w={{ "base":"100",  md: '100', xl: '11em',}}
           h={{ "base":"100",  md: '100', xl: '3em',}}
           mt={{ "base":"100",  md: '100', xl: '2.1em',}}
           _hover={{
            bg: '#00C296', color:"Black",  
          }}
           >
              Enviar mensaje
           </Button>
             
          
       
        </Box>

        <input type="hidden" name="_next" value="http://localhost:5173/Portfolio-react/#ContactoID"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        
      </form>
      
    )

}

export { Formulario}
