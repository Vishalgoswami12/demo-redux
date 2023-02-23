import React, { useState } from "react";
import { addTodo, deleteTodo } from "../actions/actionCreator";
import {connect}  from "react-redux";
import Todo from "./todo";

function Todos(props) {
    const [todoInput, setTodoInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = props;
        const data = { name: todoInput, status: false }
        dispatch(addTodo(data));
    }

    const handleDelete = (index) => {
        props.dispatch(deleteTodo(index));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add todo..." onInput={(e) => setTodoInput(e.target.value)}/>
            </form>
            {
                props.todos && props.todos.map((item, index) => (
                    <Todo todo={item} index={index} handleDelete={handleDelete}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);