"use client"
import React, { useState } from 'react';

const TodoList = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [TaskAdd, setTaskAdd] = useState(false);
  const [compTasks, setCompTasks] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() !== '' && !TaskAdd) {
      setTodoList([...todoList, userInput]);
      setUserInput('');
      setTaskAdd(false);
      setCompTasks([...compTasks, false]); 
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={userInput}
          placeholder='Enter a todo list'
          onChange={handleChange}
        />
        <button type="submit" disabled={TaskAdd}>
          Add
        </button>
      </form>
      <ul>
        {todoList.length >= 1 ? (
          todoList.map((todo, index) => (
            <li key={index} style={{ textDecoration: compTasks[index] ? 'line-through' : 'none' }}>
              <span onClick={() => handleTaskClick(index)}>
                {todo}
              </span>
              <button
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                onClick={() => handleTaskClick(index)}
              >
                Done
              </button>
            </li>
          ))
        ) : (
          <p>Enter a todo item</p>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
