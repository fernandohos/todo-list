import React from 'react';
import Card from '../Card';
import './Todo.css';

export default function Todo(props) {

    return (
        <section className="todo">
            {
                props.tasks.filter(task => {
                    return !task.done
                })
                    .map(task => {
                        return <Card editTask={props.editTask} deleteTask={props.deleteTask} key={task.task} id={task.id} handleDoneTask={props.handleDoneTask} done={task.done} task={task.task} />
                    })
            }
        </section>
    )
}