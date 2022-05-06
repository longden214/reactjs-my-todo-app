import React, { useState } from "react";

function AddTodo(props) {

  const [title, setTitle] = useState("");

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        value={title}
        onChange={onInputChange}
      />
      <input type="submit" value="Submit" className="inputsubmit" />
    </form>
  );
}

export default AddTodo;
