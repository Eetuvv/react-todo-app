import React, { useState } from "react";
import Todoform from "./Todoform";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, doTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate}></Todoform>;
  }

  return todos.map((todo, index) => (
    //Check if task is done
    <div className={todo.isDone ? "todo-row done" : "todo-row"} key={index}>
      <div key={todo.id} onClick={() => doTodo(todo.id)}></div>
      {todo.text}
      <div className="icons"></div>
      <RiCloseCircleLine
        onClick={() => removeTodo(todo.id)}
        className="delete-icon"
      />
      <TiEdit
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
        className="edit-icon"
      />
    </div>
  ));
}

export default Todo;
