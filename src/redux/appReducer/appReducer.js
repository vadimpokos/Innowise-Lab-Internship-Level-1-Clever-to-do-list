import { FOCUS, SET_ISLOADING } from '../reduxTypes'

const initialState = {
  focusedId: '',
  isLoading: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCUS:
      return { ...state, focusedId: action.payload }
    case SET_ISLOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
