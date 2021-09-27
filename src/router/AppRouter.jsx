import React from 'react'
import { Route } from 'react-router'
import { useRouteMatch } from 'react-router'
import { LogOutButton } from '../components/LogOutButton/index'
import { Main } from '../components/Main'

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
