import { GET_TODOS, CLEAR_TODOS } from './reduxTypes'

const initialState = {
  todos: [],
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload }
    case CLEAR_TODOS:
      return { todos: action.payload }
    default:
      return state
  }
}
