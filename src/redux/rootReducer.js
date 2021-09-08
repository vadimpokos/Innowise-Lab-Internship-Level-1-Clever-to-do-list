import { combineReducers } from 'redux'
import { appReducer } from './appReducer/appReducer'
import { dateReducer } from './dateReducer/dateReducer'
import { todosReducer } from './todosReducer/todosReducer'
import { userReducer } from './userReducer/userReducer'

export const rootReducer = combineReducers({
  todos: todosReducer,
  userInfo: userReducer,
  app: appReducer,
  date: dateReducer,
})
