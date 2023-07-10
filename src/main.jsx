import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./Theme/Color.jsx";
import { Todo } from './Components/Todo/Todo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
   <ChakraProvider theme={theme}>
 
  <Todo/>
   
    </ChakraProvider>
  </React.StrictMode>,
)
