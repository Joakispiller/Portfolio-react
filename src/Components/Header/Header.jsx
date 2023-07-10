import React from 'react';
import { Box } from "@chakra-ui/react"
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { Redesmenu } from '../Redesmenu/Redesmenu';
import "./Header.css"




const Header = () => {
    
    return(

        <Box  bg="brand.negromenu" color='white' className='Navv' w={60} >
            <Logo/>
            <Navbar/>
            <Redesmenu/>
            
        </Box>
      
             
    
        
            
        
        
    )
}

export { Header }