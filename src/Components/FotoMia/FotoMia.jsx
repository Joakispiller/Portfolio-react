import { Box } from '@chakra-ui/react';
import React from 'react';
import"./FotoMia.css"

const FotoMia = () => {

    return(

        <Box width={{ "base":"10em",  md: '60em', xl: '26em',}}
          border="2px" borderColor='brand.verdoso' borderRadius={3}
          ml={{  md: '0em', xl: '22em',}} mr={{  md: '2em', }}
          mt={{ "base":"2em",  md: '13em', xl: '10em',}}
          className='joakiPic'
          >
           
            <img src="MiFoto.jpg" alt="" className='fotin' />

            </Box>

    )
}

export { FotoMia }