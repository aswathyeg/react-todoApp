import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <span>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>
            {todos.todo}
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
    </span>
  );
};

export default TodoList;
