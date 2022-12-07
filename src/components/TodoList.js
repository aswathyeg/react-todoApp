import React from "react";
import "../App.css";
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((todos) => (
        <li className="singleTodo">
          <span className="todoText" key={todos.id}>
            {todos.todo}
          </span>
          <button
            onClick={() => {
              handleEdit(todos.id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(todos.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
