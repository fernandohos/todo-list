import React from 'react';
import { Circle } from 'react-feather';
import { CheckCircle } from 'react-feather';
import { Trash2 } from 'react-feather';
import { Edit2 } from 'react-feather';
import ModalDelete from '../ModalDelete';
import ModalEdit from '../ModalEdit';
import './Card.css';

export default function Card(props) {

    const [showModalDelete, setShowModalDelete] = React.useState(false);
    const [showModalEdit, setShowModalEdit] = React.useState(false);


    function handleModalDelete() {
        setShowModalDelete(!showModalDelete);
    }

    function handleModalEdit() {
        setShowModalEdit(!showModalEdit);
    }

    function dragCard(e) {
        e.dataTransfer.setData("object-id", e.target.id);
    }


    return (
        <>
            <div id={props.id} draggable="true" onDragStart={e=> dragCard(e)} data-object={`"id":${props.id},"task":${props.task}, "done":${props.done}`} data-id={props.id} className={props.done ? "task done" : "task"}>
                <p>{props.task}</p>
                <div className="icons">

                    <div title="editar" className="edit-icon">
                        <button onClick={e => handleModalEdit()}><Edit2 color="#00008a" size={20} /></button>
                    </div>

                    <div className="check-icon" title={props.done? "desmarcar como feito" : "marcar como feito"}>
                        {
                            props.done ?
                                <CheckCircle onClick={e => props.handleDoneTask(props.id)} size={20} color="#00008a" /> :
                                <Circle onClick={e => props.handleDoneTask(props.id)} size={20} color="#00008a" />
                        }
                    </div>

                    <div title="excluir" className="trash-icon">
                        <button onClick={e => handleModalDelete()}><Trash2 color="#00008a" size={20} /></button>
                    </div>

                </div>
            </div>
            {
                showModalDelete ?
                    <ModalDelete deleteTask={props.deleteTask} handleModalDelete={handleModalDelete} id={props.id} task={props.task} /> :
                    <></>
            }
            {
                showModalEdit ?
                    <ModalEdit editTask={props.editTask} handleModalEdit={handleModalEdit} id={props.id} task={props.task} /> :
                    <></>
            }
        </>
    )
}