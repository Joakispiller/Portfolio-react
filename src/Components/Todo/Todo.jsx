import React from 'react';
import { Header } from '../Header/Header';
import "./Todo.css"
import { Body } from '../Body/Body';
import { MenuResp } from '../MenuResp/MenuResp';
import { BodyResp } from '../BodyResp/BodyResp';

const Todo = () => {
    return(
        <div >



<div className='Meen'>
    <MenuResp/>
    <BodyResp/>
</div>


        <div className='Todoo'>
           <Header/>
          <Body/>
        </div>
        </div>
    )
}

export { Todo }