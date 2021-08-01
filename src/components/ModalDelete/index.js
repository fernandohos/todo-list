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
                <p>Tem certeza que deseja excluir a tarefa:<br/><span>{props.task}</span>?</p>

                <button onClick={e => props.deleteTask(e, props.id)} className="delete-btn">Deletar</button>
                <button onClick={props.handleModalDelete} className="cancel-btn">Cancelar</button>
            </div>
        </div>
    )
}