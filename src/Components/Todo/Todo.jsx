import React from 'react';
import { Header } from '../Header/Header';
import "./Todo.css"
import { Body } from '../Body/Body';

const Todo = () => {
    return(
        <div className='Todoo'>
           <Header/>
          <Body/>
        </div>
    )
}

export { Todo }