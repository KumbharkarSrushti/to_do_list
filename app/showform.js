"use client"
import React, { useState } from 'react';

const TodoList = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [TaskAdd, setTaskAdd] = useState(false);
  const [compTasks, setCompTasks] = useState([]);
  const [taskPriority, setTaskPriority] = useState(1);
  const [time, setTime] =useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setTaskPriority(parseInt(e.target.value));
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() !== '' && !TaskAdd) {
      setTodoList([...todoList, { text: userInput, priority: taskPriority,taskTime : time}]);
      setUserInput('');
      setTaskAdd(false);
      setCompTasks([...compTasks, false]);
      setTime('');

    }
  };

  const handleTaskClick = (index) => {
    const updatedTasks = [...compTasks];
    updatedTasks[index] = !updatedTasks[index];
    setCompTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);

    const updatedTasks = [...compTasks];
    updatedTasks.splice(index, 1);
    setCompTasks(updatedTasks);
  };

  // Sorting function to sort tasks by priority
  const sortTasksByPriority = () => {
    const sortedTasks = [...todoList];
    sortedTasks.sort((a, b) => a.priority - b.priority);
    setTodoList(sortedTasks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type='text'
          value={userInput}
          placeholder='Enter a todo list'
          onChange={handleChange}
        />
        <select value={taskPriority} onChange={handlePriorityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <input
          className='time-input'
          type='text'
          value={time}
          placeholder='Time (e.g., 1 hour)'
          onChange={handleTime}
        />

        <button className='add' type="submit" disabled={TaskAdd}>
          Add
        </button>
        <button onClick={sortTasksByPriority}>Sort by Priority</button>
      </form>
      <ul>
        {todoList.length >= 1 ? (
          todoList.map((todo, index) => (
            <li
              className="task"
              key={index}
              style={{ textDecoration: compTasks[index] ? 'line-through' : 'none' }}
            >
              <span onClick={() => handleTaskClick(index)}>{todo.text}</span>
              <span className="priority-number">{todo.priority}</span>
              <span className="time">{todo.taskTime}</span>

              <button className='delete' onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button className='done' onClick={() => handleTaskClick(index)}>
                Done
              </button>
            </li>
          ))
        ) : (
          <p className='items'>Enter a todo item</p>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
