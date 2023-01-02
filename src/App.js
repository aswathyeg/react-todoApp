import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Docket App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
