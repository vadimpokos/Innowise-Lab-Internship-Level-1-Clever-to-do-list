import './App.css'
import 'antd/dist/antd.css'
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from 'react-router-dom'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodoList, logout } from './redux/actions'
import { SignIn } from './SignIn'
import { ToDoList } from './ToDoList'
import { SignUp } from './SignUp'

function App() {
  const user = useSelector((state) => state.userInfo.userInfo.uid)

  useEffect(() => {
    console.log('user', user)
  }, [user])

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            user ? <Redirect to='/app' /> : <Redirect to='/auth' />
          }
        />
        <Route
          path='/app'
          render={() => (user ? <AppRouter /> : <Redirect to='/auth' />)}
        />
        <Route
          path='/auth'
          render={() => (user ? <Redirect to='/app' /> : <AuthRouter />)}
        />
      </Switch>
    </Router>
  )
}

const AppRouter = () => {
  const match = useRouteMatch()
  return (
    <>
      <LogOutButton />
      <Route exact path={`${match.path}`} component={ToDoList} />
    </>
  )
}

const AuthRouter = () => {
  const match = useRouteMatch()
  return (
    <>
      <Route exact path={`${match.path}`} component={SignIn} />
      <Route path={`${match.path}/signup`} component={SignUp} />
    </>
  )
}

const LogOutButton = () => {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() => {
        dispatch(logout())
        dispatch(clearTodoList())
      }}
    >
      Log Out
    </Button>
  )
}

export default App
