export const todoReducer = (state, action) => {
  switch (action.payload) {
    case "Add":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "Edit":
    case "Delete":
    default:
      return state;
  }
};
