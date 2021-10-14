import React from "react";
import { useSelector } from "react-redux";

const Todos = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <div className="todos-container">
      <h2>Your Task List</h2>
      <div className="todos">
        {todos?.map((todo) => (
          <div key={todo.id} className="todo">
            <p>{todo.todo}</p>
            <button className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
