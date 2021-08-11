import './App.css'
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'
import { SignIn } from './SignIn'
import { ToDoList } from './ToDoList'
import 'antd/dist/antd.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { clearTodoList, logout } from './redux/actions'
import { SignUp } from './SignUp'

function App() {
  const user = useSelector((state) => state.userInfo.userInfo.uid)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Redirect to='/app' /> : <Redirect to='/signin' />}
        </Route>
        <Route path='/app'>
          {user ? <AppRouter /> : <Redirect to='/signin' />}
        </Route>
        <Route path='/signin'>
          {user ? <Redirect to='/app' /> : <SignIn />}
        </Route>
        <Route path='/signup'>
          {user ? <Redirect to='/app' /> : <SignUp />}
        </Route>
      </Switch>
    </Router>
  )
}

const AppRouter = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()

  return (
    <>
      <Button
        onClick={() => {
          dispatch(logout())
          dispatch(clearTodoList())
        }}
      >
        Log Out
      </Button>
      <Switch>
        <Route exact path={`${match.path}`} component={ToDoList} />
      </Switch>
    </>
  )
}

export default App
