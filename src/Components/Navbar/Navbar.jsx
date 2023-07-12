import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return(
        <Box fontSize={20} mt={80} ml={16}
        
        >

    <ul className='ul'>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#ProyectosID"> <p>Proyectos</p></a>
        <div class="linea"></div>
        </li>

       

        <li className='divi'>
        <Divider/>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#HabilidadID"><p>Habilidades</p></a>
        <div class="linea"></div>
        </li>

        <li className='divi'>
        <Divider color='grey'/>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#ExperienciaID"><p>Experiencia</p></a>
        <div class="linea"></div>
        </li>


    
        <li className='divi'>
        <Divider color='grey'/>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#ContactoID"><p>Contactáme</p></a>
        <div class="linea"></div>
        </li>

       
    </ul>
    
       </Box>
    )
}

export { Navbar }