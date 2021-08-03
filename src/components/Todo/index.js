import React from 'react';
import Card from '../Card';
import './Todo.css';

export default function Todo(props) {

    function filteredTasks() {
        if(props.tasks === []) {
            return <h2>Não há tarefas para fazer.</h2>;
        }
        const tasksFiltered = props.tasks.filter(task => {
                    return !task.done
                })
                
        const tasksCards = tasksFiltered.map(task => {
                        return <Card editTask={props.editTask} deleteTask={props.deleteTask} key={task.task} id={task.id} handleDoneTask={props.handleDoneTask} done={task.done} task={task.task} />
                    });
    
        if(tasksFiltered.length === 0) {
            return (<div className="no-task"><h2>Não há tarefas para fazer.</h2></div>);
        }
        else {
            return tasksCards;
        }
    }
    function allowDrop(e) {
        e.preventDefault();
    }

    function dropTodo(e) {
        const objectId = e.dataTransfer.getData('object-id');
        props.updateTasksAfterDrop(objectId, "todo");
    }

    return (
        <section onDrop={dropTodo} onDragOver={e => allowDrop(e)} className="todo">
            {
                filteredTasks()
            }
        </section>
    )
}