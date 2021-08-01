import React from 'react';
import './ModalEdit.css';

export default function ModalEdit(props) {

    const [textInput, setTextInput] = React.useState(props.task);

    function closeModal(e) {
        if (e.target.id === 'modal-edit--bg' || e.target.id === 'cancel-btn') {
            e.preventDefault();
            props.handleModalEdit();
        }
    }

    return (
        <div id="modal-edit--bg" onClick={closeModal} className="modal-edit--bg">

            <form className="modal">

                <label>Editar a Tarefa: <span>{props.task}</span></label>

                <input name="task" id="task" type="text" value={textInput} onChange={e => setTextInput(e.target.value)} />

                <button onClick={e => {e.preventDefault(); props.editTask(e, props.id, textInput);}} className="confirm-btn">Editar</button>
                
                <button id="cancel-btn" className="cancel-btn" onClick={closeModal}>Cancelar</button>
            </form>

        </div>
    )
}