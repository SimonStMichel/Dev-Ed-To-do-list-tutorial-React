// Imports
import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // States
  const [inputText, setInputText] =  useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] =  useState([]);

  // Functions

  // Handles the status state
  const filterHandler = () => {

    // Filters the todos according to the status
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        console.log(filteredTodos);
        break;
      
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    };
  }

  // Local Storage

  // Pushes the todo's to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Gets the todo's from local storage and sets the list
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } 
    else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
    }
  }

  // Effects
    // Runs once when the app starts
    useEffect(() => {
      getLocalTodos();
    }, []);

    // Runs every time the status or the todos change
    useEffect(() => {
      filterHandler();
      saveLocalTodos();
    }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Simon's Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
