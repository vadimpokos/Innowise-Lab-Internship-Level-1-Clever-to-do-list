import { CONFIRM_ERROR, LOGIN, LOGOUT, SIGN_UP } from './reduxTypes'

const initialState = {
  userInfo: {},
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userInfo: action.payload }
    case LOGOUT:
      return { userInfo: action.payload }
    case SIGN_UP:
      return { userInfo: action.payload }
    case CONFIRM_ERROR:
      return state
    default:
      return state
  }
}
