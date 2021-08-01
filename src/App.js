import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Done from './components/Done';
import Modal from './components/Modal';
import './App.css';

export default function App() {

    const [modalOpened, setModalOpened] = React.useState(false);

    const [tasks, setTasks] = React.useState([]);
        // {id: 0, task: "Fazer Tarefa", done: false},
        // {id: 1, task: "Fazer Outra Tarefa", done: true},
        // {id: 2, task: "Fazer Mais uma Tarefa", done: false},
        // {id: 3, task: "Fazer Mais uma Outra Tarefa", done: true}

    React.useEffect(()=> {
        let storagedTasks = localStorage.getItem("tasks");

        if(storagedTasks) {
        setTasks(JSON.parse(storagedTasks));
        }
        
    },[]);

    React.useEffect(()=> {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);

    function handleModal() {
        setModalOpened(!modalOpened);
    }

    function handleDoneTask(taskId) {
        const newTasks = tasks.map(task => {
            if(task.id === taskId) {
                task.done = !task.done;
                console.log(task)
            }
            return task;
        })
        setTasks(newTasks);
    }

    function createNewTask(e, newTask) {
        e.preventDefault();

        if(newTask !== '') {
            const idNumber = tasks.length;
            const newTasksArray = [...tasks, {id: idNumber, task:newTask, done: false}];
            setTasks(newTasksArray);
        }

        handleModal();
    }

    function deleteTask(e, taskId) {
        e.preventDefault();
        const newTasks = tasks.filter((task) => {
            if(task.id === taskId) {
                return false
            }
            else {
                return true
            }
        })
        setTasks(newTasks);
    }

    function editTask(e, taskId, newTask) {
        e.preventDefault();

        const newTasks = tasks.map((task) => {
            if(task.id === taskId) {
                task.task = newTask;
            }
            return task;
        })
        setTasks(newTasks);
    }

    return (
        <>
            <Header handleModal={handleModal} modalOpened={modalOpened} />
            <main className="container">
                <Todo editTask={editTask} deleteTask={deleteTask} handleDoneTask={handleDoneTask} tasks={tasks} />
                <Done editTask={editTask} deleteTask={deleteTask} handleDoneTask={handleDoneTask} tasks={tasks} />
            </main>
            <Modal createNewTask={createNewTask} handleModal={handleModal} modalOpened={modalOpened} />
        </>
    )
}