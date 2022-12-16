import React from "react";

const TodoReducers = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "AddTodo":
      return {
        todos: action.payload,
      };

    case "DeleteTodo":
      return { todos: action.payload };
  }
};

export default TodoReducers;
