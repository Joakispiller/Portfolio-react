import { Box } from '@chakra-ui/react';
import React from 'react';
import"./IconSkills.css"

const IconSkill
 = () => {
    return(
      <Box className='boxIcons' mr={{ "base":"2em",  md: '4.2em', xl: '15em',}} >

      
       <Box className='hijos-icono'
       bg={"#ff7433"} display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >

         <Box  mr={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}>
            <img src="Html.svg" alt="" width={33}/>
         </Box>

         <Box color='white'   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>#html5</p>
         </Box >
        
       </Box>
{/* css*/}

<Box className='hijos-icono'
bg={"#008ED1"} display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >

         <Box  mr={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}>
            <img src="iconcss.svg"  alt="" width={33}/>
         </Box>

         <Box color='white'   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>#css</p>
         </Box >
        
       </Box>
       {/* js
        */}
       
       <Box className='hijos-icono'
       bg={"#292929"} display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >

         <Box  mr={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}>
            <img src="iconjs.svg"  alt="" width={33}/>
         </Box>

         <Box color='#FFCA28'   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>#javascript</p>
         </Box >
        </Box> 
        
         {/* git */}
         <Box className='hijos-icono'
         bg={"white"} display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >


         <Box color='black'   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>#git</p>
         </Box >
        
       </Box>
       {/* react */}
       
       <Box className='hijos-icono'
       bg={"linear-gradient(to left, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))"}
        display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >

         <Box  mr={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}>
            <img src="iconreact.svg"  alt="" width={33}/>
         </Box>

         <Box color='#00D8FF'   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>#react</p>
         </Box >
     
       </Box>

       
       {/* vite */}
       <Box className='hijos-icono'
       bg={"#FFC018"} display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >

         <Box  mr={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}>
            <img src="iconvite.svg"  alt="" width={33}/>
         </Box>

         <Box color="#A753FE"   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>#vite</p>
         </Box >
        
       </Box>

       {/* boostrap */}
       <Box className='hijos-icono'
       bg={"#EBE1FC"} display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >

         <Box  mr={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}>
            <img src="boostrap.svg"  alt="" width={33}/>
         </Box>

         <Box color='##7010F5'   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>#boostrap</p>
         </Box >
        
       </Box>
       

       {/*  chakra*/}
       <Box className='hijos-icono'
       bg={"#4DB6AC"} display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >

         <Box  mr={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}>
            <img src="chakra.svg"  alt="" width={33}/>
         </Box>

         <Box color='white'   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>chakra ui</p>
         </Box >
        
       </Box>   

         { /*ejemplo  */}
         <Box className='hijos-icono'
         bg={"white"} display={"flex"} borderRadius={3}
       mr={{ "base":"2em",  md: '4.2em', xl: '1.1em',}}
       paddingX={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}
       paddingY={{ "base":"2em",  md: '4.2em', xl: '0.5em',}}
        >

       

         <Box color='##7010F5'   fontSize={{ "base":"2em",  md: '4.2em', xl: '1.3em',}}>   
            <p>#full-stack</p>
         </Box >
        
       </Box>
       
       </Box>
    )
}

export { IconSkill
 }