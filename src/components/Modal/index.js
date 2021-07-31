import React from 'react';
import './Modal.css'

export default function Modal(props) {
    return (
        <div className="modal-bg">
            <form className="modal">
                <label for="task">Nova Tarefa</label>
                <input name="task" id="task" type="text" />
                <button type="submit" className="confirm-btn">Criar </button>
                <button className="cancel-btn">Cancelar</button>
            </form>
        </div>
    )
}