import React from 'react';
import './ModalDelete.css';

export default function ModalDelete(props) {
    function closeModal(e) {
        if(e.target.id === 'modal-delete--bg') {
            props.handleModalDelete();
        }
    }
    return (
        <div id="modal-delete--bg" onClick={closeModal} className="modal-delete--bg">
            <div className="modal-delete">
                <p>Are you sure you want to delete the task: <br/><span>{props.task}</span>?</p>

                <button onClick={e => props.deleteTask(e, props.id)} className="delete-btn">Delete Task</button>
                <button onClick={props.handleModalDelete} className="cancel-btn">Cancel</button>
            </div>
        </div>
    )
}