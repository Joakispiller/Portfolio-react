import { Box } from '@chakra-ui/react';
import React from 'react';
import"./AllProyect.css"

const AllProyect
 = () => {

    return(
      

       
        <Box display="flex" color={'white'}
        mt={{ "base":"2em",  md: '4.2em', xl: '40em',}}
        fontWeight={100}
        >
            <p>Podes ver todos los proyectos y repositorios <br /> en mi página personal de <a className='aaa' href="https://github.com/Joakispiller" target='blank' > GitHub.</a> </p>
            
        </Box>
       
    )
}

export { AllProyect
 }