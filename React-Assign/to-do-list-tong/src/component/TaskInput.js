import React, { useState } from 'react';

function TaskInput({ onAdd }) {
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim() === '') return;

        onAdd(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={task}
                onChange={handleChange}
            />
            <button type='submit'>add</button>
        </form>
    );
}

export default TaskInput;