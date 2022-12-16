const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  const hasTodo = todos.find((i) => i.todo === todo);
  if (hasTodo && todo !== "") {
    dispatch({
      type: "AddTodo",
      payload: [{ id: todo, todo }, ...todos],
    });
    // dispatch({
    //   type: "DeleteTodo",
    //   payload: todos.filter((did) => did.id !== todo.id),
    // });
  }
};
const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  dispatch({
    type: "DeleteTodo",
    payload: todos.filter((did) => did.id !== todo.id),
  });
};
