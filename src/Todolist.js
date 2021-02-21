import React, { useState } from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";

function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // Remove spaces or empty text
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const doTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  return (
    <div>
      <h1>What Todo?</h1>
      <Todoform onSubmit={addTodo}></Todoform>
      <Todo
        todos={todos}
        doTodo={doTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      ></Todo>
    </div>
  );
}

export default Todolist;
