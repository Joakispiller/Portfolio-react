import { Box } from '@chakra-ui/react';
import React from 'react';

const Proyectos
 = () => {

    return(
<>
        {/*  card  */}
        <Box bg={"#212023"}  borderRadius={5}
        pl={{ "base":"2em",  md: '4.2em', xl: '3em',} }
        pr={{ "base":"2em",  md: '4.2em', xl: '3em',} }
        pt={{ "base":"2em",  md: '4.2em', xl: '1em',} }
        pb={{ "base":"2em",  md: '4.2em', xl: '1em',} }
        ml={{ "base":"2em",  md: '4.2em', xl: '40em',} }
        mb={{ "base":"2em",  md: '4.2em', xl: '1em',} }
        >

            {/* titulo */}
            <Box color={'whiteAlpha.900'} 
            fontSize={{ "base":"2em",  md: '4.2em', xl: '1.7em',} }
            mb={{ "base":"2em",  md: '4.2em', xl: '0.8em',} }>
             <h2>Landing page</h2>
            </Box>
            {/* texto */}
            {/* <Box color={'whiteAlpha.800'} fontWeight={100}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi dolores itaque adipisci error. Repellat nesciunt, id quos quidem veniam fugit. Et cupiditate libero qui temporibus. Suscipit nihil harum qui.</p>
            </Box> */}
            <Box w={200}>
                <img src="Tp1.png" alt="" />
            </Box>
            {/* ambas */}
            <Box display={"flex"} mt={{ "base":"2em",  md: '4.2em', xl: '1em',} }>
                {/* subtextos */}
                <Box color={'whiteAlpha.900'}>
                   <p> Html, Css</p>

                </Box >
                {/* svg */}
                <Box width="1.5em" ml={{ "base":"2em",  md: '4.2em', xl: '13em',} }
                > 
                    <a href="https://joakispiller.github.io/trabajopractico1/" target='blank'>
                        <img src="Urlink.svg" alt="url"/>
                        
                    </a>
                    
                    
                    
                </Box>
            </Box>

        </Box>
      {/*    segundo cosito */}
        <Box bg={"#212023"}  borderRadius={5}
        pl={{ "base":"2em",  md: '4.2em', xl: '3em',} }
        pr={{ "base":"2em",  md: '4.2em', xl: '3em',} }
        pt={{ "base":"2em",  md: '4.2em', xl: '1em',} }
        pb={{ "base":"2em",  md: '4.2em', xl: '1em',} }
        ml={{ "base":"2em",  md: '4.2em', xl: '40em',} }
        mb={{ "base":"2em",  md: '4.2em', xl: '1em',} }
        >

            {/* titulo */}
            <Box color={'whiteAlpha.900'} 
            fontSize={{ "base":"2em",  md: '4.2em', xl: '1.7em',} }
            mb={{ "base":"2em",  md: '4.2em', xl: '0.8em',} }>
             <h2>Landing page</h2>
            </Box>
            {/* texto */}
            {/* <Box color={'whiteAlpha.800'} fontWeight={100}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi dolores itaque adipisci error. Repellat nesciunt, id quos quidem veniam fugit. Et cupiditate libero qui temporibus. Suscipit nihil harum qui.</p>
            </Box> */}
            <Box w={200} >
                <img src="shop.png" alt="" />
            </Box>
            {/* ambas */}
            <Box display={"flex"} mt={{ "base":"2em",  md: '4.2em', xl: '1em',} }>
                {/* subtextos */}
                <Box color={'whiteAlpha.900'}>
                   <p> Html, Css</p>

                </Box >
                {/* svg */}
                <Box width="1.5em" ml={{ "base":"2em",  md: '4.2em', xl: '13em',} }>
                    <a href="https://joakispiller.github.io/tareaivyre/" target='blank'>
                        <img src="Urlink.svg" alt="url"/>
                    </a>
                    
                    
                </Box>
            </Box>

        </Box>
        {/* tercer cosito  */}
        <Box bg={"#212023"}  borderRadius={5}
        pl={{ "base":"2em",  md: '4.2em', xl: '3em',} }
        pr={{ "base":"2em",  md: '4.2em', xl: '3em',} }
        pt={{ "base":"2em",  md: '4.2em', xl: '1em',} }
        pb={{ "base":"2em",  md: '4.2em', xl: '1em',} }
        ml={{ "base":"2em",  md: '4.2em', xl: '40em',} }
        >

            {/* titulo */}
            <Box color={'whiteAlpha.900'} 
            fontSize={{ "base":"2em",  md: '4.2em', xl: '1.7em',} }
            mb={{ "base":"2em",  md: '4.2em', xl: '0.8em',} }>
             <h2>Landing page</h2>
            </Box>
            {/* texto */}
            {/* <Box color={'whiteAlpha.800'} fontWeight={100}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi dolores itaque adipisci error. Repellat nesciunt, id quos quidem veniam fugit. Et cupiditate libero qui temporibus. Suscipit nihil harum qui.</p>
            </Box> */}
            <Box w={200}>
                <img src="Casas.png" alt="" />
            </Box>
            {/* ambas */}
            <Box display={"flex"} mt={{ "base":"2em",  md: '4.2em', xl: '1em',} }>
                {/* subtextos */}
                <Box color={'whiteAlpha.900'}>
                   <p> Html, Css</p>

                </Box >
                {/* svg */}
                <Box width="1.5em" ml={{ "base":"2em",  md: '4.2em', xl: '13em',} }>
                    <a href="https://joakispiller.github.io/casastrabajo/" target='blank'>
                        <img src="Urlink.svg" alt="url"/>
                    </a>
                    
                    
                </Box>
            </Box>

        </Box>
    </>
        )
}

export {Proyectos
 }