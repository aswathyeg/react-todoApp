import React from "react";

const TodoForm = ({ todo, setTodo, todos, setTodos }) => {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}` }, todo, ...todos]);
      setTodo("");
    }
  };
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
