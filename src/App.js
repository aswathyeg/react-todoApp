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
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
  const handleDelete = () => {};
  return (
    <div className="App">
      <TodoForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        todo={todo}
      />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
