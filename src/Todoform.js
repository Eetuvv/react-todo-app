import React, { useState, useRef, useEffect } from "react";

function Todoform(props) {
  const [input, setInput] = useState("");

  //Focus on inputform on page refresh
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  });
  // Handle submit click
  const handleSubmit = (e) => {
    // Make sure that page doesn't refresh when clicking submit
    e.preventDefault();

    // Create random id for todo
    // Get the text from input
    props.onSubmit({
      id: Math.floor(Math.random() * 999),
      text: input,
    });

    // Clear form after submit
    setInput("");
  };

  // Handle form input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        ref={focusRef}
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
      ></input>
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default Todoform;
