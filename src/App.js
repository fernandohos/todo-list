import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Done from './components/Done';
import Modal from './components/Modal';
import './App.css';

export default function App() {

    const [modalOpened, setModalOpened] = React.useState(false);

    function handleModal() {
        setModalOpened(!modalOpened)
    }

    return (
        <>
            <Header handleModal={handleModal} modalOpened={modalOpened} />
            <main className="container">
                <Todo />
                <Done />
            </main>
            <Modal handleModal={handleModal} modalOpened={modalOpened} />
        </>
    )
}