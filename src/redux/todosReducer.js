import { GET_TODOS, CLEAR_TODOS, ADD_TODO, DELETE_TODO } from './reduxTypes'

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
      return { ...state, todos: [...state.todos, action.payload] }
    case DELETE_TODO:
      return { ...state }
    default:
      return state
  }
}
