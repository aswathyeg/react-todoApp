import React from "react";

const TodoForm = ({ handleChange, handleSubmit, todo }) => {
  return (
    <div>
      <div className="App-header">TodoApp</div>
      <div className="form">
        <form onClick={handleSubmit}>
          <input value={todo} onChange={handleChange} />
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
