import React from 'react'
import { Route } from 'react-router'
import { useRouteMatch } from 'react-router'
import { ToDoList } from '../ToDoList'
import { LogOutButton } from '../LogOutButton'

export const AppRouter = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <LogOutButton />
      <Route exact path={path} component={ToDoList} />
    </>
  )
}
