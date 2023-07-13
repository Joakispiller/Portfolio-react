import { Box } from '@chakra-ui/react';
import React from 'react';
import"./Laburos.css"

const Laburos= () => {
    return(
        
        <Box ml={{ "base":"2em",  md: '4.2em', xl: '10.2em',}}
        mb={{ "base":"2em",  md: '4.2em', xl: '4em',}} >
            
           
            {/* en que trabaje */}
            <Box  fontFamily="Ubuntu" color="#9A5BFF"
            fontSize={{ "base":"2em",  md: '4.2em', xl: '2.2em',}}
            >
              <h1>Revista digital</h1>
            </Box>

           
                {/* linea */} {/* expicacion */}
                <Box className='raya'  color={'whiteAlpha.700'}  fontWeight={100}
                 >
                    < p className='exp'>Lideré el desarrollo del código frontend, implementando los diseños de interfaz de usuario  que permita a los lectores disfrutar de un contenido atractivo y fácil de navegar utilizando HTML, CSS y JavaScript. Hice un diseño responsivo para poder visualizarla desde distintos dispositivos. También trabajé en la implementación de funciones interactivas y dinámicas, como carruseles de imágenes, desplazamiento suave, formularios de suscripción y comentarios, integración de redes sociales y herramientas de análisis. Estas características permiten a los lectores participar activamente y compartir el contenido con facilidad. Me encargué de la comunicación remota con otros equipos de desarrollo, estimé y prioricé tareas, y brindé entrenamiento a nuevos desarrolladores internos.</p>

                </Box>
               
               

           
            {/* lenguajes */}
            <Box color={'whiteAlpha.900'} fontWeight={100}
            mt={{ "base":"2em",  md: '4.2em', xl: '0.6em',}}>
                <p>Html, Css, Javascript, React</p>
            </Box>
    </Box>
         

            
      
    )
}

export { Laburos }