import React from "react";

const Todo = ({ todo, text, todos, setTodos }) => {

    // Functions

    // Deletes the todo when user clicks on the trash icon
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    // Marks as completed or uncompleted when user clicks on the checkmark icon
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed,
                };   
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
                <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;