import React, { useState, createContext } from "react";
export const TodoContext = createContext();

const Context = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, todos, setTodos, editId, setEditId }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Context;
