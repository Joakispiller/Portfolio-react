import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return(
        <Box fontSize={20} mt={80} ml={16}
        
        >

    <ul className='ul'>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#IDProyectos"> <p>Proyectos</p></a>
        <div className="linea"></div>
        </li>

       

        <li className='divi'>
        <Divider/>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#IDHabilidad"><p>Habilidades</p></a>
        <div className="linea"></div>
        </li>

        <li className='divi'>
        <Divider color='grey'/>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#IDExperiencia"><p>Experiencia</p></a>
        <div className="linea"></div>
        </li>


    
        <li className='divi'>
        <Divider color='grey'/>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#IDContacto"><p>Contactáme</p></a>
        <div className="linea"></div>
        </li>

       
    </ul>
    
       </Box>
    )
}

export { Navbar }