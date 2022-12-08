import React from "react";

const TodoForm2 = ({ handleSubmit, todo, setTodo }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>GO</button>
    </form>
  );
};

export default TodoForm2;
