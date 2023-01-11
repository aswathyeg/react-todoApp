import React, { useContext } from "react";
import "../Styles.css";

import { TodoContext } from "./context/Context";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "bootstrap-4-react/lib/components/layout";
const TodoList = () => {
  const { todos, handleDelete, handleEdit } = useContext(TodoContext);
  return (
    <ListGroup variant="flush" className="allTodos">
      {todos.map((todos) => (
        // <li className="singleTodo">

        <ListGroup.Item key={todos.id} className="singleTodo">
          {todos.todo}
          <Container fluid>
            <button
              onClick={() => {
                handleEdit(todos.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(todos.id);
              }}
            >
              Delete
            </button>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
