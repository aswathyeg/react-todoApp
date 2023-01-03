import React, { useContext } from "react";
import "../Styles.css";
import { TodoContext } from "./context/Context";
const TodoList = () => {
  const { todos, handleDelete, handleEdit } = useContext(TodoContext);
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
