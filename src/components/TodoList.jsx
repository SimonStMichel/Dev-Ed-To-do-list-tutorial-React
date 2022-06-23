import React from "react";

// Components
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {/* Renders the todo list according to the filter */}
                {filteredTodos.map(todo => (
                    <Todo todo={todo} todos={todos} text={todo.text} key={todo.id} setTodos={setTodos}/>
                ))} 
            </ul>
        </div>
    );
}

export default TodoList;