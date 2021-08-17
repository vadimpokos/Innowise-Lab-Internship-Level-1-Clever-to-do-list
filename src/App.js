import './App.css'
import 'antd/dist/antd.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PATH_ROUTES } from './Router/RoutePaths'
import { AppRouter } from './Router/AppRouter'
import { AuthRouter } from './Router/AuthRouter'

function App() {
  const user = useSelector((state) => state.userInfo.userInfo.uid)

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={PATH_ROUTES.MAIN}>
          <Redirect to={user ? PATH_ROUTES.APP : PATH_ROUTES.AUTH} />
        </Route>
        <Route
          path={PATH_ROUTES.APP}
          render={() =>
            user ? <AppRouter /> : <Redirect to={PATH_ROUTES.AUTH} />
          }
        />
        <Route
          path={PATH_ROUTES.AUTH}
          render={() =>
            user ? <Redirect to={PATH_ROUTES.APP} /> : <AuthRouter />
          }
        />
      </Switch>
    </Router>
  )
}

export default App
