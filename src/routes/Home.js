import React, { useState } from "react";
import { connect } from "react-redux";
import { actions } from "../store";

import Todo from "../components/Todo";

function Home({ todos, addTodo, deleteTodo }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  function onChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <h1>ToDos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actions.addTodo(text)),
    deleteTodo: (id) => dispatch(actions.deleteTodo(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
