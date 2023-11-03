"use client"
import React, { useState } from 'react';
import Priority from './priotybox.js';
import { deleteTask } from './deleteTask.js';

const TodoList = () => {
  const [userInput, setUserInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [estimatedTime, setEstimatedTime] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const selectedPriorityRef = React.useRef(1);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleTimeChange = (e) => {
    setEstimatedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() !== '') {
      const newTask = {
        text: userInput,
        priority: selectedPriorityRef.current,
        estimatedTime: estimatedTime,
        checked: false, // Initialize checked property
      };

      setTasks([...tasks, newTask]);

      setUserInput('');
      setEstimatedTime('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = deleteTask(tasks, index);
    setTasks(updatedTasks);
  };

  const handleToggleTodo = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="task-form">Task Form</h1>
        <h2 className="h2">TODO TASK</h2>
        <input
          className="input"
          type="text"
          value={userInput}
          placeholder="Enter a task"
          onChange={handleChange}
        />
        <br />
        <h2 className="h2">PRIORITY NO FOR TASK</h2>
        <Priority />
        <br />
        <h2 className="h2">TIME FOR TASK</h2>
        <input
          className="input1"
          type="text"
          value={estimatedTime}
          placeholder="Estimated Time (hours)"
          onChange={handleTimeChange}
        />
        <br />
        <button className="add" type="submit">
          Add Task
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th className="task-cell">Task</th>
            <th className="task-cell">Priority</th>
            <th className="task-cell">Estimated Time</th>
            <th className="task-cell">Delete</th>
            <th className="task-cell">Done</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="task-cell"><span
                  style={{
              
                    textDecoration: task.checked ? 'line-through' : 'none',
                  }}
                >
                  {task.text}
                </span></td>
              <td className="task-cell">{task.priority}</td>
              <td className="task-cell">{task.estimatedTime}</td>
              <td className="task-cell">
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src="delete-button.svg"
                    alt="Delete"
                    width="20px"
                    height="20px"
                  />
                </button>
              </td>
              <td className="task-cell">
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => handleToggleTodo(index)}
                />
                              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;

