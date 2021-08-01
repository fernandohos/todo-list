import React from 'react';
import { Circle } from 'react-feather';
import { CheckCircle } from 'react-feather';
import { Trash2 } from 'react-feather';
import ModalDelete from '../ModalDelete';
import './Card.css';

export default function Card(props) {

    const [showModalDelete, setShowModalDelete] = React.useState(false);

    function handleModalDelete() {
        setShowModalDelete(!showModalDelete);
    }

    return (
        <>
            <div data-id={props.id} className={props.done ? "task done" : "task"}>
                <p>{props.task}</p>
                <div className="icons">
                    <div className="check-icon">
                        {
                            props.done ?
                                <CheckCircle onClick={e => props.handleDoneTask(props.id)} size={20} color="#00008a" /> :
                                <Circle onClick={e => props.handleDoneTask(props.id)} size={20} color="#00008a" />
                        }
                    </div>
                    <div className="trash-icon">
                        <button onClick={e => handleModalDelete()}><Trash2 color="#00008a" size={20} /></button>
                    </div>
                </div>
            </div>
            {
                showModalDelete ?
                    <ModalDelete deleteTask={props.deleteTask} handleModalDelete={handleModalDelete} id={props.id} task={props.task} /> :
                    <></>
            }
        </>
    )
}