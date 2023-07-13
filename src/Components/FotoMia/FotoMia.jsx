import { Box } from '@chakra-ui/react';
import React from 'react';

const FotoMia = () => {

    return(

        <Box width={{ "base":"10em",  md: '14em', xl: '26em',}}
          border="2px" borderColor='brand.verdoso' borderRadius={3}
          ml={{ "base":"7em",  md: '17em', xl: '22em',}}
          mt={{ "base":"2em",  md: '2em', xl: '10em',}}
          className='joakiPic'
          >
           
            <img src="MiFoto.jpg" alt="" />

            </Box>

    )
}

export { FotoMia }