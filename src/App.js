import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
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
    <div className="App">
      <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
