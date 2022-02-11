import { ListItemSecondaryAction } from "@mui/material";
import React from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({ title, todoList, setTodoList, todo }) {
  const deletehandle = () => {
    setTodoList(todoList.filter((el) => el.id !== todo.id));
  };
  const completehandle = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {title}
      </li>
      <button className="complete-btn" onClick={completehandle}>
        {todo.completed ? <CancelIcon /> : <DoneOutlineIcon />}
      </button>
      <button className="trash-btn" onClick={deletehandle}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Todo;
