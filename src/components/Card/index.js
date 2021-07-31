import React from 'react';
import { Circle } from 'react-feather';
import { CheckCircle } from 'react-feather';
import { Trash2 } from 'react-feather';
import './Card.css';

export default function Card(props) {

    const [show, setShow] = React.useState(false);

    function handleCheckIcon() {
        setShow(!show);
    }

    return (
        <div className="task">
            <p>Fazer Tarefa</p>
            <div className="icons">
                <div className="check-icon">
                    {
                        show ?
                            <CheckCircle onClick={e => handleCheckIcon()} size={20} color="#00008a" /> :
                            <Circle onClick={e => handleCheckIcon()} size={20} color="#00008a" />
                    }
                </div>
                <div className="trash-icon">
                    <Trash2 color="#00008a" size={20} />
                </div>
            </div>

        </div>
    )
}