import { Box } from '@chakra-ui/react';
import React from 'react';
import"./Laburito.css"

const Laburito= () => {
    return(
        
        <Box ml={{ "base":"2em",  md: '4em', xl: '10.2em',}} 
        mb={{ "base":"2em",  md: '2em', xl: '4em',}}
       mr={{ "base":"2em",  md: '2em',}}>
           
            {/* en que trabaje */}
            <Box  fontFamily="Ubuntu" color="#9A5BFF"
            fontSize={{ "base":"1.6em",  md: '2.5em', xl: '2.2em',}}
            >
              <h1>Tienda de ropa online</h1>
            </Box>

           
                {/* linea */} {/* expicacion */}
                <Box className='raya'  color={'whiteAlpha.700'}  fontWeight={100}
                  fontSize={{ "base":"0.9em",  md: '1.5em',}}>
                    < p className='exp'>Atendía llamadas y correos electrónicos de clientes de nuestra tienda. Respondía preguntas sobre productos, procesos de compra y envío. Resolvía problemas y brindaba asistencia para garantizar la satisfacción del cliente. Actualizaba información en el sistema y registro solicitudes de devolución o cambio.  Ademas gestionaba las redes sociales y las publicaciones.</p>

                </Box>
               
               

           
            {/* lenguajes */}
            <Box color={'whiteAlpha.900'} fontWeight={100}
            mt={{ "base":"1em",  md: '0.5em', xl: '0.6em',}}
            fontSize={{ "base":"1em",  md: '1.5em',}}>
                <p>Whatsapp, Instagram</p>
            </Box>
    </Box>
         

            
      
    )
}

export { Laburito }