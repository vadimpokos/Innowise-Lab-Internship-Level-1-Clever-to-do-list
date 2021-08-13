import { FOCUS } from './reduxTypes'

const initialState = {
  focusedId: '',
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCUS:
      return action.payload
    default:
      return state
  }
}
