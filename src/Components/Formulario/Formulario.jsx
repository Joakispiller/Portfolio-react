import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import"./Formulario.css"

    
    

const Formulario= () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState(''); 
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
      setError('Por favor, completa todos los campos.');
    } else {
    
      
      setError('');
    }
  }
 

   
    return(

        // todoo 
        <form action="https://formsubmit.co/joakispiller22@gmail.com" method="POST" className='forma'  onSubmit={handleSubmit} >

      <Box    mr={{ "base":"2em",  md: '4em', xl: '15em',}} 
      mt={{ "base":"2em",  md: '4em', xl: '2.3em',}}
      >
        
{/* nameemai */}
        <Box  className='flexNM'>
{/* nombre */}
            <Box  w={{ "base":"20em",  md: '40em', xl: '41em',}}
            ml={{ "base":"2em",  md: '4em', xl: '0em',}}
            mb={{ "base":"2em",  md: '2em', xl: '0em',}}>
                <input type="name"
                className='Forms' placeholder='Nombre'minLength="1"
               name='Nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}/>

           </Box>

           {/* email */}

           <Box  ml={{ "base":"2em",  md: '4em', xl: '1.1em',}}
           w={{ "base":"20em",  md: '40em', xl: '40.6em',}}
           >
           <input type="email"
             className='Forms' placeholder='Email' 
              name='Email' 
             value={email}
             onChange={(e) => setEmail(e.target.value)}/>
           </Box>

        </Box>
        {/* tema */}
        <Box    mt={{ "base":"2em",  md: '2em', xl: '1.3em',}}
         ml={{ "base":"2em",  md: '4em', xl: '0em',}}>
        <input type="text" name='Asunto' 
        className='Forms' placeholder="Asunto" 
        
        value={asunto}
        onChange={(e) => setAsunto(e.target.value)}/>
        </Box>

        {/* mensjae */}
        <Box mt={{ "base":"2em",  md: '2em', xl: '1.3em',}}
         ml={{ "base":"2em",  md: '4em', xl: '0em',}}>
          <textarea className='msj' name='Comentarios'
          cols="30" rows="10" placeholder='Mensaje' 


          value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}>

          </textarea>


        </Box>
        {error && <p style={{ color: 'red' }}>{error}</p>}
   
      </Box>
         <Box >
         <Button colorScheme='teal' variant='outline' id='btn' type='submit'
           color={"#00C296"} fontWeight={350} 
           w={{ "base":"11em",  md: '14em', xl: '11em',}}
           h={{ "base":"2.5em",  md: '3.5em', xl: '3em',}}
           mt={{ "base":"2em",  md: '2.5em', xl: '2.1em',}}
           mb={{ "base":"6em",  md: '6em', xl: '0em',}}
           fontSize={{ "base":"0.9em",  md: '1.1em', xl: '1em',}}
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
