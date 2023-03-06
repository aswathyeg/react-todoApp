import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { db } from "../../firebase_config";
export const TodoContext = createContext();

const Context = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (editId) {
    //   const editTodo = todos.find((i) => i.id === editId);
    //   const updatedTodos = todos.map((t) =>
    //     t.id === editTodo.id
    //       ? (t = { id: t.id, todo })
    //       : { id: t.id, todo: t.todo }
    //   );
    //   setTodos(updatedTodos);
    //   setEditId(0);
    //   setTodo("");
    //   return;
    // }

    // if (todo !== "") {
    //   setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    //   setTodo("");
    // }

    //add to firebase
    db.collection("dockets").add({
      todos: todos,
    });
    setTodos("");
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

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
