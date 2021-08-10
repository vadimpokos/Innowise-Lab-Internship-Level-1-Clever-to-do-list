import { GET_TODOS } from "./reduxTypes"

const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS:
            return {... state, todos: action.payload}
        default: return state
    }
}