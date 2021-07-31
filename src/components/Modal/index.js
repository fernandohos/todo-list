import React from 'react';
import './Modal.css'

export default function Modal(props) {

    function closeModal(e) {
        if(e.target.id === 'modal-bg' || e.target.id === 'cancel-btn') {
            e.preventDefault();
            props.handleModal();
        }
    }

    return (
        <div id="modal-bg" onClick={closeModal} className={props.modalOpened ? "modal-bg" : "modal-bg hide"}>
            <form className="modal">
                <label>Nova Tarefa</label>
                <input name="task" id="task" type="text" />
                <button type="submit" className="confirm-btn">Criar </button>
                <button id="cancel-btn" className="cancel-btn" onClick={closeModal}>Cancelar</button>
            </form>
        </div>
    )
}