import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
