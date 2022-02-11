import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList, filtertodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtertodo.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.text}
            setTodoList={setTodoList}
            todo={todo}
            todoList={todoList}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
