import React from 'react';
import './Modal.css'

export default function Modal(props) {

    const [textInput, setTextInput] = React.useState('');

    function closeModal(e) {
        if (e.target.id === 'modal-bg' || e.target.id === 'cancel-btn') {
            e.preventDefault();
            props.handleModal();
        }
    }

    return (
        <div id="modal-bg" onClick={closeModal} className={props.modalOpened ? "modal-bg" : "modal-bg hide"}>

            <form className="modal">

                <label>New Task</label>

                <input name="task" id="task" type="text" value={textInput} onChange={e => setTextInput(e.target.value)} />

                <button onClick={e => { props.createNewTask(e, textInput); setTextInput('') }} className="confirm-btn">Create Task</button>
                
                <button id="cancel-btn" className="cancel-btn" onClick={closeModal}>Cancel</button>
            </form>

        </div>
    )
}