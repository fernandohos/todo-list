import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Done from './components/Done';
import Modal from './components/Modal';
import './App.css';

export default function App() {


    
    return (
        <>
            <Header />
            <main className="container">
                <Todo />
                <Done />
            </main>
            <Modal />
        </>
    )
}