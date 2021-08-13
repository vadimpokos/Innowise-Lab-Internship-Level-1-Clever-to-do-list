import {
  GET_TODOS,
  CLEAR_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from './reduxTypes'

const initialState = {
  todos: [],
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { todos: action.payload }
    case CLEAR_TODOS:
      return { todos: action.payload }
    case ADD_TODO:
      return { ...state }
    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(
            0,
            state.todos.findIndex((item) => item.id === action.payload)
          ),
          ...state.todos.slice(
            state.todos.findIndex((item) => item.id === action.payload) + 1
          ),
        ],
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(
            0,
            state.todos.findIndex((item) => item.id === action.payload.id)
          ),
          action.payload,
          ...state.todos.slice(
            state.todos.findIndex((item) => item.id === action.payload.id) + 1
          ),
        ],
      }
    default:
      return state
  }
}
