import React from "react";

// Components
import Todo from "./Todo";

const TodoList = ({todos, setTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo todo={todo }todos={todos} text={todo.text} key={todo.id} setTodos={setTodos}/>
                ))} 
            </ul>
        </div>
    );
}

export default TodoList;