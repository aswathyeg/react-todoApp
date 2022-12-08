import React, { createContext } from "react";

const context = ({ children }) => {
  const TodoContext = createContext();

  return <TodoContext.Provider>{children}</TodoContext.Provider>;
};

export default context;
