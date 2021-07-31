import React from 'react';
import { CheckSquare } from 'react-feather';
import { PlusCircle } from 'react-feather';
import './header.css';

export default function Header(props) {


    return (
        <header className="container header">
            <div className="logo">
                <p>To-Do List</p>
                <CheckSquare color="#00008a" size={25} />
            </div>
            <div className="add-icon">
                <button onClick={props.handleModal}><PlusCircle color="#00008a" size={30} /></button>
            </div>
        </header>
    )
}