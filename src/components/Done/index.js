import React from 'react';
import Card from '../Card';
import './Done.css';

export default function Done(props) {

    function filteredTasks() {
        if(props.tasks === []) {
            return <h1>Não tem task</h1>;
        }
        const tasksFiltered = props.tasks.filter(task => {
                    return task.done
                })
                
        const tasksCards = tasksFiltered.map(task => {
            return <Card editTask={props.editTask} deleteTask={props.deleteTask} key={task.task} id={task.id} handleDoneTask={props.handleDoneTask} done={task.done} task={task.task} />
        });
    
        if(tasksFiltered.length === 0) {
            return (<h2>Não há tarefas concluídas.</h2>);
        }
        else {
            return tasksCards;
        }
    }

    function dropTodo(e) {
        const objectId = e.dataTransfer.getData('object-id');
        props.updateTasksAfterDrop(objectId, "done");
    }

    function allowDrop(e) {
        e.preventDefault();
    }


    return (
        <section onDrop={dropTodo} onDragOver={e => allowDrop(e)} className="done">
            {
                filteredTasks()
            }
        </section>
    )
}