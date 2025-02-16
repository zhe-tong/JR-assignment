import React, { useState } from 'react';

function Task({ text }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const toggleTask = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="task">
      <span className={isCompleted ? 'completed' : ''}>{text}</span>
      <button onClick={toggleTask}>
        {isCompleted ? 'Undo' : 'Finish'}
      </button>
    </div>
  );
}

export default Task;
