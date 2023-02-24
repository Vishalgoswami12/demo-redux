import React from "react";

const Todo = (props) => {
    const { todo, handleDelete, index } = props;
    return (
        <div style={{ display: 'flex'}} key={index}>
            <h2>{todo.name}</h2>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
    )
}

export default Todo;
