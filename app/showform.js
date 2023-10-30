"use client"
import React, { useState } from 'react';

const TodoList=()=>{
    const [userInput,setUserInput] =useState('')
    const [todoList,setTodoList] =useState([])

    const handleChange=(e)=>{
        e.preventDefault()

        setUserInput(e.target.value)
        console.log(userInput)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()

        setTodoList([
            userInput,
            ...todoList
        ])
    }
    return(
        <div>
            <form>
                <input type='text' onChange={handleChange}/><button onClick={handleSubmit}>submit</button>
            </form>
            <ul>
                {
                    todoList.length >=1? todoList.map((todo,idx)=>{
                        return <li key={idx}>{todo}</li>
                    })
                    :"Enter a todo item"
                }
            </ul>

        </div>

    )
}






// function TodoList() {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const handleInputChange = (e) => {
//     setTask(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim() !== '') {
//       setTasks([...tasks, task]);
//       setTask('');
//     }
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={task}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default TodoList;
