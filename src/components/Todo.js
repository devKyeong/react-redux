import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../store";

function Todo({ todo, onClick }) {
  return (
    <li key={todo.id}>
      <Link to={`/${todo.id}`}>{todo.text}</Link>
      <button style={{ marginLeft: "5px" }} onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

function mapDispatchToProps(dispatch, { todo }) {
  return {
    onClick: () => dispatch(actions.deleteTodo(todo.id)),
  };
}
export default connect(null, mapDispatchToProps)(Todo);
