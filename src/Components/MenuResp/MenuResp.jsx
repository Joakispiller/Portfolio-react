import { Box } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../Logo/Logo';
import"./MenuResp.css"
import {  HamburgerIcon, } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, IconButton} from '@chakra-ui/react'
import { color } from 'framer-motion';


const MenuResp = () => {
    
    return(
        
        <Box className='RespNav' display="flex" justifyContent="space-between" bg="#111111"
        h={{ "base":"4em",  md: '6em',}} position="fixed"  zIndex={1} w="100vw" 
        mt={{ "base":"0em",  md: '0em',}}
        >
            <Box  w={{ "base":"4em",  md: '6em',}}  ml={{ "base":"0.5em",  md: '1em',}}
            mt={{ "base":"0.55em",  md: '1em',}}  >
                  <img src="Loguito.png" alt="" />
            </Box>
          
    

<Box >




<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon className='hamburgesa'/>}
    variant='outline'
    // mis ediciones
    mr={{ "base":"1em",  md: '1em',}} 
    w={{ "base":"2.5em",  md: '3.5em',}} 
    h={{ "base":"2em",  md: '3em',}} 
    mt={{ "base":"1em",  md: '1.5em',}} 
    color="#9A5BFF" borderColor="#9A5BFF"

    _hover={{ bg: "rgb(217, 197, 248)" }}
    _expanded={{ bg: "rgb(217, 197, 248)" }}
   
  />

  <MenuList
  color="#9A5BFF"
  bg="#151515"
  borderColor="#151515"
  w={{ "base":"5em",  md: '14em',}}  
  >
    
 <a   href="#ProyectosID"> 
    <MenuItem bg="#212023" mt={{ "base":"-0.5em",  md: '-0.5em',}} 
     h={{ "base":"2.5em",  md: '3em',}}   _hover={{ bg: "#151515" }}>
    <p>Proyectos</p>
    </MenuItem>
</a>

 <a  href="#HabilidadID">
    <MenuItem  bg="#212023" mt={{ "base":"0.1em",  md: '0.05em',}}
     h={{ "base":"2.5em",  md: '3em',}}  _hover={{ bg: "#151515" }}>
  <p>Habilidades</p>
    </MenuItem>
</a>

 <a  href="#ExperienciaID">
    <MenuItem  bg="#212023" mt={{ "base":"0.1em",  md: '0.1em',}} 
     h={{ "base":"2.5em",  md: '3em',}}  _hover={{ bg: "#151515" }}>
   <p>Experiencia</p>
    </MenuItem>
</a>

 <a  href="#ContactoID">
    <MenuItem   bg="#212023" mt={{ "base":"0.1em",  md: '0.05em',}} 
    mb={{ "base":"-0.5em",  md: '-0.5em',}}
    h={{ "base":"2.5em",  md: '3em',}} _hover={{ bg: "#151515" }} >
   <p>Contactáme</p>
    </MenuItem>
</a>

<a   href="https://www.linkedin.com/in/joaqu%C3%ADn-spiller-31937727a/" target='blank'> 
    <MenuItem bg="#212023" mt={{ "base":"1em",  md: '1em',}} 
     h={{ "base":"2.5em",  md: '3em',}}   _hover={{ bg: "#151515" }} color="white"
     justifyContent="space-between">

   <p>Linkedin</p> <img src="Linkedin.svg" alt=""  width="28em" className='logink'/>
    </MenuItem>
</a>

<a   href="https://github.com/Joakispiller" target='blank'> 
    <MenuItem bg="#212023" mt={{ "base":"-0.5em",  md: '-0.5em',}} 
     h={{ "base":"2.5em",  md: '3em',}}   _hover={{ bg: "#151515" }}color="white"
     justifyContent="space-between">
      
    <p>Github</p> <img src="Github.svg" alt=""  width="20em" className='logit' />
    </MenuItem>
</a>

  </MenuList>

</Menu>

      </Box>     
            

        </Box>
    )
}

export { MenuResp }