import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PATH_ROUTES } from '../constants/routePaths'
import { AppRouter } from './AppRouter'
import { AuthRouter } from './AuthRouter'

const ToDoRouterComponent = () => {
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

export const ToDoRouter = React.memo(ToDoRouterComponent)
