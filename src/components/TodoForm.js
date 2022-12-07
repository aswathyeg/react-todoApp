import React from "react";

const TodoForm = ({ setTodo, handleSubmit, todo, editId }) => {
  return (
    <div>
      <div className="App-header">TodoApp</div>
      <div className="form">
        <form onClick={handleSubmit}>
          <input
            value={todo}
            className="inputField"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button type="submit">{editId ? "Edit" : "Go"}</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
