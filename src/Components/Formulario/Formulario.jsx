import { Box } from '@chakra-ui/react';
import React from 'react';
import"./Formulario.css"
 
    
    


const Formulario= () => {
    
    return(

        // todoo

      <Box    mr={{ "base":"2em",  md: '4.2em', xl: '15em',}} 
      mt={{ "base":"2em",  md: '4.2em', xl: '2.3em',}}
      >
{/* nameemai */}
        <Box display="flex">
{/* nombre */}
            <Box  w={{ "base":"2em",  md: '4.2em', xl: '41em',}}>
                <input type="name" className='Forms-Name' placeholder='Nombre' maxlength="60"/>

           </Box>

           {/* email */}

           <Box  ml={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
           w={{ "base":"2em",  md: '4.2em', xl: '40.6em',}}
           >
           <input type="name" className='Forms-Email' placeholder='Email' maxlength="60"/>
           </Box>

        </Box>
        {/* tema */}
        <Box    mt={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>
        <input type="name" className='Forms-Tema' placeholder="Tema" maxlength="700"/>
        </Box>

        {/* mensjae */}
        <Box mt={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>
          <textarea className='msj' cols="30" rows="10" placeholder='Mensaje' maxlength="10000">

          </textarea>

        </Box>
       



      </Box>
    )
}

export { Formulario}

