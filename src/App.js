import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="App">
        <div className="container">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
