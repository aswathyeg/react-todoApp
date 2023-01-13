import React, { useState, createContext } from "react";
export const TodoContext = createContext();
// Initial state
const initialState = {
  todos: [],
};

//createContext
export const GlobalContext = createContext(initialState);
//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        editId,
        setEditId,
        handleSubmit,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Context;
