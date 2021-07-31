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
                        return <Card key={task.task} id={task.id} done={task.done} task={task.task} />
                    })
            }
        </section>
    )
}