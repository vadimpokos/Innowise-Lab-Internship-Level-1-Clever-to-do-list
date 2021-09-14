import React from 'react'
import { useRouteMatch } from 'react-router'
import { Route } from 'react-router'
import { SignUp } from '../Auth/SignUp/index'
import { SignIn } from '../Auth/SignIn/index'

const AuthRouterComponent = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <Route exact path={path} component={SignIn} />
      <Route path={`${path}/signup`} component={SignUp} />
    </>
  )
}

export const AuthRouter = React.memo(AuthRouterComponent)
