import React, { useState } from 'react';
import './Header.css';

export function Header(props) {
    const { todos } = props;
    const todosLength = todos.length;

    const isTasksPlural = todosLength !== 1;
    const taskOrTasks = isTasksPlural ? "tasks" : "task";

    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
    };

    const handleClose = () => {
        setShowMessage(false);
    };

    if (showMessage) {
        return (
            <div className="fullscreen-message">
                <div className='message'>
                <span className="heart">♥</span><span className="heart">♥</span><span className="heart">♥</span>I love you Lolita!<span className="heart">♥</span><span className="heart">♥</span><span className="heart">♥</span>
                </div>
                <button className="close-button" onClick={handleClose}>Close</button>
            </div>
        );
    }

    return (
        <header onClick={handleClick}>
            <h1 className="text-gradient">
                You have {todosLength} open {taskOrTasks}.
            </h1>
        </header>
    );
}