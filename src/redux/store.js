import thunk from 'redux-thunk'
import { loadState, saveState } from '../localStorage'
import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './rootReducer'

const persistedState = loadState()

export const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

store.subscribe(() => {
  saveState({
    userInfo: store.getState().userInfo,
  })
})
