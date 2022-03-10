import { createStore } from "redux";

const ACTION_TODO = {
  ADD: "ADD",
  DELETE: "DELETE",
};

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addTodo = (text) => {
  return {
    type: ACTION_TODO.ADD,
    text,
  };
};
const deleteTodo = (id) => {
  return {
    type: ACTION_TODO.DELETE,
    id,
  };
};

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case ACTION_TODO.ADD:
      return [{ id: Date.now(), text: action.text }, ...todos];
    case ACTION_TODO.DELETE:
      return todos.filter((item) => item.id !== action.id);
    default:
      return todos;
  }
};
const todoStore = createStore(todoReducer);

const paintTodos = () => {
  while (ul.firstChild) ul.removeChild(ul.firstChild);

  const todos = todoStore.getState();
  todos.forEach((item) => {
    const li = document.createElement("li");
    li.dataset.id = item.id;
    li.innerText = item.text;

    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", (e) =>
      dispatchDeleteTodo(parseInt(e.target.parentNode.dataset.id))
    );

    li.append(btn);
    ul.appendChild(li);
  });
};
todoStore.subscribe(paintTodos);

const dispatchAddTodo = (text) => {
  todoStore.dispatch(addTodo(text));
};
const dispatchDeleteTodo = (id) => {
  todoStore.dispatch(deleteTodo(id));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddTodo(todo);
});
