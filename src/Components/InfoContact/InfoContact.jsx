import { Box } from '@chakra-ui/react';
import { wrap } from 'framer-motion';
import React from 'react';

const InfoContact = () => {
    return(
        <Box fontWeight={100} color="#dddcdc" flexWrap={wrap}
        fontSize={{ "base":"1em",  md: '1em', xl: '1.1em',}}
        >
            <p>
             Si tenes una petición o pregunta, no dudes en utilizar el formulario.
            </p>
        </Box>
    )
}

export { InfoContact }