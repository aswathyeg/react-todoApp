export const todoReducer = (state, action) => {
  switch (action.payload) {
    case "Add":
      return {
        ...state,
      };
    case "Edit":
    case "Delete":
    default:
      return state;
  }
};
