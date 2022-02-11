import { Fragment, useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList";

function App() {
  const initial = [
    {
      id: Math.random() * 10000,
      text: "Work on workpress", 
      completed: false 
    },
    {
      id: Math.random() * 10000,
      text: "Organize office main department", 
      completed: false 
    },
    {
      id: Math.random() * 10000,
      text: "Complete all pending task", 
      completed: false 
    },
    {
      id: Math.random() * 10000,
      text: "Error solve in JavaScript", 
      completed: false 
    },
  ];
  const [inputText, setInputText] = useState();
  const [todoList, setTodoList] = useState([...initial]);
  const [status, setStatus] = useState("all");
  const [filtertodo, setFilterTodo] = useState([]);

  //useEffect
  useEffect(() => {
    filterhandler();
  }, [todoList, status]);

  //function
  const filterhandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todoList.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilterTodo(todoList.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodo(todoList);
        break;
    }
  };
  return (
    <Fragment>
      <header>
        <h1>Sathish's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        filtertodo={filtertodo}
      />
    </Fragment>
  );
}

export default App;
