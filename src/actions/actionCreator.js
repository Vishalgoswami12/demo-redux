export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
    }
}

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        payload: index
    }
}