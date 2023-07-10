import { Box } from '@chakra-ui/react';
import React from 'react';

const FotoMia = () => {

    return(

        <Box width={{ "base":"1em",  md: '1em', xl: '26em',}}
          border="2px" borderColor='brand.verdoso' borderRadius={3}
          ml={{ "base":"1em",  md: '1em', xl: '22em',}}
          mt={{ "base":"1em",  md: '1em', xl: '10em',}}
          >
           
            <img src="MiFoto.jpg" alt="" />

            </Box>

    )
}

export { FotoMia }