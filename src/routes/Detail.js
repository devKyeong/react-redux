import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

function Detail({ todos }) {
  const { id } = useParams();
  const todo = todos.find((item) => item.id === parseInt(id));
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>create At : {todo?.id}</h5>
    </>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    todos: state,
  };
}

export default connect(mapStateToProps)(Detail);
