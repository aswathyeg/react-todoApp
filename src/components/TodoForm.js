import React, { useContext } from "react";
import "../Styles.css";
import { TodoContext } from "./context/Context";
const TodoForm = () => {
  const { todo, setTodo, editId, handleSubmit } = useContext(TodoContext);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={todo}
        className="inputField"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit">{editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;
