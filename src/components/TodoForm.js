import React from "react";
import "../App.css";
const TodoForm = ({ setTodo, handleSubmit, todo, editId }) => {
  return (
    <form onClick={handleSubmit} className="form">
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
