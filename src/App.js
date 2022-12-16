import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <h2>Redux Todo</h2>

      <div className="form">
        <form className="interform" onSubmit={handleSubmit}>
          <input type="text"></input>
          <button>Go</button>
        </form>
      </div>
    </div>
  );
};

export default App;
