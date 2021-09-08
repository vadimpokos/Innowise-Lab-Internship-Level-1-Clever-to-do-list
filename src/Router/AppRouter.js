import React from 'react'
import { Route } from 'react-router'
import { useRouteMatch } from 'react-router'
import { LogOutButton } from '../Auth/LogOutButton'
import { MainPage } from '../Main'

export const AppRouter = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <LogOutButton />
      <Route exact path={path} component={MainPage} />
    </>
  )
}
