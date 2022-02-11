import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Form = ({
  setInputText,
  inputText,
  todoList,
  setTodoList,
  setStatus,
}) => {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: Math.random() * 10000, text: inputText, completed: false },
    ]);
    setInputText("");
  };
  const statushandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={inputText}
          className="todo-input"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="todo-button" onClick={submitTodoHandler}>
          <AddCircleOutlineIcon fontSize="large" />
        </button>
        <div className="select">
          <select onChange={statushandler} className="filter-todo">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
