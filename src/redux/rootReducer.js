import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { todosReducer } from './todosReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  todos: todosReducer,
  userInfo: userReducer,
  app: appReducer,
})
