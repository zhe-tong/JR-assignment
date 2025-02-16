import React, { useState } from 'react';
import TaskInput from './component/TaskInput';
import Task from './component/Task';

function TaskList({tasks}) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} text={task} />
      ))}
    </div>
);
}
function App() {
  const [tasks, setTask] = useState([]);
  const addTask = (newTask) => {
      setTask([...tasks, newTask]);
  };

  return (
    <div className="app">
      <h1>To Do List</h1>
      <TaskInput onAdd={addTask} />
      <div>
        <TaskList tasks={tasks} />
      </div>
      
    </div>
    
  );
}

export default App;
