const initialValue = {
    todos : [],
}

function rootReducer(state = initialValue, action) {
    switch(action.type) {
        case "ADD_TODO" :
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO': 
            state.todos.splice(action.payload, 1);
            return {
                ...state,
                todos: [...state.todos] ,
            }
        default: 
        return state;
    }
}

export default rootReducer;

