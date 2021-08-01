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

    return (
        <section className="done">
            {
                filteredTasks()
            }
        </section>
    )
}