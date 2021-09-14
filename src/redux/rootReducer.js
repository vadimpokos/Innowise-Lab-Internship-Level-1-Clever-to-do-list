import { combineReducers } from 'redux'
import { appReducer } from './appReducer/reducer'
import { dateReducer } from './dateReducer/reducer'
import { todosReducer } from './todosReducer/reducer'
import { userReducer } from './userReducer/reducer'

export const rootReducer = combineReducers({
  todos: todosReducer,
  userInfo: userReducer,
  app: appReducer,
  date: dateReducer,
})
