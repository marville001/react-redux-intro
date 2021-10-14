import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todosActions';

const Form = () => {
    const [todo, setTodo] = useState("");

    const  dispatch = useDispatch()

    const handleAddTask=()=>{
        const id = Math.floor(Math.random() * 10)
        dispatch(addTodo({id, todo}))
    }
    return (
        <div className="form-container">
            <h1>Todo App</h1>
            <div className="form">
                <input
                 type="text" 
                 placeholder="Type your task here.."
                 value={todo}
                 onChange={e=>setTodo(e.target.value)}
                 />
                <button onClick={handleAddTask} className="add-btn">Add Task</button>
            </div>
        </div>
    )
}

export default Form
