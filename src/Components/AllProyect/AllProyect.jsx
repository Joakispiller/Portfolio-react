import { Box } from '@chakra-ui/react';
import React from 'react';
import"./AllProyect.css"

const AllProyect
 = () => {

    return(
      

       
        <Box display="flex" color={'white'}  fontSize={{ "base":"0.8em",  md: '1em',}}
        mt={{ "base":"2em",  md: '3em', xl: '35.5em',}}
        fontWeight={100} 
        ml={{ "base":"2.5em",  md: '3em', xl: '0em',}} mr={{ "base":"1em",  md: '1em',xl: '0em',}}
        >
            <p>Podes ver todos los proyectos y repositorios  en mi página personal de <a className='aaa' href="https://github.com/Joakispiller" target='blank' > GitHub.</a> </p>
            
        </Box>
       
    )
}

export { AllProyect
 }