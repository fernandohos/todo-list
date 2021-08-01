import React from 'react';
import Card from '../Card';
import './Done.css';

export default function Done(props) {

    return (
        <section className="done">
            {
                props.tasks.filter(task => {
                    return task.done
                })
                    .map(task => {
                        return <Card deleteTask={props.deleteTask} key={task.task} id={task.id} handleDoneTask={props.handleDoneTask} done={task.done} task={task.task} />
                    })
            }
        </section>
    )
}