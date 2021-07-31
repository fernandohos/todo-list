import React from 'react';
import { Circle } from 'react-feather';
import { CheckCircle } from 'react-feather';
import { Trash2 } from 'react-feather';
import './Card.css';

export default function Card(props) {

    return (
        <div data-id={props.id} className={props.done? "task done": "task"}>
            <p>{props.task}</p>
            <div className="icons">
                <div className="check-icon">
                    {
                        props.done ?
                            <CheckCircle size={20} color="#00008a" /> :
                            <Circle size={20} color="#00008a" />
                    }
                </div>
                <div className="trash-icon">
                    <Trash2 color="#00008a" size={20} />
                </div>
            </div>

        </div>
    )
}