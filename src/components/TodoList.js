import React from "react";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todos) => (
        <ul>
          <li key={todos.id}>{todos.todo}</li>
          <button>Edit</button>
          <button>Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
