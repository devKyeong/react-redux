import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const actions = {
  addTodo: (text) => {
    return { type: ADD, text };
  },
  deleteTodo: (id) => {
    return { type: DELETE, id };
  },
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ id: Date.now(), text: action.text }, ...state];
    case DELETE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
