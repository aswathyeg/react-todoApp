import React from "react";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <span>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>
            {todos.todo}
            <button>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </li>
        ))}
      </ul>
    </span>
  );
};

export default TodoList;
