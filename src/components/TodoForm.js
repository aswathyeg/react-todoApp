import React from "react";

const TodoForm = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <div className="App-header">TodoApp</div>
      <div className="form">
        <form onClick={handleSubmit}>
          <input onChange={handleChange} />
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
