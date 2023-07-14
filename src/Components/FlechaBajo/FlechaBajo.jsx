import { Box } from '@chakra-ui/react';
import React from 'react';

const FelchaBajo = () => {
    return(
       <Box  w={{ "base":"2.2em",  md: '3.4em',}} className='boxarr' 
       mt={{ "base":"0.5em",  md: '3em',}}
       >
        <img src="Doble.svg" alt=""  className='arrowPic'/>
       </Box>
    )
}

export { FelchaBajo }