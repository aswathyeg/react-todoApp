import React from "react";

const TodoList2 = ({ handleEdit, handleDelete, todos }) => {
  return (
    <ul className="todos">
      {todos.map((todos) => (
        <span className="singletodo">
          <li key={todos.id} className="todoText">
            {todos.todo}
          </li>
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
        </span>
      ))}
    </ul>
  );
};

export default TodoList2;
