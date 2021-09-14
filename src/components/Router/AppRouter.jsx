import React from 'react'
import { Route } from 'react-router'
import { useRouteMatch } from 'react-router'
import { LogOutButton } from '../LogOutButton/index'
import { Main } from '../Main'

const AppRouterComponent = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <LogOutButton />
      <Route exact path={path} component={Main} />
    </>
  )
}

export const AppRouter = React.memo(AppRouterComponent)
