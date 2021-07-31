import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Done from './components/Done';
import Modal from './components/Modal';
import './App.css';

export default function App() {

    const [modalOpened, setModalOpened] = React.useState(false);

    const [tasks, setTasks] = React.useState([
        {id: 0, task: "Fazer Tarefa", done: false},
        {id: 1, task: "Fazer Outra Tarefa", done: true},
        {id: 2, task: "Fazer Mais uma Tarefa", done: false},
        {id: 3, task: "Fazer Mais uma Outra Tarefa", done: true}
    ]);

    function handleModal() {
        setModalOpened(!modalOpened);
    }

    return (
        <>
            <Header handleModal={handleModal} modalOpened={modalOpened} />
            <main className="container">
                <Todo tasks={tasks} />
                <Done tasks={tasks} />
            </main>
            <Modal handleModal={handleModal} modalOpened={modalOpened} />
        </>
    )
}