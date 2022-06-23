import React, { useState } from 'react';
import './App.css';

// Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] =  useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Simon's Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
